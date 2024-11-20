import { tournamentsFolder } from '../../constants/folders';

import { readFile } from '../readFile';

export const checkNewRound = async (tournamentId, division, currentRound) => {
  const currentlySavedTournamentFile = await readFile(`${tournamentsFolder}/${tournamentId}.json`);
  const currentlySavedRound = currentlySavedTournamentFile.tournament.roundNumbers[division];

  if (currentRound > currentlySavedRound) {
    return true;
  }
  return false;
};
