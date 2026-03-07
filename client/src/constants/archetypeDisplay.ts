import { pokemonImageList } from 'constants/imageSprites';

export interface Sprites {
  sprite: string;
  pokemon: string;
}

export interface ArchetypeDisplayDefinition {
  sprites: Sprites[];
  /** Overrides the chart segment color for this archetype. */
  chartColor?: string;
}

export const archetypeDisplay: Record<string, ArchetypeDisplayDefinition> = {
  marniesGrimmsnarl: {
    sprites: [
      { pokemon: 'Grimmsnarl', sprite: pokemonImageList.grimmsnarl.image },
    ],
  },
  toadscruel: {
    sprites: [
      { pokemon: 'Toedscruel', sprite: pokemonImageList.toedscruel.image },
    ],
  },
  slowking: {
    sprites: [{ pokemon: 'Slowking', sprite: pokemonImageList.slowking.image }],
  },
  flareonNoctowl: {
    sprites: [
      { pokemon: 'Flareon', sprite: pokemonImageList.flareon.image },
      { pokemon: 'Noctowl', sprite: pokemonImageList.noctowl.image },
    ],
  },
  terapagosNocktowl: {
    sprites: [
      {
        pokemon: 'Terapagos',
        sprite: pokemonImageList.terapagos.forms!.terastal.image,
      },
      { pokemon: 'Noctowl', sprite: pokemonImageList.noctowl.image },
    ],
  },
  zoroarkN: {
    sprites: [
      { pokemon: 'Zoroark', sprite: pokemonImageList.zoroark.image },
      { pokemon: 'Darmanitan', sprite: pokemonImageList.darmanitan.image },
    ],
  },
  espathra: {
    sprites: [{ pokemon: 'Espathra', sprite: pokemonImageList.espathra.image }],
  },
  hopsZacian: {
    sprites: [
      {
        pokemon: 'Zacian',
        sprite: pokemonImageList.zacian.forms!['crowned'].image,
      },
      { pokemon: 'Snorlax', sprite: pokemonImageList.snorlax.image },
    ],
  },
  teraBox: {
    sprites: [
      { pokemon: 'Ogerpon', sprite: pokemonImageList.ogerpon.image },
      { pokemon: 'Noctowl', sprite: pokemonImageList.noctowl.image },
    ],
  },
  regidrago: {
    sprites: [
      { pokemon: 'Regidrago', sprite: pokemonImageList.regidrago.image },
    ],
  },
  quadThorns: {
    sprites: [
      { pokemon: 'Quad Thorns', sprite: pokemonImageList['iron-thorns'].image },
    ],
  },
  lostZoneBox: {
    sprites: [{ pokemon: 'Comfey', sprite: pokemonImageList.comfey.image }],
  },
  charizardPidgeot: {
    sprites: [
      { pokemon: 'Charizard', sprite: pokemonImageList.charizard.image },
      { pokemon: 'Pidgeot', sprite: pokemonImageList.pidgeot.image },
    ],
  },
  ragingBolt: {
    sprites: [
      { pokemon: 'Raging Bolt', sprite: pokemonImageList['raging-bolt'].image },
    ],
  },
  lugiaVstar: {
    sprites: [
      { pokemon: 'Lugia', sprite: pokemonImageList.lugia.image },
      { pokemon: 'Archeops', sprite: pokemonImageList.archeops.image },
    ],
  },
  gardeviorEx: {
    sprites: [
      { pokemon: 'Gardevoir', sprite: pokemonImageList.gardevoir.image },
    ],
  },
  mewVmax: {
    sprites: [
      { pokemon: 'Mew', sprite: pokemonImageList.mew.image },
      { pokemon: 'Genesect', sprite: pokemonImageList.genesect.image },
    ],
  },
  arceus: {
    sprites: [{ pokemon: 'Arceus', sprite: pokemonImageList.arceus.image }],
  },
  charizardBibarel: {
    sprites: [
      { pokemon: 'Charizard', sprite: pokemonImageList.charizard.image },
      { pokemon: 'Bibarel', sprite: pokemonImageList.bibarel.image },
    ],
  },
  roaringMoon: {
    sprites: [
      {
        pokemon: 'Roaring moon',
        sprite: pokemonImageList['roaring-moon'].image,
      },
    ],
  },
  inteleonUrshifu: {
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
  },
  gholdengo: {
    sprites: [
      { pokemon: 'Gholdengo', sprite: pokemonImageList.gholdengo.image },
    ],
  },
  snorlaxStall: {
    sprites: [{ pokemon: 'Snorlax', sprite: pokemonImageList.snorlax.image }],
  },
  klawf: {
    sprites: [{ pokemon: 'Klawf', sprite: pokemonImageList.klawf.image }],
  },
  pidgeotControl: {
    sprites: [{ pokemon: 'Pidgeot', sprite: pokemonImageList.pidgeot.image }],
  },
  dragapultIronThorns: {
    sprites: [
      { pokemon: 'Dragapult', sprite: pokemonImageList.dragapult.image },
      { pokemon: 'Iron Thorns', sprite: pokemonImageList['iron-thorns'].image },
    ],
  },
  palkiaDusknoir: {
    sprites: [
      {
        pokemon: 'Palkia',
        sprite: pokemonImageList.palkia.forms!['origin'].image,
      },
      { pokemon: 'Dusknoir', sprite: pokemonImageList.dusknoir.image },
    ],
  },
  miraidonFlaafy: {
    sprites: [
      { pokemon: 'Miraidon', sprite: pokemonImageList.miraidon.image },
      { pokemon: 'Flaaffy', sprite: pokemonImageList.flaaffy.image },
    ],
  },
  miraidonEx: {
    sprites: [{ pokemon: 'Miraidon', sprite: pokemonImageList.miraidon.image }],
  },
  hydreigon: {
    sprites: [
      { pokemon: 'Hydreigon', sprite: pokemonImageList.hydreigon.image },
    ],
  },
  ancientBox: {
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
  },
  archaludon: {
    sprites: [
      { pokemon: 'Archaludon', sprite: pokemonImageList.archaludon.image },
    ],
  },
  chienPao: {
    sprites: [
      { pokemon: 'Chien-Pao', sprite: pokemonImageList['chien-pao'].image },
      { pokemon: 'Baxcalibur', sprite: pokemonImageList['baxcalibur'].image },
    ],
  },
  palkiaNoctowl: {
    sprites: [
      {
        pokemon: 'Palkia',
        sprite: pokemonImageList.palkia.forms!['origin'].image,
      },
      { pokemon: 'Noctowl', sprite: pokemonImageList.noctowl.image },
    ],
  },
  terapagosDusknoir: {
    sprites: [
      {
        pokemon: 'Terapagos',
        sprite: pokemonImageList.terapagos.forms!.terastal.image,
      },
      { pokemon: 'Dusknoir', sprite: pokemonImageList.dusknoir.image },
    ],
  },
  ceruledge: {
    sprites: [
      { pokemon: 'Ceruledge', sprite: pokemonImageList.ceruledge.image },
    ],
  },
  dragapultCharizard: {
    sprites: [
      { pokemon: 'Dragapult', sprite: pokemonImageList.dragapult.image },
      { pokemon: 'Charizard', sprite: pokemonImageList.charizard.image },
    ],
  },
  dragapultEx: {
    sprites: [
      { pokemon: 'Dragapult', sprite: pokemonImageList.dragapult.image },
    ],
  },
  greatTuskMill: {
    sprites: [
      { pokemon: 'Great Tusk', sprite: pokemonImageList['great-tusk'].image },
    ],
  },
  futureHands: {
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
  },
  banetteLock: {
    sprites: [
      { pokemon: 'Banette', sprite: pokemonImageList['banette'].image },
    ],
  },
  greninjaEx: {
    sprites: [{ pokemon: 'Greninja', sprite: pokemonImageList.greninja.image }],
  },
  gougingFire: {
    sprites: [
      {
        pokemon: 'Gouging Fire',
        sprite: pokemonImageList['gouging-fire'].image,
      },
    ],
  },
};
