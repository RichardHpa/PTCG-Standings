import { archetypesList } from 'constants/archetypes';

import type { DeckList } from 'types/standing';
import type { ArchetypeList } from 'constants/archetypes';

type Archetype = Omit<ArchetypeList, 'fn'>;

export const getArchetype = (decklist: DeckList | string): Archetype | null => {
  if (!decklist || typeof decklist === 'string') return null;
  const match = archetypesList.find(archetype => {
    return archetype.fn(decklist);
  });

  if (!match) {
    const unknownArchetype: Archetype = {
      name: 'Unknown',
      color: 'lightgrey',
      sprites: [
        {
          pokemon: 'unknown',
          sprite: 'substitute.png',
        },
      ],
    };

    return unknownArchetype;
  }

  return {
    name: match.name,
    color: match.color,
    sprites: match.sprites,
  } as Archetype;
};
