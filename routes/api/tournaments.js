import express from 'express';
import fs from 'fs';
const router = express.Router();

import { baseFolder, tournamentsFolder } from '../../constants/folders.js';

import { getTournamentData } from '../../functions/getTournamentData/index.js';
import { getRoundData } from '../../functions/getRoundData/index.js';
import { createFile } from '../../functions/createFile/index.js';
import { createFolder } from '../../functions/createFolder/index.js';
import { logErrorWithContext } from '../../utils/apiHelpers.js';
import { logInfo, logDataOperation, logFileOperation } from '../../utils/logger.js';
import { cacheControl } from '../../utils/middleware.js';
import { deduplicateRequest } from '../../utils/requestDeduplication.js';

router.get('/', cacheControl(300), (req, res) => {
  logInfo('🏆 Request for tournaments data');
  fs.readFile(`${baseFolder}/tournaments.json`, 'utf8', (err, data) => {
    if (err) {
      logDataOperation('read', 'tournaments', null, false, { error: err.message });
      res.status(500).json({
        error: 'Failed to load tournaments data',
        message: 'The tournaments data is currently unavailable. Please try again later.',
      });
      return;
    }
    try {
      const parsedData = JSON.parse(data);
      logDataOperation('read', 'tournaments', null, true);
      res.send(parsedData);
    } catch (parseError) {
      logDataOperation('parse', 'tournaments', null, false, { error: parseError.message });
      res.status(500).json({
        error: 'Failed to parse tournaments data',
        message: 'The tournaments data is corrupted. Please try again later.',
      });
    }
  });
});

router.get('/:tournamentId', async (req, res) => {
  const { tournamentId } = req.params;
  const file = `${tournamentsFolder}/${tournamentId}.json`;

  if (fs.existsSync(file)) {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        logFileOperation('read', file, false, { error: err.message });
        res.status(500).json({
          error: 'Failed to load tournament data',
          message: 'The tournament data is currently unavailable. Please try again later.',
        });
      } else {
        try {
          const parsedData = JSON.parse(data);
          logFileOperation('read', file, true);
          res.send(parsedData);
        } catch (parseError) {
          logFileOperation('parse', file, false, { error: parseError.message });
          res.status(500).json({
            error: 'Failed to parse tournament data',
            message: 'The tournament data is corrupted. Please try again later.',
          });
        }
      }
    });
  } else {
    logInfo('📁 Tournament file does not exist, fetching data', { tournamentId });
    try {
      const tournament = await deduplicateRequest(tournamentId, () =>
        getTournamentData(tournamentId)
      );
      if (tournament) {
        res.send(tournament);
      } else {
        res.status(404).json({
          error: 'Tournament not found',
          message: `Tournament ${tournamentId} could not be found or is currently unavailable.`,
        });
      }
    } catch (error) {
      const isCritical = logErrorWithContext(error, `API:getTournament(${tournamentId})`);
      if (isCritical) {
        res.status(500).json({
          error: 'Critical error fetching tournament',
          message:
            'The tournament data is currently unavailable due to a server error. Please try again later.',
        });
      } else {
        res.status(503).json({
          error: 'Temporary error fetching tournament',
          message: 'The tournament data is temporarily unavailable. Please try again later.',
        });
      }
    }
  }
});

router.get('/:tournamentId/:division/rounds/:round', async (req, res) => {
  const { tournamentId, division, round } = req.params;
  const folder = `${baseFolder}/rounds/${tournamentId}/${division}`;
  await createFolder(folder);

  const file = `${folder}/${round}.json`;

  if (fs.existsSync(file)) {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        logFileOperation('read', file, false, { error: err.message });
        res.status(500).json({
          error: 'Failed to load round data',
          message: 'The round data is currently unavailable. Please try again later.',
        });
      } else {
        try {
          const parsedData = JSON.parse(data);
          logFileOperation('read', file, true);
          res.send(parsedData);
        } catch (parseError) {
          logFileOperation('parse', file, false, { error: parseError.message });
          res.status(500).json({
            error: 'Failed to parse round data',
            message: 'The round data is corrupted. Please try again later.',
          });
        }
      }
    });
  } else {
    logInfo('📁 Round file does not exist, fetching data', { tournamentId, division, round });
    try {
      const roundData = await deduplicateRequest(`${tournamentId}-${division}-${round}`, () =>
        getRoundData({
          tournamentId,
          division,
          round,
        })
      );
      if (roundData) {
        await createFile(roundData, file);
        res.send(roundData);
      } else {
        res.status(404).json({
          error: 'Round not found',
          message: `Round ${round} for tournament ${tournamentId} could not be found or is currently unavailable.`,
        });
      }
    } catch (error) {
      const isCritical = logErrorWithContext(
        error,
        `API:getRound(${tournamentId}/${division}/${round})`
      );
      if (isCritical) {
        res.status(500).json({
          error: 'Critical error fetching round data',
          message:
            'The round data is currently unavailable due to a server error. Please try again later.',
        });
      } else {
        res.status(503).json({
          error: 'Temporary error fetching round data',
          message: 'The round data is temporarily unavailable. Please try again later.',
        });
      }
    }
  }
});

export default router;
