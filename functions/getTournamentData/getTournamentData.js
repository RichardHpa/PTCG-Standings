// This function fetches the data for a single tournament and saves it to a file
import { format } from 'date-fns';

import { createFile } from '../createFile/createFile.js';

import { basePokeDataApiFullTournamentUrl, tournamentsFolder } from '../../constants/folders.js';
import { forceFinishTournaments } from '../../constants/forceFinishTournaments.js';

export const getTournamentData = async tournamentId => {
  console.log(`Request for tournament ${tournamentId}`);
  const url = `${basePokeDataApiFullTournamentUrl}/${tournamentId}`;
  let options = {};
  options.redirect = 'follow';
  options.follow = 20;

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (Object.keys(data).length === 0) {
      console.log(`Empty data returned for tournament ${tournamentId}`);
      return;
    }

    const date = format(new Date(), 'Pp');

    // hack as some of the tournaments (mainly the ones in south america that arent run by RK9) are not auto updating from not-started to finished
    if (forceFinishTournaments.includes(tournamentId)) {
      data.tournament.tournamentStatus = 'finished';
    }

    const newData = {
      dataLastUpdated: date,
      ...data,
    };

    await createFile(newData, `${tournamentsFolder}/${tournamentId}.json`);
    console.log(`Data for ${tournamentId} updated at ${date} and file saved`);

    return newData;
  } catch (error) {
    console.error(error);
  }
};
