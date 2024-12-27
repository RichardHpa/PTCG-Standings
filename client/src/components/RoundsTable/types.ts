import type { Division } from 'types/divisions';
import type { Round, Standing } from 'types/standing';

export interface RoundWithArchetype extends Round {
  archetype?: string;
}

export interface RoundsWithArchetype {
  [key: string]: RoundWithArchetype;
}

export interface RoundRowProps {
  round: RoundWithArchetype;
  roundNum: number | string;
}

export interface RoundsTableProps {
  player: Standing;
  division: Division;
}
