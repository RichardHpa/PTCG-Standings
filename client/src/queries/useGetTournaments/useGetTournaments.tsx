import { useQuery } from '@tanstack/react-query';

import { getTournaments } from 'api/getTournaments';

import type { useGetTournamentsProps } from './types';
import type { TournamentsApiResponse } from 'types/tournament';

export const useGetTournamentsKey = () => ['tournaments'];

export function useGetTournaments<TData = TournamentsApiResponse>({
  select,
}: useGetTournamentsProps<TData> = {}) {
  return useQuery({
    queryKey: useGetTournamentsKey(),
    queryFn: getTournaments,
    select: select,
  });
}
