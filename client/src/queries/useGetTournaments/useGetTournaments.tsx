import { useQuery } from '@tanstack/react-query';

import { tournamentsMap } from 'constants/tournaments';

import { getTournaments } from 'api/getTournaments';

export const useGetTournamentsKey = () => ['tournaments'];

export const useGetTournaments = () => {
  return useQuery({
    queryKey: useGetTournamentsKey(),
    queryFn: getTournaments,
    select: data => {
      const tournaments = data.tcg.data.map(tournament => {
        const localData = tournamentsMap[tournament.id] || {};
        return {
          ...tournament,
          ...localData,
        };
      });

      return { tournaments: tournaments, apiUpdatedAt: data.dataLastUpdated };
    },
  });
};
