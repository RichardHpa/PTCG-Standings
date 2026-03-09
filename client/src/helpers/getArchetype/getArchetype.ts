import {
  archetypeDefinitionsList,
  unknownArchetype,
} from 'constants/archetypes';
import { matchArchetype } from 'helpers/matchArchetype';

import type { DeckList } from 'types/standing';
import type { ArchetypeDefinition } from 'constants/archetypes';

type Archetype = Omit<
  ArchetypeDefinition,
  'required' | 'identifiers' | 'excludes'
>;

export const getArchetype = (decklist: DeckList | string): Archetype | null => {
  if (!decklist || typeof decklist === 'string') return null;

  const match = matchArchetype(decklist, archetypeDefinitionsList);

  if (!match) return unknownArchetype;

  return {
    name: match.name,
    chartColor: match.chartColor,
    sprites: match.sprites,
    key: match.key,
  };
};
