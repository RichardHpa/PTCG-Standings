import { useQuery, queryOptions } from '@tanstack/react-query';

import { getExpansions } from 'api/getExpansions';

import type { useGetExpansionsProps } from './types';
import { ExpansionsApiResponse } from 'types/expansions';

export const getExpansionsKey = () => ['expansions'];

export const getExpansionsQueryOptions = <TData = ExpansionsApiResponse,>(
  select?: useGetExpansionsProps<TData>['select'],
) =>
  queryOptions({
    queryKey: getExpansionsKey(),
    queryFn: getExpansions,
    staleTime: Infinity,
    select,
  });

export const useGetExpansions = <TData = ExpansionsApiResponse,>({
  select,
}: useGetExpansionsProps<TData> = {}) => {
  return useQuery(getExpansionsQueryOptions<TData>(select));
};
