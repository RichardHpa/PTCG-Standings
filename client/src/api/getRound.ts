import { axios } from 'helpers/axios';

import type { FullRoundApiResponse } from 'types/rounds';

interface GetRoundParams {
  tournamentId: string;
  roundNumber: number;
  division: string;
}

export const getRound = async ({
  tournamentId,
  roundNumber,
  division,
}: GetRoundParams): Promise<FullRoundApiResponse> => {
  try {
    const response = await axios.get<FullRoundApiResponse>(
      `/api/tournaments/${tournamentId}/${division}/rounds/${roundNumber}`,
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      `Failed to fetch round ${roundNumber} for tournament ${tournamentId}`,
    );
  }
};
