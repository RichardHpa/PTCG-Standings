import { useInfiniteQuery } from '@tanstack/react-query';

import { getCards } from 'api/getCards';

import type { useGetCardsProps, useGetCardsInfiniteProps } from './types';
import { CardApiResponse } from 'types/card';

export const getCardsKey = (params: {
  pageSize?: number;
  query?: string;
  orderBy?: string;
}) => ['cards', params];

export const useGetCards = ({
  pageSize = 20,
  query = '',
  orderBy = 'name',
}: useGetCardsProps = {}) => {
  return useInfiniteQuery({
    queryKey: getCardsKey({ pageSize, query, orderBy }),
    queryFn: ({ pageParam = 1 }) =>
      getCards({
        pageSize,
        query,
        orderBy,
        page: pageParam as number,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: CardApiResponse, allPages) => {
      const totalPages = Math.ceil(lastPage.totalCount / pageSize);
      const nextPage = allPages.length + 1;
      return nextPage <= totalPages ? nextPage : undefined;
    },
    staleTime: Infinity,
  });
};

export const useGetCardsInfinite = ({
  pageSize = 20,
  query = '',
  orderBy = 'name',
  enabled = true,
}: useGetCardsInfiniteProps = {}) => {
  return useInfiniteQuery({
    queryKey: getCardsKey({ pageSize, query, orderBy }),
    queryFn: ({ pageParam = 1 }) =>
      getCards({
        pageSize,
        query,
        orderBy,
        page: pageParam as number,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: CardApiResponse, allPages) => {
      const totalPages = Math.ceil(lastPage.totalCount / pageSize);
      const nextPage = allPages.length + 1;
      return nextPage <= totalPages ? nextPage : undefined;
    },
    staleTime: Infinity,
    enabled,
  });
};
