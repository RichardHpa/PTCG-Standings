import type { Standing } from 'types/standing';
import type { Division } from 'types/divisions';

export interface PinPlayerButtonProps {
  tournamentId: string;
  division: Division;
  player: Standing;
}
