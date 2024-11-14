// This function is responsible for fetching the round data
import { basePokeDataApiUrl } from '../../constants/folders.js';

export const getRoundData = async ({ tournamentId, division, round }) => {
  console.log(
    `Request for round ${round} data for tournament ${tournamentId} and division ${division}`
  );

  const url = `${basePokeDataApiUrl}/id/${tournamentId}/division/${division}/round/${round}`;
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

    const checkRound = parseInt(data.tournament_data[0].data.round);
    const parsedRound = parseInt(round);
    console.log(parsedRound, checkRound);
    if (parsedRound > checkRound) {
      throw new Error(
        `Round ${round} is less than the current round ${checkRound} for tournament ${tournamentId}`
      );
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};
