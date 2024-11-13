import type { Standing } from 'types/standing';
import type { Division } from 'types/divisions';

export interface StandingsTableCardProps {
  player: Standing;
  division: Division;
  playerIndex?: number;
}
