import { TournamentApiResponse } from 'types/tournament';

export interface useGetTournamentProps<TData> {
  tournamentId: string | number;
  select?: (data: TournamentApiResponse) => TData;
}
