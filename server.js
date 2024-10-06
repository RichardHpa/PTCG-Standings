import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { format } from 'date-fns';
import cors from 'cors';
import 'dotenv/config';

import { createFolder } from './functions/createFolder/index.js';
import { getTournamentsData } from './functions/getTournamentsData/index.js';
import { checkRunningTournaments } from './functions/checkRunningTournaments/index.js';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(cors());

let tournamentsToTrack = [];

app.use(express.static(path.join(__dirname, './client/dist')));
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

const initialSetup = async () => {
  console.log('Initial Setup');
  await createFolder();
  const tournamentsData = await getTournamentsData();
  const runningTournamentsData = await checkRunningTournaments(tournamentsData);
  tournamentsToTrack = [...runningTournamentsData];
  console.log(tournamentsToTrack);
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
