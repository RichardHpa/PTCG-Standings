import type { TournamentApiResponse, Tournament } from 'types/tournament';
import type { DivisionObject } from 'types/divisions';

export interface TournamentContextProps {
  tournament: Tournament;
  divisions: TournamentApiResponse['tournament_data'];
  divisionObject: DivisionObject;
}
