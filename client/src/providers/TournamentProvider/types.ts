import type { TournamentApiResponse } from 'types/tournament';

export interface TournamentContextProps {
  tournament: TournamentApiResponse['tournament'];
  divisions: TournamentApiResponse['tournament_data'];
}
