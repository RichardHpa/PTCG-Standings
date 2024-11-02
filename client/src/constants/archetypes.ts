import { pokemonImageList } from 'constants/imageSprites';

export interface CoreCard {
  card: string;
  pokemon: string;
  sprite: string;
}

interface Archetype {
  name: string;

  coreCards: CoreCard[];
}

export interface Archetypes {
  [key: string]: Archetype;
}

export const archetypes: Archetypes = {
  regidrago: {
    name: 'Regidrago',
    coreCards: [
      {
        card: 'Regidrago VSTAR',
        pokemon: 'Regidrago',
        sprite: pokemonImageList.regidrago.image,
      },
    ],
  },
  lostBox: {
    name: 'Lost Zone Box',
    coreCards: [
      {
        card: 'Comfey',
        pokemon: 'Comfey',
        sprite: pokemonImageList.comfey.image,
      },
      {
        card: 'Sableye',
        pokemon: 'Sableye',
        sprite: pokemonImageList.sableye.image,
      },
    ],
  },
  charizardPidgeot: {
    name: 'Charizard Pidgeot',
    coreCards: [
      {
        card: 'Charizard ex',
        pokemon: 'Charizard',
        sprite: pokemonImageList.charizard.image,
      },
      {
        card: 'Pidgeot ex',
        pokemon: 'Pidgeot',
        sprite: pokemonImageList.pidgeot.image,
      },
    ],
  },
  lugiaArcheops: {
    name: 'Lugia Archeops',
    coreCards: [
      {
        card: 'Lugia V',
        pokemon: 'Lugia',
        sprite: pokemonImageList.lugia.image,
      },
      {
        card: 'Archeops',
        pokemon: 'Archeops',
        sprite: pokemonImageList.archeops.image,
      },
    ],
  },
  gardeviorEx: {
    name: 'Gardevior EX',
    coreCards: [
      {
        card: 'Gardevoir ex',
        pokemon: 'Gardevoir',
        sprite: pokemonImageList.gardevoir.image,
      },
    ],
  },
};
