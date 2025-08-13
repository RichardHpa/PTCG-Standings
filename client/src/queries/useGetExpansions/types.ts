import { ExpansionsApiResponse } from 'types/expansions';

export interface useGetExpansionsProps<TData> {
  select?: (data: ExpansionsApiResponse) => TData;
}
