import { pokemonImageList } from 'constants/imageSprites';
import { DeckList } from 'types/standing';

export interface Sprites {
  sprite: string;
  pokemon: string;
}

type CardType = 'pokemon' | 'trainer' | 'energy';

const decklistIncludes = (
  decklist: DeckList,
  type: CardType,
  cards: string[],
) => {
  return cards.every(cardName => {
    return decklist[type].some(card => card.name === cardName);
  });
};

const decklistDoesntInclude = (
  decklist: DeckList,
  type: CardType,
  cards: string[],
) => {
  return cards.every(cardName => {
    return !decklist[type].some(card => card.name === cardName);
  });
};

const cardCount = (
  decklist: DeckList,
  type: CardType,
  card: string,
  count: number,
) => {
  return decklist[type].some(
    cardObj => cardObj.name === card && cardObj.count === count,
  );
};

export const exactCardFromSet = (
  decklist: DeckList,
  type: CardType,
  card: string,
  set: string,
) => {
  return decklist[type].some(
    cardObj => cardObj.name === card && cardObj.set === set,
  );
};

export interface ArchetypeList {
  name: string;
  sprites: Sprites[];
  color?: string;
  fn: (decklist: DeckList) => boolean;
  key?: string;
}

type archetypesListObjectProps = {
  [key: string]: ArchetypeList;
};

export const unknownArchetype = {
  name: 'Unknown',
  color: 'lightgrey',
  sprites: [
    {
      pokemon: 'unknown',
      sprite: 'substitute.png',
    },
  ],
  key: 'unknown',
  fn: () => false,
};

