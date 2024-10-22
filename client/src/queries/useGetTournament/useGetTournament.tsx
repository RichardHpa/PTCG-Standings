import { useQuery } from '@tanstack/react-query';

import { getTournament } from 'api/getTournament';

import type { useGetTournamentProps } from './types';
import { TournamentApiResponse } from 'types/tournament';

export const useGetTournamentKey = (tournamentId: string) => [
  'tournaments',
  tournamentId,
];

export function useGetTournament<TData = TournamentApiResponse>({
  tournamentId,
  select,
}: useGetTournamentProps<TData>) {
  const parsedTournamentId = tournamentId.toString();
  return useQuery({
    queryKey: useGetTournamentKey(parsedTournamentId),
    queryFn: () => getTournament(parsedTournamentId),
    select: select,
  });
}
