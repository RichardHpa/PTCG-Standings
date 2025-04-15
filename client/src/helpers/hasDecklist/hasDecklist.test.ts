import { describe, expect, test } from 'vitest';

import { hasDecklist } from './hasDecklist';

import { mastersStandings } from 'mocks/fixtures/standings';

// Brents decklist - played lost box
const decklist1 = mastersStandings[0].decklist;
// Haru Nishikawa - played charizard
const decklist2 = mastersStandings[1].decklist;

describe('hasDecklist', () => {
  test('should return true if the decklist is an object', () => {
    const result = hasDecklist(decklist1);
    expect(result).toBe(true);

    const result2 = hasDecklist(decklist2);
    expect(result2).toBe(true);
  });

  test('should return false if the decklist is a string', () => {
    const result = hasDecklist('');
    expect(result).toBe(false);
  });

  test('should return false if the decklist is null', () => {
    // @ts-expect-error -- testing null
    const result = hasDecklist(null);
    expect(result).toBe(false);
  });
});
