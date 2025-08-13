import { axios } from 'helpers/axios';

import type { ExpansionsApiResponse } from 'types/expansions';

const expansionsUrl = 'https://api.pokemontcg.io/v2/sets';

export const getExpansions = async (): Promise<ExpansionsApiResponse> => {
  const response = await axios.get<ExpansionsApiResponse>(expansionsUrl);
  return response.data;
};
