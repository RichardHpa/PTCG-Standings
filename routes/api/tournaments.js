import express from 'express';
import fs from 'fs';
const router = express.Router();

import { baseFolder, tournamentsFolder } from '../../constants/folders.js';

import { getTournamentData } from '../../functions/getTournamentData/index.js';
import { getRoundData } from '../../functions/getRoundData/index.js';
import { createFile } from '../../functions/createFile/index.js';
import { createFolder } from '../../functions/createFolder/index.js';

router.get('/', (req, res) => {
  console.log('Request for tournaments data');
  fs.readFile(`${baseFolder}/tournaments.json`, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(JSON.parse(data));
  });
});

router.get('/:tournamentId', async (req, res) => {
  const { tournamentId } = req.params;
  const file = `${tournamentsFolder}/${tournamentId}.json`;

  if (fs.existsSync(file)) {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(404).send(`Tournament ${tournamentId} not found`);
      } else {
        res.send(JSON.parse(data));
      }
    });
  } else {
    console.log('file does not exist, fetching data');
    const tournament = await getTournamentData(tournamentId);
    if (tournament) {
      res.send(tournament);
    } else {
      res.status(404).send(`Tournament ${tournamentId} not found`);
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
        console.error(err);
        res.status(404).send(`Round ${round} not found`);
      } else {
        res.send(JSON.parse(data));
      }
    });
  } else {
    const roundData = await getRoundData({
      tournamentId,
      division,
      round,
    });
    if (roundData) {
      await createFile(roundData, file);
      res.send(roundData);
    } else {
      res.status(404).send(`Round ${round} not found`);
    }
  }
});

export default router;
