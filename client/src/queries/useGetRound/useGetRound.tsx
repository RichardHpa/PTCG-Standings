import { useQuery, queryOptions } from '@tanstack/react-query';

import { getTournamentKey } from 'queries/useGetTournament';

import { getRound } from 'api/getRound';

import type { useGetRoundProps } from './types';
import type { Division } from 'types/divisions';
import type { FullRoundApiResponse } from 'types/rounds';

export const getRoundKey = (
  tournamentId: string,
  roundNum: number,
  division: Division,
) => [
  ...getTournamentKey(tournamentId),
  'rounds',
  roundNum.toString(),
  division,
];

export function getRoundQueryOptions<TData = FullRoundApiResponse>(
  tournamentId: string | number,
  roundNumber: number,
  division: Division,
  select?: useGetRoundProps<TData>['select'],
) {
  const parsedTournamentId = tournamentId.toString();
  return queryOptions({
    queryKey: getRoundKey(parsedTournamentId, roundNumber, division),
    queryFn: () =>
      getRound({
        tournamentId: parsedTournamentId,
        roundNumber,
        division,
      }),
    select: select,
  });
}

export function useGetRound<TData = FullRoundApiResponse>({
  tournamentId,
  roundNumber,
  division,
  select,
}: useGetRoundProps<TData>) {
  return useQuery(
    getRoundQueryOptions<TData>(tournamentId, roundNumber, division, select),
  );
}
