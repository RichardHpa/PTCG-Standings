import type { DeckList } from 'types/standing';

export interface ArchetypesProps {
  decklist: DeckList;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  size?: 'small' | 'large';
}
