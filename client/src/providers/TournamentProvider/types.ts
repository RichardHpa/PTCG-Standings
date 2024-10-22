import type { TournamentApiResponse, Tournament } from 'types/tournament';

export interface TournamentContextProps {
  tournament: Tournament;
  divisions: TournamentApiResponse['tournament_data'];
}
