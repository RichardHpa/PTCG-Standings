import { axios } from 'helpers/axios';

import { tournamentsMap } from 'constants/tournaments';

import type { TournamentApiResponse } from 'types/tournament';

export const getTournament = async (
  tournamentId: string,
): Promise<TournamentApiResponse> => {
  try {
    const response = await axios.get<TournamentApiResponse>(
      `/api/tournaments/${tournamentId}`,
    );

    const localData = tournamentsMap[tournamentId] || {};

    return {
      ...response.data,
      tournament: {
        ...localData,
        ...response.data.tournament,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch tournament with id: ${tournamentId}`);
  }
};
