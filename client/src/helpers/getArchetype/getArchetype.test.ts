import { describe, expect, test } from 'vitest';

import { getArchetype } from './getArchetype';

import { mastersStandings } from 'mocks/fixtures/standings';

// Brents decklist - played lost box
const decklist1 = mastersStandings[0].decklist;
// Haru Nishikawa - played charizard
const decklist2 = mastersStandings[1].decklist;

// ideall there shouldnt
const unkonwnDecklist = {
  pokemon: [],
  trainer: [],
  energy: [
    {
      count: 30,
      name: 'Fire Energy - Basic',
      number: '153',
      set: 'CRZ',
    },
  ],
};

describe('getArchetype', () => {
  test('should return the archetype of a decklist', () => {
    const archetype1 = getArchetype(decklist1);
    const archetype2 = getArchetype(decklist2);

    expect(archetype1).toStrictEqual({
      name: 'Lost zone box',
      color: undefined,
      sprites: [{ pokemon: 'Comfey', sprite: '764.png' }],
      key: 'lostZoneBox',
    });

    expect(archetype2).toStrictEqual({
      name: 'Charizard Pidgeot',
      color: undefined,
      sprites: [
        { pokemon: 'Charizard', sprite: '6.png' },
        { pokemon: 'Pidgeot', sprite: '18.png' },
      ],
      key: 'charizardPidgeot',
    });
  });

  test('should return null if the decklist is empty', () => {
    // @ts-expect-error -- testing null
    const archetype = getArchetype(null);
    expect(archetype).toBeNull();
  });

  test('should return null if the decklist is a string', () => {
    const archetype = getArchetype('test');
    expect(archetype).toBeNull();
  });

  test('should return unknown archetype if the decklist is not found', () => {
    const archetype = getArchetype(unkonwnDecklist);
    expect(archetype).toStrictEqual({
      name: 'Unknown',
      color: 'lightgrey',
      sprites: [
        {
          pokemon: 'unknown',
          sprite: 'substitute.png',
        },
      ],
      key: 'unknown',
    });
  });
});
