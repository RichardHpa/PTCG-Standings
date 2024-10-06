import fs from 'fs';
import path from 'path';
import { tournamentsFolder } from '../../constants/folders.js';

export const createFolder = async () => {
  console.log(path.resolve());
  if (!fs.existsSync(tournamentsFolder)) {
    console.log('Creating tournaments folder');
    fs.mkdirSync(tournamentsFolder, { recursive: true });
  } else {
    console.log('Tournaments folder already exists');
  }
};
