import type { Division } from 'types/divisions';
import type { Round, Standing } from 'types/standing';
import type { DeckList } from 'types/standing';

export interface RoundWithDecklist extends Round {
  decklist?: DeckList;
}

export interface RoundsWithDecklist {
  [key: string]: RoundWithDecklist;
}

export interface RoundRowProps {
  round: RoundWithDecklist;
  roundNum: number | string;
}

export interface RoundsTableProps {
  player: Standing;
  division: Division;
}
