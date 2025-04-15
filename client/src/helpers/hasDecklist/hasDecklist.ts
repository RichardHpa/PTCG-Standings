import type { DeckList } from 'types/standing';

export const hasDecklist = (decklist: DeckList | string) => {
  // Check if the decklist is null or undefined
  if (decklist === null || decklist === undefined) {
    return false;
  }
  return typeof decklist !== 'string';
};
