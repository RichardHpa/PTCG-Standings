import { useQuery, queryOptions } from '@tanstack/react-query';

import { getTournament } from 'api/getTournament';

import type { useGetTournamentProps } from './types';
import { TournamentApiResponse } from 'types/tournament';

export const getTournamentKey = (tournamentId: string) => [
  'tournaments',
  tournamentId,
];

export function getTournamentQueryOptions<TData = TournamentApiResponse>(
  tournamentId: string | number,
  select?: useGetTournamentProps<TData>['select'],
) {
  const parsedTournamentId = tournamentId.toString();
  return queryOptions({
    queryKey: getTournamentKey(parsedTournamentId),
    queryFn: () => getTournament(parsedTournamentId),
    select: select,
  });
}

export function useGetTournament<TData = TournamentApiResponse>({
  tournamentId,
  select,
}: useGetTournamentProps<TData>) {
  return useQuery(getTournamentQueryOptions<TData>(tournamentId, select));
}
