import { axios } from 'helpers/axios';

import type { TournamentApiResponse } from 'types/tournament';

export const getTournament = async (
  tournamentId: string,
): Promise<TournamentApiResponse> => {
  try {
    const response = await axios.get<TournamentApiResponse>(
      `/api/tournaments/${tournamentId}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch tournament with id: ${tournamentId}`);
  }
};
