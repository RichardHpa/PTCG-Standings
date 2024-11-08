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
  mewVmax: {
    name: 'Mew VMAX',
    coreCards: [
      {
        card: 'Mew VMAX',
        pokemon: 'Mew',
        sprite: pokemonImageList.mew.image,
      },
      {
        card: 'Genesect V',
        pokemon: 'Genesect',
        sprite: pokemonImageList.genesect.image,
      },
    ],
  },
  arceus: {
    name: 'Arceus',
    coreCards: [
      {
        card: 'Arceus VSTAR',
        pokemon: 'Arceus',
        sprite: pokemonImageList.arceus.image,
      },
    ],
  },
  charizardBibarel: {
    name: 'Charizard Bibarel',
    coreCards: [
      {
        card: 'Charizard ex',
        pokemon: 'Charizard',
        sprite: pokemonImageList.charizard.image,
      },
      {
        card: 'Bibarel',
        pokemon: 'Bibarel',
        sprite: pokemonImageList.bibarel.image,
      },
    ],
  },
  roaringMoon: {
    name: 'Roaring Moon',
    coreCards: [
      {
        card: 'Roaring Moon ex',
        pokemon: 'Roaring moon',
        sprite: pokemonImageList['roaring-moon'].image,
      },
    ],
  },
  inteleonUrshifu: {
    name: 'Inteleon Urshifu',
    coreCards: [
      {
        card: 'Inteleon VMAX',
        pokemon: 'Inteleon',
        sprite: pokemonImageList.inteleon.forms!['gmax'].image,
      },
      {
        card: 'Rapid Strike Urshifu VMAX',
        pokemon: 'Urshifu',
        sprite: pokemonImageList.urshifu.forms!['rapid-gmax'].image,
      },
    ],
  },
  gholdengo: {
    name: 'Gholdengo',
    coreCards: [
      {
        card: 'Gholdengo ex',
        pokemon: 'Gholdengo',
        sprite: pokemonImageList.gholdengo.image,
      },
    ],
  },
  snorlaxStall: {
    name: 'Snorlax Stall',
    coreCards: [
      {
        card: 'Snorlax',
        pokemon: 'Snorlax',
        sprite: pokemonImageList.snorlax.image,
      },
    ],
  },
  klawf: {
    name: 'Klawf',
    coreCards: [
      {
        card: 'Klawf',
        pokemon: 'Klawf',
        sprite: pokemonImageList.klawf.image,
      },
    ],
  },
  IceRiderPalkia: {
    name: 'Ice Rider Palkia',
    coreCards: [
      {
        card: 'Origin Forme Palkia VSTAR',
        pokemon: 'Palkia',
        sprite: pokemonImageList.palkia.forms!['origin'].image,
      },
      {
        card: 'Ice Rider Calyrex VMAX',
        pokemon: 'Ice Rider Calyrex',
        sprite: pokemonImageList.calyrex.forms!['ice'].image,
      },
    ],
  },
  miraidonFlaafy: {
    name: 'miraidon Flaafy',
    coreCards: [
      {
        card: 'Miraidon ex',
        pokemon: 'Miraidon',
        sprite: pokemonImageList.miraidon.image,
      },
      {
        card: 'Flaaffy',
        pokemon: 'flaaffy',
        sprite: pokemonImageList.flaaffy.image,
      },
    ],
  },
};
