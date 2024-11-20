import { roundsFolder } from '../../constants/folders.js';

import { getRoundData } from '../getRoundData/getRoundData.js';

import { readFile } from '../readFile/index.js';
import { createFile } from '../createFile/index.js';

export const getAndCreateRoundFile = async (tournamentId, round) => {
  const folder = `${roundsFolder}/${tournamentId}`;
  const filePath = `${folder}/${round}.json`;

  const file = await readFile(filePath);
  if (file) {
    return file;
  }

  const roundData = await getRoundData({ tournamentId, round });
  await createFile(roundData, filePath);

  return roundData;
};
