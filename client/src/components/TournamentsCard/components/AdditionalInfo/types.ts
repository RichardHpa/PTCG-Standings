import type { Tournament } from 'types/tournament';

export interface AdditionalInfoProps {
  winners: Tournament['winners'];
  roundNumbers: Tournament['roundNumbers'];
  tournamentStatus: Tournament['tournamentStatus'];
}

export interface AdditionInfoRowProps {
  division: string;
  winner?: string | null;
  roundNumber?: number | null;
}
