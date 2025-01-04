import clsx from 'clsx';

import { archetypesListObject } from 'constants/archetypes';

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
  size?: ArchetypesProps['size'];
}) => {
  if (!image) return null;
  return (
    <img
      className={clsx({
        'h-full w-5': size === 'xs',
        'h-full w-8': size === 'small',
        'h-full w-12': size === 'large',
      })}
      src={`/sprites/pokemon/${image.sprite}`}
      alt={image.pokemon}
    />
  );
};

export const Archetypes: FC<ArchetypesProps> = ({
  archetype,
  onClick,
  size = 'large',
}) => {
  const foundArchetype = archetypesListObject[archetype];
  if (!foundArchetype) return null;

  return (
    <div className="flex" onClick={onClick}>
      {foundArchetype.sprites.map((sprite, index) => {
        return <PokemonSprite key={index} image={sprite} size={size} />;
      })}
    </div>
  );
};