export const archetypesListObject: archetypesListObjectProps = {
  unknown: unknownArchetype,
  regidrago: {
    name: 'Regidrago',
    sprites: [
      {
        pokemon: 'Regidrago',
        sprite: pokemonImageList.regidrago.image,
      },
    ],
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', [
          'Regidrago V',
          'Regidrago VSTAR',
        ])
      ) {
        return true;
      }
      return false;
    },
  },
  quadThorns: {
    name: 'Quad Thorns',
    sprites: [
      {
        pokemon: 'Quad Thorns',
        sprite: pokemonImageList['iron-thorns'].image,
      },
    ],
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Iron Thorns ex'])) {
        const total = decklist.pokemon.reduce((acc, cur) => acc + cur.count, 0);
        if (total === 4) {
          return true;
        }
        return false;
      }
      return false;
    },
  },
  lostZoneBox: {
    name: 'Lost zone box',
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
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', ['Comfey', 'Sableye']) &&
        decklistIncludes(decklist, 'trainer', [
          'Mirage Gate',
          "Colress's Experiment",
        ])
      ) {
        return true;
      }
      return false;
    },
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
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', ['Charizard ex', 'Pidgeot ex'])
      ) {
        return true;
      }
      return false;
    },
  },
  ragingBolt: {
    name: 'Raging Bolt',
    sprites: [
      { pokemon: 'Raging Bolt', sprite: pokemonImageList['raging-bolt'].image },
    ],
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', [
          'Raging Bolt ex',
          'Teal Mask Ogerpon ex',
        ])
      ) {
        return true;
      }
      return false;
    },
  },
  lugiaVstar: {
    name: 'Lugia Vstar',
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
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', [
          'Lugia V',
          'Lugia VSTAR',
          'Archeops',
        ])
      ) {
        return true;
      }
      return false;
    },
  },
  gardeviorEx: {
    name: 'Gardevior EX',
    sprites: [
      {
        pokemon: 'Gardevoir',
        sprite: pokemonImageList.gardevoir.image,
      },
    ],
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Gardevoir ex'])) {
        return true;
      }
      return false;
    },
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
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Mew VMAX', 'Genesect V'])) {
        return true;
      }
      return false;
    },
  },
  arceus: {
    name: 'Arceus',
    sprites: [
      {
        pokemon: 'Arceus',
        sprite: pokemonImageList.arceus.image,
      },
    ],
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Arceus VSTAR'])) {
        return true;
      }
      return false;
    },
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
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Charizard ex', 'Bibarel'])) {
        return true;
      }
      return false;
    },
  },
  roaringMoon: {
    name: 'Roaring Moon',
    sprites: [
      {
        pokemon: 'Roaring moon',
        sprite: pokemonImageList['roaring-moon'].image,
      },
    ],
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Roaring Moon ex'])) {
        return true;
      }
      return false;
    },
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
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', [
          'Inteleon VMAX',
          'Rapid Strike Urshifu VMAX',
        ])
      ) {
        return true;
      }
      return false;
    },
  },
  gholdengo: {
    name: 'Gholdengo',
    sprites: [
      {
        pokemon: 'Gholdengo',
        sprite: pokemonImageList.gholdengo.image,
      },
    ],
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Gholdengo ex'])) {
        return true;
      }
      return false;
    },
  },
  snorlaxStall: {
    name: 'Snorlax Stall',
    sprites: [
      {
        pokemon: 'Snorlax',
        sprite: pokemonImageList.snorlax.image,
      },
    ],
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Snorlax'])) {
        return true;
      }
      return false;
    },
  },
  klawf: {
    name: 'Klawf',
    sprites: [
      {
        pokemon: 'Klawf',
        sprite: pokemonImageList.klawf.image,
      },
    ],
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Klawf'])) {
        return true;
      }
      return false;
    },
  },
  pidgeotControl: {
    name: 'Pidgeot Control',
    sprites: [
      {
        pokemon: 'Pidgeot',
        sprite: pokemonImageList.pidgeot.image,
      },
    ],
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', [
          'Pidgeot ex',
          'Rotom V',
          'Wellspring Mask Ogerpon ex',
        ])
      ) {
        return true;
      }
      return false;
    },
  },
  dragapultIronThorns: {
    name: 'Dragapult Iron Thorns',
    sprites: [
      {
        pokemon: 'Dragapult',
        sprite: pokemonImageList.dragapult.image,
      },
      {
        pokemon: 'Iron Thorns',
        sprite: pokemonImageList['iron-thorns'].image,
      },
    ],
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', [
          'Dragapult ex',
          'Iron Thorns ex',
        ]) &&
        cardCount(decklist, 'pokemon', 'Iron Thorns ex', 4)
      ) {
        return true;
      }
      return false;
    },
  },
  palkiaDusknoir: {
    name: 'Palkia Dusknoir',
    sprites: [
      {
        pokemon: 'Palkia',
        sprite: pokemonImageList.palkia.forms!['origin'].image,
      },
      {
        pokemon: 'Dusknoir',
        sprite: pokemonImageList.dusknoir.image,
      },
    ],
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', [
          'Origin Forme Palkia VSTAR',
          'Dusknoir',
        ])
      ) {
        return true;
      }
      return false;
    },
  },
  miraidonFlaafy: {
    name: 'Miraidon Flaafy',
    sprites: [
      {
        pokemon: 'Miraidon',
        sprite: pokemonImageList.miraidon.image,
      },
      {
        pokemon: 'Flaaffy',
        sprite: pokemonImageList.flaaffy.image,
      },
    ],
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Miraidon ex', 'Flaaffy'])) {
        return true;
      }
      return false;
    },
  },
  miraidonEx: {
    name: 'Miraidon Ex',
    sprites: [
      {
        pokemon: 'Miraidon',
        sprite: pokemonImageList.miraidon.image,
      },
    ],
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', ['Miraidon ex']) &&
        decklistDoesntInclude(decklist, 'pokemon', ['Flaaffy'])
      ) {
        return true;
      }
      return false;
    },
  },
  hydreigon: {
    name: 'Hydreigon',
    sprites: [
      {
        pokemon: 'Hydreigon',
        sprite: pokemonImageList.hydreigon.image,
      },
    ],
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Hydreigon ex'])) {
        return true;
      }
      return false;
    },
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
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', ['Roaring Moon', 'Flutter Mane'])
      ) {
        return true;
      }
      return false;
    },
  },
  archaludon: {
    name: 'Archaludon',
    sprites: [
      {
        pokemon: 'Archaludon',
        sprite: pokemonImageList.archaludon.image,
      },
    ],
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', ['Archaludon ex', 'Duraludon'])
      ) {
        return true;
      }
      return false;
    },
  },
  chienPao: {
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
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', ['Chien-Pao ex', 'Baxcalibur'])
      ) {
        return true;
      }
      return false;
    },
  },
  palkiaNoctowl: {
    name: 'Palkia Noctowl',
    sprites: [
      {
        pokemon: 'Palkia',
        sprite: pokemonImageList.palkia.forms!['origin'].image,
      },
      {
        pokemon: 'Noctowl',
        sprite: pokemonImageList.noctowl.image,
      },
    ],
    fn: decklist => {
      if (
        decklistIncludes(decklist, 'pokemon', [
          'Origin Forme Palkia VSTAR',
          'Noctowl',
        ])
      ) {
        return true;
      }
      return false;
    },
  },
  terapagosDusknoir: {
    name: 'Terapagos Dusknoir',
    sprites: [
      {
        pokemon: 'Terapagos',
        sprite: pokemonImageList.terapagos.forms!.terastal.image,
      },
      {
        pokemon: 'Dusknoir',
        sprite: pokemonImageList.dusknoir.image,
      },
    ],
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Terapagos ex', 'Dusknoir'])) {
        return true;
      }
      return false;
    },
  },
  ceruledge: {
    name: 'Ceruledge',
    sprites: [
      {
        pokemon: 'Ceruledge',
        sprite: pokemonImageList.ceruledge.image,
      },
    ],
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Ceruledge ex'])) {
        return true;
      }
      return false;
    },
  },
  dragapultEx: {
    name: 'Dragapult Ex',
    sprites: [
      {
        pokemon: 'Dragapult',
        sprite: pokemonImageList.dragapult.image,
      },
    ],
    fn: decklist => {
      if (decklistIncludes(decklist, 'pokemon', ['Dragapult ex'])) {
        return true;
      }
      return false;
    },
  },
  greatTuskMill: {
    name: 'Great Tusk Mill',
    sprites: [
      {
        pokemon: 'Great Tusk',
        sprite: pokemonImageList['great-tusk'].image,
      },
    ],
    fn: (decklist: DeckList) => {
      if (decklistIncludes(decklist, 'pokemon', ['Great Tusk'])) {
        cardCount(decklist, 'pokemon', 'Great Tusk', 4);
        return true;
      }
      return false;
    },
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
    fn: (decklist: DeckList) => {
      if (
        decklistIncludes(decklist, 'pokemon', [
          'Iron Hands ex',
          'Iron Crown ex',
        ])
      ) {
        return true;
      }
      return false;
    },
  },
  banetteLock: {
    name: 'Banette Lock',
    sprites: [
      {
        pokemon: 'Banette',
        sprite: pokemonImageList['banette'].image,
      },
    ],
    fn: (decklist: DeckList) => {
      if (decklistIncludes(decklist, 'pokemon', ['Banette ex'])) {
        return true;
      }
      return false;
    },
  },
  greninjaex: {
    name: 'Greninja ex',
    sprites: [
      {
        pokemon: 'Greninja',
        sprite: pokemonImageList.greninja.image,
      },
    ],
    fn: (decklist: DeckList) => {
      if (decklistIncludes(decklist, 'pokemon', ['Greninja ex'])) {
        return true;
      }
      return false;
    },
  },
  gougingFire: {
    name: 'Gouging Fire',
    sprites: [
      {
        pokemon: 'Gouging Fire',
        sprite: pokemonImageList['gouging-fire'].image,
      },
    ],
    fn: (decklist: DeckList) => {
      if (decklistIncludes(decklist, 'pokemon', ['Gouging Fire ex'])) {
        return true;
      }
      return false;
    },
  },
};

// convert object to array which also inclues a key for the object
export const archetypesList: ArchetypeList[] = Object.entries(
  archetypesListObject,
).map(([key, value]) => ({
  ...value,
  key,
}));

// export const archetypesList: ArchetypeList[] =
//   Object.values(archetypesListObject);
