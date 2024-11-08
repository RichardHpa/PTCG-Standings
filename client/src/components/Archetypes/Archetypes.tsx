import clsx from 'clsx';

import { archetypes } from 'constants/archetypes';

import type { ArchetypesProps } from './types';
import type { DeckList } from 'types/standing';
import type { CoreCard } from 'constants/archetypes';
import type { FC } from 'react';

const getArchetypes = (decklist: DeckList) => {
  const pokemonCards = decklist.pokemon.map(card => card.name);
  const archetypesArray = Object.entries(archetypes);
  const archetype = archetypesArray.find(([_key, value]) => {
    return value.coreCards.every(card => pokemonCards.includes(card.card));
  });

  if (!archetype) {
    return [
      {
        card: null,
        pokemon: 'Unknown',
        image: 'substitute.png',
      },
    ];
  }

  return archetype[1].coreCards.map((card: CoreCard) => {
    return {
      pokemon: card.pokemon,
      card: card.card,
      image: card.sprite,
    };
  });
};

interface ImageProp {
  pokemon: string;
  image?: string;
}

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
      src={`/sprites/pokemon/${image.image}`}
      alt={image.pokemon}
    />
  );
};

export const Archetypes: FC<ArchetypesProps> = ({
  decklist,
  onClick,
  size = 'large',
}) => {
  const sprites = getArchetypes(decklist);
  if (!sprites.length) return null;

  return (
    <div className="flex" onClick={onClick}>
      {sprites.map((sprite, index) => (
        <PokemonSprite key={index} image={sprite} size={size} />
      ))}
    </div>
  );
};
