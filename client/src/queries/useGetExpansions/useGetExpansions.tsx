import { useQuery, queryOptions } from '@tanstack/react-query';

import { getExpansions } from 'api/getExpansions';

export const getExpansionsKey = () => ['expansions'];

export const getExpansionsQueryOptions = () =>
  queryOptions({
    queryKey: getExpansionsKey(),
    queryFn: getExpansions,
    staleTime: Infinity,
  });

export const useGetExpansions = () => {
  return useQuery(getExpansionsQueryOptions());
};
