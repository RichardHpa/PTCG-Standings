import clsx from 'clsx';

import { archetypes } from 'constants/archetypes';

import type { ArchetypesProps } from './types';
import type { DeckList } from 'types/standing';
import type { FC } from 'react';
import type { Archetype } from 'constants/archetypes';

interface ImageProp {
  pokemon: string;
  sprite: string;
}

export const getArchetypes = (decklist: DeckList) => {
  const pokemonCards = decklist.pokemon.map(card => card.name);
  const archetypesArray = Object.entries(archetypes);
  const archetype = archetypesArray.find(([_key, value]) => {
    return value.coreCards.every(card => pokemonCards.includes(card.card));
  });

  if (!archetype) {
    return [
      'unknown',
      {
        name: 'unknown',
        sprites: [
          {
            pokemon: 'unknown',
            sprite: 'substitute.png',
          },
        ],
      },
    ] as [string, Archetype];
  }

  return archetype as [string, Archetype];
};

const PokemonSprite = ({
  image,
  size = 'large',
}: {
  image: ImageProp;
  size?: 'small' | 'large';
}) => {
  if (!image) return null;
  return (
    <img
      className={clsx({
        'h-full w-8': size === 'small',
        'h-full w-12': size === 'large',
      })}
      src={`/sprites/pokemon/${image.sprite}`}
      alt={image.pokemon}
    />
  );
};

export const Archetypes: FC<ArchetypesProps> = ({
  decklist,
  onClick,
  size = 'large',
}) => {
  const archetype = getArchetypes(decklist);
  if (!archetype) return null;

  return (
    <div className="flex" onClick={onClick}>
      {archetype[1].sprites.map((sprite, index) => {
        return <PokemonSprite key={index} image={sprite} size={size} />;
      })}
    </div>
  );
};
