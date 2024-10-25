import type { Division } from 'types/divisions';
import type { Standing } from 'types/standing';

export interface StandingsCardProps {
  division: Division;
  standings: Standing[];
}

export interface StandingsRowProps {
  player: Standing;
}
