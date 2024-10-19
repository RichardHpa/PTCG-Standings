import { TournamentsApiResponse } from 'types/tournament';

export interface useGetTournamentsProps<TData> {
  select?: (data: TournamentsApiResponse) => TData;
}
