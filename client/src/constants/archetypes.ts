import { archetypeDefinitions } from 'constants/archetypeDefinitions';
import { archetypeDisplay } from 'constants/archetypeDisplay';

import type { CardRef } from 'constants/archetypeDefinitions';
import type { Sprites } from 'constants/archetypeDisplay';

export type { CardType, CardRef } from 'constants/archetypeDefinitions';
export type { Sprites } from 'constants/archetypeDisplay';

export interface ArchetypeDefinition {
  name: string;
  sprites: Sprites[];
  /** Overrides the chart segment color for this archetype. */
  chartColor?: string;
  /** Populated automatically when converting the object to a list. */
  key?: string;
  /** All of these cards must be present for the archetype to be a candidate. */
  required: CardRef[];
  /**
   * Cards that add specificity. The more of these that are present in the
   * decklist, the higher the score — so a more specific variant beats a
   * generic one without needing order or exclusion guards.
   */
  identifiers: CardRef[];
  /**
   * If any of these cards are present, this archetype is immediately ruled
   * out. Use sparingly — prefer identifiers over excludes where possible.
   */
  excludes?: CardRef[];
}

export const unknownArchetype = {
  name: 'Unknown',
  chartColor: 'lightgrey',
  sprites: [
    {
      pokemon: 'unknown',
      sprite: 'substitute.png',
    },
  ],
  key: 'unknown',
};

type ArchetypeDefinitionsObject = {
  [key: string]: ArchetypeDefinition;
};

export const archetypeDefinitionsObject: ArchetypeDefinitionsObject =
  Object.fromEntries(
    Object.keys(archetypeDefinitions).map(key => [
      key,
      { ...archetypeDefinitions[key], ...archetypeDisplay[key] },
    ]),
  );

export const archetypeDefinitionsList: ArchetypeDefinition[] = Object.entries(
  archetypeDefinitionsObject,
).map(([key, value]) => ({ ...value, key }));
