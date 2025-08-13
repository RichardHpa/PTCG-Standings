import { axios } from 'helpers/axios';

export const baseCardUrl = 'https://api.pokemontcg.io/v2/cards';

import type { CardApiResponse } from 'types/card';

export const getCards = async ({
  pageSize,
  query,
  orderBy,
  page,
}: {
  pageSize: number;
  query: string;
  orderBy: string;
  page: number;
}): Promise<CardApiResponse> => {
  const response = await axios.get(baseCardUrl, {
    params: {
      q: query || '',
      pageSize,
      orderBy,
      page,
    },
  });
  return response.data;
};
