import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { format } from 'date-fns';
import cors from 'cors';
import cron from 'node-cron';
import cronstrue from 'cronstrue';
import fs from 'fs';
import fetch from 'node-fetch';

import 'dotenv/config';

import {
  tournamentsFolder,
  // roundsFolder,
  basePokeDataApiTournamentsUrl,
  baseFolder,
} from './constants/folders.js';

import { createFolder } from './functions/createFolder/index.js';
import { getTournamentsData } from './functions/getTournamentsData/index.js';
import { getTournamentData } from './functions/getTournamentData/index.js';
import { checkRunningTournaments } from './functions/checkRunningTournaments/index.js';
import { logErrorWithContext } from './utils/apiHelpers.js';
import { logInfo, logSchedulerEvent, logError } from './utils/logger.js';
import { standardRateLimit, strictRateLimit } from './utils/rateLimiter.js';
import {
  requestTimer,
  errorHandler,
  notFoundHandler,
  securityHeaders,
} from './utils/middleware.js';
import { getOngoingRequestsCount, getOngoingRequests } from './utils/requestDeduplication.js';

import tournamentsRoutes from './routes/api/tournaments.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 5001;
const app = express();

// Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());
app.use(securityHeaders);
app.use(requestTimer);

function wwwRedirect(req, res, next) {
  if (req.headers.host.slice(0, 4) === 'www.') {
    const newHost = req.headers.host.slice(4);
    return res.redirect(301, req.protocol + '://' + newHost + req.originalUrl);
  }
  next();
}

app.set('trust proxy', true);
app.use(wwwRedirect);

let tournamentsToTrack = [];
let singleTournamentSchedulerRunning = false;

// API Routes with rate limiting
app.get('/api', standardRateLimit, (_req, res) => {
  res.json({
    status: 'running',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '2.1.0',
  });
});

app.get('/api/health', standardRateLimit, async (req, res) => {
  try {
    // Check if we can read the tournaments file
    const tournamentsFile = `${baseFolder}/tournaments.json`;
    let tournamentsData = null;
    let tournamentsFileExists = false;

    try {
      if (fs.existsSync(tournamentsFile)) {
        tournamentsFileExists = true;
        const data = fs.readFileSync(tournamentsFile, 'utf8');
        tournamentsData = JSON.parse(data);
      }
    } catch (fileError) {
      logError('Error reading tournaments file', fileError);
    }

    // Try to fetch fresh data from pokedata API
    let apiStatus = 'unknown';
    let lastApiCheck = null;

    try {
      const response = await fetch(basePokeDataApiTournamentsUrl, {
        method: 'HEAD',
        timeout: 5000,
      });
      apiStatus = response.ok ? 'healthy' : `error_${response.status}`;
      lastApiCheck = new Date().toISOString();
    } catch {
      apiStatus = 'unreachable';
      lastApiCheck = new Date().toISOString();
    }

    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        fileSystem: {
          tournamentsFileExists,
          tournamentsDataAge: tournamentsData ? tournamentsData.dataLastUpdated : null,
        },
        pokedataApi: {
          status: apiStatus,
          lastCheck: lastApiCheck,
        },
        schedulers: {
          tournamentsScheduler: tournamentsSchedule.running,
          singleTournamentScheduler: singleTournamentSchedule.running,
          trackedTournaments: tournamentsToTrack.length,
        },
        requestDeduplication: {
          ongoingRequestsCount: getOngoingRequestsCount(),
          ongoingRequests: getOngoingRequests(),
        },
      },
    };

    // Determine overall health status
    if (apiStatus === 'unreachable' && !tournamentsFileExists) {
      healthData.status = 'degraded';
    } else if (apiStatus === 'unreachable') {
      healthData.status = 'warning';
    }

    res.json(healthData);
  } catch (error) {
    res.status(500).json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: error.message,
    });
  }
});

// Apply rate limiting to tournament routes
app.use('/api/tournaments', strictRateLimit, tournamentsRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, './client/dist')));

// Catch-all route for SPA
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

// Error handling middleware (must be last)
app.use(notFoundHandler);
app.use(errorHandler);

// Schedulers
const singleTournamentsScheduleTimer = '*/10 * * * *';
const singleTournamentSchedule = cron.schedule(
  singleTournamentsScheduleTimer,
  async () => {
    logSchedulerEvent('singleTournament', 'started', {
      timer: cronstrue.toString(singleTournamentsScheduleTimer),
      timestamp: format(new Date(), 'Pp'),
    });

    const trackedTournamentIds = tournamentsToTrack.map(tournament => tournament.id);
    logInfo('Current tracked tournaments', { tournamentIds: trackedTournamentIds });

    let updateTournaments = false;
    for (const tournament of tournamentsToTrack) {
      try {
        const updatedData = await getTournamentData(tournament.id);
        if (updatedData && updatedData.tournamentStatus === 'finished') {
          logInfo(`Tournament ended`, { tournamentId: tournament.id });
          updateTournaments = true;
          tournamentsToTrack = tournamentsToTrack.filter(t => t.id !== tournament.id);
        }
      } catch (error) {
        const isCritical = logErrorWithContext(error, `singleTournamentSchedule(${tournament.id})`);
        if (isCritical) {
          logError('Critical error in single tournament scheduler, stopping scheduler');
          singleTournamentSchedulerRunning = false;
          singleTournamentSchedule.stop();
          return;
        }
        logInfo(`Skipping tournament due to non-critical error`, { tournamentId: tournament.id });
      }
    }

    if (updateTournaments === true) {
      logInfo('Tournament ended, updating tournaments data');
      try {
        await getTournamentsData();
      } catch (error) {
        const isCritical = logErrorWithContext(
          error,
          'singleTournamentSchedule(updateTournaments)'
        );
        if (isCritical) {
          logError('Critical error updating tournaments data, stopping scheduler');
          singleTournamentSchedulerRunning = false;
          singleTournamentSchedule.stop();
          return;
        }
      }
    }

    if (tournamentsToTrack.length === 0) {
      logInfo('No more tournaments to track, stopping single tournament scheduler');
      singleTournamentSchedulerRunning = false;
      singleTournamentSchedule.stop();
    }
  },
  {
    scheduled: false,
  }
);

