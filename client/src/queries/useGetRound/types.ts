import type { FullRoundApiResponse } from 'types/rounds';
import type { Division } from 'types/divisions';

export interface useGetRoundProps<TData> {
  tournamentId: string | number;
  roundNumber: number;
  division: Division;
  select?: (data: FullRoundApiResponse) => TData;
}
