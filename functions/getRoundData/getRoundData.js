// This function is responsible for fetching the round data
import { basePokeDataApiUrl } from '../../constants/folders.js';

import { getHighestRound } from '../getHighestRound/index.js';

export const getRoundData = async ({ tournamentId, round }) => {
  console.log(`Request for round ${round} data for tournament ${tournamentId}`);

  const url = `${basePokeDataApiUrl}/id/${tournamentId}/division/masters+seniors+juniors+juniorsseniors/round/${round}`;
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

    const latestRounds = data.tournament.roundNumbers;
    const highestRound = getHighestRound(latestRounds);

    console.log(round, highestRound);

    if (parseInt(round) > parseInt(highestRound)) {
      console.log('requesting a tournament that seems to be finished');
      throw new Error(
        `Round requested is higher than the highest round for tournament ${tournamentId}`
      );
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};
