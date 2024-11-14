import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { format } from 'date-fns';
import cors from 'cors';
import cron from 'node-cron';
import cronstrue from 'cronstrue';

import 'dotenv/config';

import { tournamentsFolder, roundsFolder } from './constants/folders.js';

import { createFolder } from './functions/createFolder/index.js';
import { getTournamentsData } from './functions/getTournamentsData/index.js';
import { getTournamentData } from './functions/getTournamentData/index.js';
import { checkRunningTournaments } from './functions/checkRunningTournaments/index.js';

import tournamentsRoutes from './routes/api/tournaments.js';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(cors());

let tournamentsToTrack = [];
let singleTournamentSchedulerRunning = false;

app.use('/api/tournaments', tournamentsRoutes);

app.use(express.static(path.join(__dirname, './client/dist')));
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const singleTournamentsScheduleTimer = '*/15 * * * *';
const singleTournamentSchedule = cron.schedule(
  singleTournamentsScheduleTimer,
  async () => {
    console.log(
      `Running single tournament tasks ${cronstrue.toString(
        singleTournamentsScheduleTimer
      )}, ran at ${format(new Date(), 'Pp')}`
    );

    const trackedTournamentIds = tournamentsToTrack.map(tournament => tournament.id);
    console.log('-------------------');
    console.log('current tracked tournaments:', trackedTournamentIds);
    console.log('-------------------');

    let updateTournaments = false;
    for (const tournament of tournamentsToTrack) {
      const updatedData = await getTournamentData(tournament.id);
      if (updatedData.tournamentStatus === 'finished') {
        console.log(`Tournament ${tournament.id} has ended, removing from tracking`);
        updateTournaments = true;
        tournamentsToTrack = tournamentsToTrack.filter(t => t.id !== tournament.id);
      }
    }

    if (updateTournaments === true) {
      console.log('A tournament has ended, updating tournaments data to keep it in sync');
      await getTournamentsData();
    }

    if (tournamentsToTrack.length === 0) {
      console.log('No more tournaments to track, stopping single tournament scheduler');
      singleTournamentSchedulerRunning = false;
      singleTournamentSchedule.stop();
    }
  },
  {
    scheduled: false,
  }
);

const tournamentsScheduleTimer = '0 * * * *';
const tournamentsSchedule = cron.schedule(
  tournamentsScheduleTimer,
  async () => {
    console.log(
      `Running Tournaments task ${cronstrue.toString(tournamentsScheduleTimer)}, ran at ${format(
        new Date(),
        'Pp'
      )}`
    );
    const tournaments = await getTournamentsData();
    const runningTournamentsData = await checkRunningTournaments(tournaments);

    // log the id of the running tournaments
    const runningTournamentIds = runningTournamentsData.map(tournament => tournament.id);
    console.log('-------------------');
    console.log('current running tournaments:', runningTournamentIds);
    console.log('-------------------');
    // if there are no running tournaments, stop the single tournament scheduler
    if (runningTournamentsData.length === 0 && singleTournamentSchedulerRunning === true) {
      console.log('No running tournaments found, stopping single tournament scheduler');
      singleTournamentSchedulerRunning = false;
      tournamentsToTrack = [];
      singleTournamentSchedule.stop();
      return;
    }

    // if there are running tournaments and the single tournament scheduler is not running, start it
    if (runningTournamentsData.length > 0 && singleTournamentSchedulerRunning === false) {
      console.log('Running tournaments found, starting single tournament scheduler');
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
  },
  {
    scheduled: false,
  }
);

const initialSetup = async () => {
  console.log('Initial Setup');
  await createFolder(tournamentsFolder);
  await createFolder(roundsFolder);
  const tournamentsData = await getTournamentsData();
  const runningTournamentsData = await checkRunningTournaments(tournamentsData);
  tournamentsToTrack = [...runningTournamentsData];

  // log the id of the running tournaments
  const runningTournamentIds = runningTournamentsData.map(tournament => tournament.id);
  console.log('-------------------');
  console.log('current running tournaments:', runningTournamentIds);
  console.log('-------------------');

  for (const tournament of tournamentsToTrack) {
    await getTournamentData(tournament.id);
  }

  if (process.argv.includes('--scheduler')) {
    tournamentsSchedule.start();

    if (tournamentsToTrack.length > 0) {
      console.log('Running tournaments found, starting single tournament scheduler');
      singleTournamentSchedulerRunning = true;
      singleTournamentSchedule.start();
    }
  }
};

initialSetup().then(() => {
  app.listen(port, () => {
    console.log(`Server started at ${format(new Date(), 'Pp')}`);
    console.log(`Listening on PORT: ${port}`);

    if (process.env.NODE_ENV === 'development') {
      console.log(`Open http://localhost:${port} to see the app`);
    }
  });
});
