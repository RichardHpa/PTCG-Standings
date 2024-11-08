import type { DeckList } from 'types/standing';

export const hasDecklist = (decklist: DeckList | string) => {
  return typeof decklist !== 'string';
};
