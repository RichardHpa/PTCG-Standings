import clsx from 'clsx';

import { getArchetype } from 'helpers/getArchetype';

import type { ArchetypesProps } from './types';

import type { FC } from 'react';

interface ImageProp {
  pokemon: string;
  sprite: string;
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
  const archetype = getArchetype(decklist);
  if (!archetype) return null;

  return (
    <div className="flex" onClick={onClick}>
      {archetype.sprites.map((sprite, index) => {
        return <PokemonSprite key={index} image={sprite} size={size} />;
      })}
    </div>
  );
};