const tournamentsScheduleTimer = '*/30 * * * *';
const tournamentsSchedule = cron.schedule(
  tournamentsScheduleTimer,
  async () => {
    logSchedulerEvent('tournaments', 'started', {
      timer: cronstrue.toString(tournamentsScheduleTimer),
      timestamp: format(new Date(), 'Pp'),
    });

    try {
      const tournaments = await getTournamentsData();
      if (!tournaments) {
        logInfo('Failed to fetch tournaments data, skipping this run');
        return;
      }

      const runningTournamentsData = await checkRunningTournaments(tournaments);
      const runningTournamentIds = runningTournamentsData.map(tournament => tournament.id);

      logInfo('Current running tournaments', { tournamentIds: runningTournamentIds });

      // if there are no running tournaments, stop the single tournament scheduler
      if (runningTournamentsData.length === 0 && singleTournamentSchedulerRunning === true) {
        logInfo('No running tournaments found, stopping single tournament scheduler');
        singleTournamentSchedulerRunning = false;
        tournamentsToTrack = [];
        singleTournamentSchedule.stop();
        return;
      }

      // if there are running tournaments and the single tournament scheduler is not running, start it
      if (runningTournamentsData.length > 0 && singleTournamentSchedulerRunning === false) {
        logInfo('Running tournaments found, starting single tournament scheduler');
        tournamentsToTrack = [...runningTournamentsData];
        singleTournamentSchedulerRunning = true;
        singleTournamentSchedule.start();
        return;
      }

      // if there are running tournaments and the single tournament scheduler is running, check if the tournaments to track have changed
      if (runningTournamentsData.length > 0 && singleTournamentSchedulerRunning === true) {
        tournamentsToTrack = [...runningTournamentsData];
        return;
      }
    } catch (error) {
      const isCritical = logErrorWithContext(error, 'tournamentsSchedule');
      if (isCritical) {
        logError('Critical error in tournaments scheduler, stopping all schedulers');
        singleTournamentSchedulerRunning = false;
        tournamentsToTrack = [];
        singleTournamentSchedule.stop();
        tournamentsSchedule.stop();
      }
    }
  },
  {
    scheduled: false,
  }
);

const initialSetup = async () => {
  logInfo('Initial Setup');
  await createFolder(tournamentsFolder);
  // await createFolder(roundsFolder); // TODO: this isnt being used yet so lets just comment it out for now

  if (!process.argv.includes('--local')) {
    try {
      const tournamentsData = await getTournamentsData();
      if (!tournamentsData) {
        logInfo('Failed to fetch initial tournaments data, skipping tournament tracking setup');
        return;
      }

      const runningTournamentsData = await checkRunningTournaments(tournamentsData);
      tournamentsToTrack = [...runningTournamentsData];

      const runningTournamentIds = runningTournamentsData.map(tournament => tournament.id);
      logInfo('Initial running tournaments', { tournamentIds: runningTournamentIds });

      for (const tournament of tournamentsToTrack) {
        try {
          await getTournamentData(tournament.id);
        } catch (error) {
          const isCritical = logErrorWithContext(error, `initialSetup(${tournament.id})`);
          if (isCritical) {
            logError('Critical error during initial setup, stopping tournament tracking');
            tournamentsToTrack = [];
            break;
          }
        }
      }

      if (process.argv.includes('--scheduler')) {
        tournamentsSchedule.start();
        if (tournamentsToTrack.length > 0) {
          logInfo('Running tournaments found, starting single tournament scheduler');
          singleTournamentSchedulerRunning = true;
          singleTournamentSchedule.start();
        }
      }
    } catch (error) {
      const isCritical = logErrorWithContext(error, 'initialSetup');
      if (isCritical) {
        logError('Critical error during initial setup, application may not function properly');
      }
    }
  }
};

initialSetup().then(() => {
  app.listen(port, () => {
    logInfo('Server started', {
      port,
      timestamp: format(new Date(), 'Pp'),
      environment: process.env.NODE_ENV || 'development',
    });

    if (process.env.NODE_ENV === 'development') {
      logInfo('Development server', { url: `http://localhost:${port}` });
    }
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  logInfo('SIGTERM received, shutting down gracefully');
  singleTournamentSchedule.stop();
  tournamentsSchedule.stop();
  process.exit(0);
});

process.on('SIGINT', () => {
  logInfo('SIGINT received, shutting down gracefully');
  singleTournamentSchedule.stop();
  tournamentsSchedule.stop();
  process.exit(0);
});
