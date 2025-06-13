import type { Standing } from 'types/standing';
import type { Division } from 'types/divisions';

export interface QualifedPlayer {
  FirstName: string;
  LastName: string;
  AgeDivision: string;
  Game: string;
  Country: string;
  UNITETeam: string;

  FullName?: string;
  competed?: boolean;
  standing?: Standing;
}

export interface QualifedPlayersTableProps {
  data: QualifedPlayer[];
  division: Division;
  tournamentId: string;
}
