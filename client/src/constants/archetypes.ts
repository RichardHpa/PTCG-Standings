import { pokemonImageList } from 'constants/imageSprites';

export interface CoreCard {
  card: string;
  pokemon: string;
}

interface Sprites {
  sprite: string;
  pokemon: string;
}

interface Archetype {
  name: string;
  sprites: Sprites[];
  coreCards: CoreCard[];
}

export interface Archetypes {
  [key: string]: Archetype;
}

export const archetypes: Archetypes = {
  regidrago: {
    name: 'Regidrago',
    sprites: [
      {
        pokemon: 'Regidrago',
        sprite: pokemonImageList.regidrago.image,
      },
    ],
    coreCards: [
      {
        card: 'Regidrago VSTAR',
        pokemon: 'Regidrago',
      },
    ],
  },
  lostBox: {
    name: 'Lost Zone Box',
    sprites: [
      {
        pokemon: 'Comfey',
        sprite: pokemonImageList.comfey.image,
      },
      {
        pokemon: 'Sableye',
        sprite: pokemonImageList.sableye.image,
      },
    ],
    coreCards: [
      {
        card: 'Comfey',
        pokemon: 'Comfey',
      },
      {
        card: 'Sableye',
        pokemon: 'Sableye',
      },
    ],
  },
  charizardPidgeot: {
    name: 'Charizard Pidgeot',
    sprites: [
      {
        pokemon: 'Charizard',
        sprite: pokemonImageList.charizard.image,
      },
      {
        pokemon: 'Pidgeot',
        sprite: pokemonImageList.pidgeot.image,
      },
    ],
    coreCards: [
      {
        card: 'Charizard ex',
        pokemon: 'Charizard',
      },
      {
        card: 'Pidgeot ex',
        pokemon: 'Pidgeot',
      },
    ],
  },
  lugiaArcheops: {
    name: 'Lugia Archeops',
    sprites: [
      {
        pokemon: 'Lugia',
        sprite: pokemonImageList.lugia.image,
      },
      {
        pokemon: 'Archeops',
        sprite: pokemonImageList.archeops.image,
      },
    ],
    coreCards: [
      {
        card: 'Lugia V',
        pokemon: 'Lugia',
      },
      {
        card: 'Archeops',
        pokemon: 'Archeops',
      },
    ],
  },
  gardeviorEx: {
    name: 'Gardevior EX',
    sprites: [
      {
        pokemon: 'Gardevoir',
        sprite: pokemonImageList.gardevoir.image,
      },
    ],
    coreCards: [
      {
        card: 'Gardevoir ex',
        pokemon: 'Gardevoir',
      },
    ],
  },
  mewVmax: {
    name: 'Mew VMAX',
    sprites: [
      {
        pokemon: 'Mew',
        sprite: pokemonImageList.mew.image,
      },
      {
        pokemon: 'Genesect',
        sprite: pokemonImageList.genesect.image,
      },
    ],
    coreCards: [
      {
        card: 'Mew VMAX',
        pokemon: 'Mew',
      },
      {
        card: 'Genesect V',
        pokemon: 'Genesect',
      },
    ],
  },
  arceus: {
    name: 'Arceus',
    sprites: [
      {
        pokemon: 'Arceus',
        sprite: pokemonImageList.arceus.image,
      },
    ],
    coreCards: [
      {
        card: 'Arceus VSTAR',
        pokemon: 'Arceus',
      },
    ],
  },
  charizardBibarel: {
    name: 'Charizard Bibarel',
    sprites: [
      {
        pokemon: 'Charizard',
        sprite: pokemonImageList.charizard.image,
      },
      {
        pokemon: 'Bibarel',
        sprite: pokemonImageList.bibarel.image,
      },
    ],
    coreCards: [
      {
        card: 'Charizard ex',
        pokemon: 'Charizard',
      },
      {
        card: 'Bibarel',
        pokemon: 'Bibarel',
      },
    ],
  },
  roaringMoon: {
    name: 'Roaring Moon',
    sprites: [
      {
        pokemon: 'Roaring moon',
        sprite: pokemonImageList['roaring-moon'].image,
      },
    ],
    coreCards: [
      {
        card: 'Roaring Moon ex',
        pokemon: 'Roaring moon',
      },
    ],
  },
  inteleonUrshifu: {
    name: 'Inteleon Urshifu',
    sprites: [
      {
        pokemon: 'Inteleon',
        sprite: pokemonImageList.inteleon.forms!['gmax'].image,
      },
      {
        pokemon: 'Urshifu',
        sprite: pokemonImageList.urshifu.forms!['rapid-gmax'].image,
      },
    ],
    coreCards: [
      {
        card: 'Inteleon VMAX',
        pokemon: 'Inteleon',
      },
      {
        card: 'Rapid Strike Urshifu VMAX',
        pokemon: 'Urshifu',
      },
    ],
  },
  gholdengo: {
    name: 'Gholdengo',
    sprites: [
      {
        pokemon: 'Gholdengo',
        sprite: pokemonImageList.gholdengo.image,
      },
    ],
    coreCards: [
      {
        card: 'Gholdengo ex',
        pokemon: 'Gholdengo',
      },
    ],
  },
  snorlaxStall: {
    name: 'Snorlax Stall',
    sprites: [
      {
        pokemon: 'Snorlax',
        sprite: pokemonImageList.snorlax.image,
      },
    ],
    coreCards: [
      {
        card: 'Snorlax',
        pokemon: 'Snorlax',
      },
    ],
  },
  klawf: {
    name: 'Klawf',
    sprites: [
      {
        pokemon: 'Klawf',
        sprite: pokemonImageList.klawf.image,
      },
    ],
    coreCards: [
      {
        card: 'Klawf',
        pokemon: 'Klawf',
      },
    ],
  },
  iceRiderPalkia: {
    name: 'Ice Rider Palkia',
    sprites: [
      {
        pokemon: 'Palkia',
        sprite: pokemonImageList.palkia.forms!['origin'].image,
      },
      {
        pokemon: 'Ice Rider Calyrex',
        sprite: pokemonImageList.calyrex.forms!['ice'].image,
      },
    ],
    coreCards: [
      {
        card: 'Origin Forme Palkia VSTAR',
        pokemon: 'Palkia',
      },
      {
        card: 'Ice Rider Calyrex VMAX',
        pokemon: 'Ice Rider Calyrex',
      },
    ],
  },
  miraidonFlaafy: {
    name: 'miraidon Flaafy',
    sprites: [
      {
        pokemon: 'Miraidon',
        sprite: pokemonImageList.miraidon.image,
      },
      {
        pokemon: 'flaaffy',
        sprite: pokemonImageList.flaaffy.image,
      },
    ],
    coreCards: [
      {
        card: 'Miraidon ex',
        pokemon: 'Miraidon',
      },
      {
        card: 'Flaaffy',
        pokemon: 'flaaffy',
      },
    ],
  },
  dialgaMetang: {
    name: 'Dialga Metang',
    sprites: [
      {
        pokemon: 'Dialga',
        sprite: pokemonImageList['dialga'].forms!.origin.image,
      },
      {
        pokemon: 'Metang',
        sprite: pokemonImageList['metang'].image,
      },
    ],
    coreCards: [
      {
        card: 'Origin Forme Dialga VSTAR',
        pokemon: 'Origin Forme Dialga',
      },
      {
        card: 'Metang',
        pokemon: 'Metang',
      },
    ],
  },
  cheinPao: {
    name: 'Chien-Pao',
    sprites: [
      {
        pokemon: 'Chien-Pao',
        sprite: pokemonImageList['chien-pao'].image,
      },
      {
        pokemon: 'Baxcalibur',
        sprite: pokemonImageList['baxcalibur'].image,
      },
    ],
    coreCards: [
      {
        card: 'Chien-Pao ex',
        pokemon: 'Chien-Pao',
      },
      {
        card: 'Baxcalibur',
        pokemon: 'Baxcalibur',
      },
    ],
  },
  futureHands: {
    name: 'Future Hands',
    sprites: [
      {
        pokemon: 'Iron Hands ex',
        sprite: pokemonImageList['iron-hands'].image,
      },
      {
        pokemon: 'Icon Crown ex',
        sprite: pokemonImageList['iron-crown'].image,
      },
    ],
    coreCards: [
      {
        card: 'Iron Hands ex',
        pokemon: 'Iron Hands',
      },
      {
        card: 'Iron Crown ex',
        pokemon: 'Iron Crown',
      },
    ],
  },
  banetteLock: {
    name: 'Banette Lock',
    sprites: [
      {
        pokemon: 'Banette',
        sprite: pokemonImageList['banette'].image,
      },
    ],
    coreCards: [{ card: 'Banette ex', pokemon: 'Banette' }],
  },
  ragingBolt: {
    name: 'Raging Bolt',
    sprites: [
      { pokemon: 'Raging Bolt', sprite: pokemonImageList['raging-bolt'].image },
    ],
    coreCards: [
      { card: 'Raging Bolt ex', pokemon: 'raging bolt' },
      // { card: 'Sandy Shocks ex', pokemon: 'Sandy Shocks' },
    ],
  },
  ancientBox: {
    name: 'Ancient Box',
    sprites: [
      {
        pokemon: 'Roaring Moon',
        sprite: pokemonImageList['roaring-moon'].image,
      },
      {
        pokemon: 'Flutter Mane',
        sprite: pokemonImageList['flutter-mane'].image,
      },
    ],
    coreCards: [
      { card: 'Roaring Moon', pokemon: 'roaring moon' },
      { card: 'Flutter Mane', pokemon: 'flutter mane' },
    ],
  },
  quadThrones: {
    name: 'Quad Thorns',
    sprites: [
      {
        pokemon: 'Quad Thorns',
        sprite: pokemonImageList['iron-thorns'].image,
      },
    ],
    coreCards: [{ card: 'Iron Thorns ex', pokemon: 'iron thorns ex' }],
  },
  miraidonEx: {
    name: 'miraidon EX',
    sprites: [
      {
        pokemon: 'Miraidon',
        sprite: pokemonImageList.miraidon.image,
      },
    ],
    coreCards: [{ card: 'Miraidon ex', pokemon: 'Miraidon' }],
  },
  pidgeotEx: {
    name: 'Pidgeot EX',
    sprites: [
      {
        pokemon: 'Pidgeot',
        sprite: pokemonImageList.pidgeot.image,
      },
    ],
    coreCards: [{ card: 'Pidgeot ex', pokemon: 'Pidgeot' }],
  },
  dragapultEx: {
    name: 'Dragapult EX',
    sprites: [
      {
        pokemon: 'Dragapult',
        sprite: pokemonImageList.dragapult.image,
      },
    ],
    coreCards: [{ card: 'Dragapult ex', pokemon: 'Dragapult' }],
  },
};
