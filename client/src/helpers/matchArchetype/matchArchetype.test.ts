import { describe, expect, test } from 'vitest';

import {
  meetsRequired,
  isExcluded,
  scoreIdentifiers,
  matchArchetype,
} from './matchArchetype';

import type { DeckList } from 'types/standing';
import type { ArchetypeDefinition } from 'constants/archetypes';

// ---------------------------------------------------------------------------
// Minimal helpers to build test decklists without full card objects
// ---------------------------------------------------------------------------

const makeDeck = (pokemonNames: string[]): DeckList => ({
  pokemon: pokemonNames.map(name => ({
    name,
    count: 1,
    number: '1',
    set: 'TST',
  })),
  trainer: [],
  energy: [],
});

const makeArchetype = (
  name: string,
  required: string[],
  identifiers: string[] = [],
  excludes: string[] = [],
): ArchetypeDefinition => ({
  name,
  sprites: [],
  required: required.map(n => ({ type: 'pokemon', name: n })),
  identifiers: identifiers.map(n => ({ type: 'pokemon', name: n })),
  excludes: excludes.map(n => ({ type: 'pokemon', name: n })),
});

// ---------------------------------------------------------------------------
// meetsRequired
// ---------------------------------------------------------------------------

describe('meetsRequired', () => {
  test('returns true when all required cards are present', () => {
    const deck = makeDeck(['Dragapult ex', 'Dreepy']);
    expect(
      meetsRequired(deck, [{ type: 'pokemon', name: 'Dragapult ex' }]),
    ).toBe(true);
  });

  test('returns false when a required card is missing', () => {
    const deck = makeDeck(['Dreepy']);
    expect(
      meetsRequired(deck, [{ type: 'pokemon', name: 'Dragapult ex' }]),
    ).toBe(false);
  });

  test('returns true when required list is empty', () => {
    const deck = makeDeck([]);
    expect(meetsRequired(deck, [])).toBe(true);
  });

  test('respects exactCount — passes when count matches', () => {
    const deck: DeckList = {
      pokemon: [{ name: 'Iron Thorns ex', count: 4, number: '1', set: 'TST' }],
      trainer: [],
      energy: [],
    };
    expect(
      meetsRequired(deck, [
        { type: 'pokemon', name: 'Iron Thorns ex', exactCount: 4 },
      ]),
    ).toBe(true);
  });

  test('respects exactCount — fails when count does not match', () => {
    const deck: DeckList = {
      pokemon: [{ name: 'Iron Thorns ex', count: 2, number: '1', set: 'TST' }],
      trainer: [],
      energy: [],
    };
    expect(
      meetsRequired(deck, [
        { type: 'pokemon', name: 'Iron Thorns ex', exactCount: 4 },
      ]),
    ).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// isExcluded
// ---------------------------------------------------------------------------

describe('isExcluded', () => {
  test('returns false when no excluded cards are present', () => {
    const deck = makeDeck(['Dragapult ex']);
    expect(isExcluded(deck, [{ type: 'pokemon', name: 'Charizard ex' }])).toBe(
      false,
    );
  });

  test('returns true when an excluded card is present', () => {
    const deck = makeDeck(['Dragapult ex', 'Charizard ex']);
    expect(isExcluded(deck, [{ type: 'pokemon', name: 'Charizard ex' }])).toBe(
      true,
    );
  });

  test('returns false when excludes list is empty', () => {
    const deck = makeDeck(['Dragapult ex']);
    expect(isExcluded(deck, [])).toBe(false);
  });

  test('returns false when excludes is undefined', () => {
    const deck = makeDeck(['Dragapult ex']);
    expect(isExcluded(deck, undefined)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// scoreIdentifiers
// ---------------------------------------------------------------------------

describe('scoreIdentifiers', () => {
  test('returns 0 when no identifiers are present', () => {
    const deck = makeDeck(['Dragapult ex']);
    const identifiers = [{ type: 'pokemon' as const, name: 'Iron Thorns ex' }];
    expect(scoreIdentifiers(deck, identifiers)).toBe(0);
  });

  test('returns the count of matched identifiers', () => {
    const deck = makeDeck(['Dragapult ex', 'Iron Thorns ex', 'Charizard ex']);
    const identifiers = [
      { type: 'pokemon' as const, name: 'Iron Thorns ex' },
      { type: 'pokemon' as const, name: 'Charizard ex' },
      { type: 'pokemon' as const, name: 'Gardevoir ex' },
    ];
    expect(scoreIdentifiers(deck, identifiers)).toBe(2);
  });
});

// ---------------------------------------------------------------------------
// matchArchetype
// ---------------------------------------------------------------------------

describe('matchArchetype', () => {
  const dragapultEx = makeArchetype('Dragapult Ex', ['Dragapult ex']);
  const dragapultIronThorns = makeArchetype(
    'Dragapult Iron Thorns',
    ['Dragapult ex'],
    ['Iron Thorns ex'],
  );
  const charizardPidgeot = makeArchetype('Charizard Pidgeot', [
    'Charizard ex',
    'Pidgeot ex',
  ]);
  const archetypes = [dragapultEx, dragapultIronThorns, charizardPidgeot];

  test('returns null when no archetype matches', () => {
    const deck = makeDeck(['Gardevoir ex']);
    expect(matchArchetype(deck, archetypes)).toBeNull();
  });

  test('returns the only matching archetype', () => {
    const deck = makeDeck(['Charizard ex', 'Pidgeot ex']);
    expect(matchArchetype(deck, archetypes)?.name).toBe('Charizard Pidgeot');
  });

  test('returns the more specific variant when two share the same required card', () => {
    // Both dragapultEx and dragapultIronThorns require 'Dragapult ex'.
    // The Iron Thorns variant scores an extra identifier point and should win.
    const deck = makeDeck(['Dragapult ex', 'Iron Thorns ex']);
    expect(matchArchetype(deck, archetypes)?.name).toBe(
      'Dragapult Iron Thorns',
    );
  });

  test('falls back to the generic archetype when the specific identifier is absent', () => {
    const deck = makeDeck(['Dragapult ex']);
    expect(matchArchetype(deck, archetypes)?.name).toBe('Dragapult Ex');
  });

  test('respects excludes — rules out an archetype when an excluded card is present', () => {
    const miraidonFlaafy = makeArchetype(
      'Miraidon Flaafy',
      ['Miraidon ex'],
      ['Flaaffy'],
    );
    const miraidonEx = makeArchetype(
      'Miraidon Ex',
      ['Miraidon ex'],
      [],
      ['Flaaffy'], // ruled out if Flaaffy is present
    );
    const deck = makeDeck(['Miraidon ex', 'Flaaffy']);
    expect(matchArchetype(deck, [miraidonEx, miraidonFlaafy])?.name).toBe(
      'Miraidon Flaafy',
    );
  });

  test('tie-break: most precisely defined archetype wins when scores are equal', () => {
    // Both match with 0 identifier points, but narrowDef has more required cards.
    const broadDef = makeArchetype('Broad', ['Dragapult ex']);
    const narrowDef = makeArchetype('Narrow', ['Dragapult ex', 'Dreepy']);
    const deck = makeDeck(['Dragapult ex', 'Dreepy']);
    expect(matchArchetype(deck, [broadDef, narrowDef])?.name).toBe('Narrow');
  });
});
