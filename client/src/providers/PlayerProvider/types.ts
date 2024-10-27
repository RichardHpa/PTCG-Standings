import type { Standing } from 'types/standing';
import type { Division } from 'types/divisions';

export interface PlayerContextProps {
  players: Standing[];
  division: Division;
}
