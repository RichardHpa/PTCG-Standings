import express from 'express';
import fs from 'fs';
const router = express.Router();

import { baseFolder, tournamentsFolder } from '../../constants/folders.js';

import { getTournamentData } from '../../functions/getTournamentData/index.js';
import { getRoundData } from '../../functions/getRoundData/index.js';
import { createFile } from '../../functions/createFile/index.js';
import { createFolder } from '../../functions/createFolder/index.js';
import { getAndCreateRoundFile } from '../../functions/getAndCreateRoundFile/index.js';

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
  const { tournamentStatus = 'finished' } = req.query;
  const folder = `${baseFolder}/rounds/${tournamentId}`;
  await createFolder(folder);

  const file = await getAndCreateRoundFile(tournamentId, round);

  const foundDivision = file.tournament_data.find(d => d.division === division);
  if (!foundDivision) {
    res.status(404).send(`Division ${division} not found`);
    return;
  }

  const roundToReturn = {
    type: 'tcg',
    tournament: file.tournament,
    tournament_data: [foundDivision],
  };
  res.send(roundToReturn);

  // const file = `${folder}/${round}.json`;

  // // if the tournament is running, we don't want to actually fetch the data as the cron job should be doing that for us. This is so we aren't hitting the API too much
  // if (tournamentStatus === 'running') {
  //   if (fs.existsSync(file)) {
  //     fs.readFile(file, 'utf8', (err, data) => {
  //       if (err) {
  //         console.error(err);
  //         res.status(404).send(`Round ${round} not found`);
  //       } else {
  //         res.send(JSON.parse(data));
  //       }
  //     });
  //   } else {
  //     res.status(404).send(`Round ${round} not found`);
  //   }
  // }

  // if (fs.existsSync(file)) {
  //   fs.readFile(file, 'utf8', (err, data) => {
  //     if (err) {
  //       console.error(err);
  //       res.status(404).send(`Round ${round} not found`);
  //     } else {
  //       res.send(JSON.parse(data));
  //     }
  //   });
  // } else {
  //   const roundData = await getRoundData({
  //     tournamentId,
  //     division,
  //     round,
  //   });
  //   if (roundData) {
  //     await createFile(roundData, file);
  //     res.send(roundData);
  //   } else {
  //     res.status(404).send(`Round ${round} not found`);
  //   }
  // }
});

export default router;
