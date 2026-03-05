import { axios } from 'helpers/axios';

import { tournamentsMap } from 'constants/tournaments';

const pokeDataApiTournamentsUrl =
  'https://www.pokedata.ovh/apiv2/tcg/division/masters+juniors+seniors/id';

import type { TournamentApiResponse } from 'types/tournament';

export const getTournament = async (
  tournamentId: string,
): Promise<TournamentApiResponse> => {
  try {
    // const response = await axios.get<TournamentApiResponse>(
    //   `/api/tournaments/${tournamentId}`,
    // );
    const response = await axios.get<TournamentApiResponse>(
      `${pokeDataApiTournamentsUrl}/${tournamentId}`,
    );

    const localData = tournamentsMap[tournamentId] || {};

    return {
      ...response.data,
      tournament: {
        ...response.data.tournament,
        ...localData,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch tournament with id: ${tournamentId}`);
  }
};
