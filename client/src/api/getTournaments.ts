import { axios } from 'helpers/axios';

import { tournamentsMap } from 'constants/tournaments';

import type { TournamentsApiResponse } from 'types/tournament';

const pokeDataApiTournamentsUrl =
  'https://www.pokedata.ovh/apiv2/tcg/tournaments';

export const getTournaments = async (): Promise<TournamentsApiResponse> => {
  try {
    // const response =
    //   await axios.get<TournamentsApiResponse>('/api/tournaments');

    const response = await axios.get<TournamentsApiResponse>(
      pokeDataApiTournamentsUrl,
    );

    const tournaments = response.data.tcg.data;
    const reversedTournaments = tournaments.reverse();

    const mappedTournaments = reversedTournaments.map(tournament => {
      const localData = tournamentsMap[tournament.id] || {};
      return {
        ...tournament,
        ...localData,
      };
    });

    mappedTournaments.sort((a, b) => {
      return (
        new Date(b.date.start).getTime() - new Date(a.date.start).getTime()
      );
    });

    return {
      ...response.data,
      tcg: {
        ...response.data.tcg,
        data: mappedTournaments,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch tournaments');
  }
};
