export type CardType = 'pokemon' | 'trainer' | 'energy';

export interface CardRef {
  type: CardType;
  name: string;
  /** Optional exact count constraint (e.g. quad Iron Thorns requires 4). */
  exactCount?: number;
}

export interface ArchetypeMatchDefinition {
  name: string;
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

export const archetypeDefinitions: Record<string, ArchetypeMatchDefinition> = {
  marniesGrimmsnarl: {
    name: "Marnie's Grimmsnarl",
    required: [{ type: 'pokemon', name: "Marnie's Grimmsnarl ex" }],
    identifiers: [],
  },
  grimsnarFroslass: {
    name: 'Grimmsnarl Froslass',
    // Two required cards means this beats the generic marniesGrimmsnarl via
    // tie-break (b) when Froslass is also present.
    required: [
      { type: 'pokemon', name: "Marnie's Grimmsnarl ex" },
      { type: 'pokemon', name: 'Froslass' },
    ],
    // Snorunt signals the full Froslass line is present.
    identifiers: [{ type: 'pokemon', name: 'Snorunt' }],
  },
  toadscruel: {
    name: 'Toedscruel',
    required: [{ type: 'pokemon', name: 'Toedscruel ex' }],
    identifiers: [],
  },
  slowking: {
    name: 'Slowking',
    // The trainer 'Academy at Night' is what makes this deck unique — without
    // it any Slowking deck would match.
    required: [
      { type: 'pokemon', name: 'Slowking' },
      { type: 'pokemon', name: 'Slowpoke' },
      { type: 'pokemon', name: 'Natu' },
      { type: 'pokemon', name: 'Xatu' },
      { type: 'trainer', name: 'Academy at Night' },
    ],
    identifiers: [],
  },
  flareonNoctowl: {
    name: 'Flareon Noctowl',
    required: [
      { type: 'pokemon', name: 'Flareon ex' },
      { type: 'pokemon', name: 'Noctowl' },
    ],
    // Hoothoot signals the full Noctowl engine line is present.
    identifiers: [{ type: 'pokemon', name: 'Hoothoot' }],
  },
  terapagosNocktowl: {
    name: 'Terapagos Noctowl',
    // No excludes needed: teraBox requires Teal Mask Ogerpon ex as a third
    // required card, so it wins via tie-break (b) when that card is present.
    required: [
      { type: 'pokemon', name: 'Terapagos ex' },
      { type: 'pokemon', name: 'Noctowl' },
    ],
    // Hoothoot signals the full Noctowl engine line is present.
    identifiers: [{ type: 'pokemon', name: 'Hoothoot' }],
  },
  zoroarkN: {
    name: "N's Zoroark",
    required: [
      { type: 'pokemon', name: "N's Zoroark ex" },
      { type: 'pokemon', name: "N's Darmanitan" },
    ],
    identifiers: [],
  },
  espathra: {
    name: 'Espathra',
    required: [{ type: 'pokemon', name: 'Espathra ex' }],
    identifiers: [],
  },
  hopsZacian: {
    name: "Hop's Zacian",
    required: [
      { type: 'pokemon', name: "Hop's Zacian ex" },
      { type: 'pokemon', name: "Hop's Snorlax" },
    ],
    identifiers: [],
  },
  teraBox: {
    name: 'Tera Box',
    // Three required cards means this beats terapagosNoctowl via tie-break (b)
    // when all three are present.
    required: [
      { type: 'pokemon', name: 'Teal Mask Ogerpon ex' },
      { type: 'pokemon', name: 'Noctowl' },
      { type: 'pokemon', name: 'Terapagos ex' },
    ],
    identifiers: [],
  },
  regidrago: {
    name: 'Regidrago',
    required: [
      { type: 'pokemon', name: 'Regidrago V' },
      { type: 'pokemon', name: 'Regidrago VSTAR' },
    ],
    identifiers: [],
  },
  quadThorns: {
    name: 'Quad Thorns',
    // exactCount: 4 captures the "quad" (four copies) constraint.
    // excludes Dragapult ex to avoid overlapping with dragapultIronThorns,
    // which also plays Iron Thorns ex.
    required: [{ type: 'pokemon', name: 'Iron Thorns ex', exactCount: 4 }],
    identifiers: [],
    excludes: [{ type: 'pokemon', name: 'Dragapult ex' }],
  },
  lostZoneBox: {
    name: 'Lost zone box',
    // The two trainers are what make Lost Zone decks distinct — Comfey alone
    // isn't enough.
    required: [
      { type: 'pokemon', name: 'Comfey' },
      { type: 'trainer', name: 'Mirage Gate' },
      { type: 'trainer', name: "Colress's Experiment" },
    ],
    identifiers: [],
  },
  charizardPidgeot: {
    name: 'Charizard Pidgeot',
    required: [
      { type: 'pokemon', name: 'Charizard ex' },
      { type: 'pokemon', name: 'Pidgeot ex' },
    ],
    // Charmander signals the full Charizard evolution line is present,
    // meaning Charizard is the primary attacker rather than a splash.
    identifiers: [{ type: 'pokemon', name: 'Charmander' }],
  },
  charizardDusknoir: {
    name: 'Charizard Dusknoir',
    required: [
      { type: 'pokemon', name: 'Charizard ex' },
      { type: 'pokemon', name: 'Dusknoir' },
    ],
    // Charmander signals the full Charizard evolution line is present.
    identifiers: [{ type: 'pokemon', name: 'Charmander' }],
  },
  charizardNoctowl: {
    name: 'Charizard Noctowl',
    required: [
      { type: 'pokemon', name: 'Charizard ex' },
      { type: 'pokemon', name: 'Noctowl' },
    ],
    // Charmander + Hoothoot confirm both the full Charizard evolution line and
    // the full Noctowl engine line — distinguishing this from terapagosNocktowl
    // (which splashes Charizard without a full Charmander line).
    identifiers: [
      { type: 'pokemon', name: 'Charmander' },
      { type: 'pokemon', name: 'Hoothoot' },
    ],
  },
  ragingBolt: {
    name: 'Raging Bolt',
    required: [
      { type: 'pokemon', name: 'Raging Bolt ex' },
      { type: 'pokemon', name: 'Teal Mask Ogerpon ex' },
    ],
    identifiers: [],
  },
  lugiaVstar: {
    name: 'Lugia Vstar',
    required: [
      { type: 'pokemon', name: 'Lugia V' },
      { type: 'pokemon', name: 'Lugia VSTAR' },
      { type: 'pokemon', name: 'Archeops' },
    ],
    identifiers: [],
  },
  gardevorJellicent: {
    name: 'Gardevoir Jellicent',
    // Two required cards means this beats the generic gardeviorEx via
    // tie-break (b) when Jellicent is present.
    required: [
      { type: 'pokemon', name: 'Gardevoir ex' },
      { type: 'pokemon', name: 'Jellicent' },
    ],
    identifiers: [],
  },
  gardeviorEx: {
    name: 'Gardevior EX',
    required: [{ type: 'pokemon', name: 'Gardevoir ex' }],
    identifiers: [],
  },
  mewVmax: {
    name: 'Mew VMAX',
    required: [
      { type: 'pokemon', name: 'Mew VMAX' },
      { type: 'pokemon', name: 'Genesect V' },
    ],
    identifiers: [],
  },
  arceus: {
    name: 'Arceus',
    required: [{ type: 'pokemon', name: 'Arceus VSTAR' }],
    identifiers: [],
  },
  charizardBibarel: {
    name: 'Charizard Bibarel',
    required: [
      { type: 'pokemon', name: 'Charizard ex' },
      { type: 'pokemon', name: 'Bibarel' },
    ],
    // Charmander signals the full Charizard evolution line is present.
    identifiers: [{ type: 'pokemon', name: 'Charmander' }],
  },
  roaringMoon: {
    name: 'Roaring Moon',
    required: [{ type: 'pokemon', name: 'Roaring Moon ex' }],
    identifiers: [],
    // A deck with both Roaring Moon ex and Gouging Fire ex should be classified
    // as Gouging Fire, not Roaring Moon.
    excludes: [{ type: 'pokemon', name: 'Gouging Fire ex' }],
  },
  inteleonUrshifu: {
    name: 'Inteleon Urshifu',
    required: [
      { type: 'pokemon', name: 'Inteleon VMAX' },
      { type: 'pokemon', name: 'Rapid Strike Urshifu VMAX' },
    ],
    identifiers: [],
  },
  gholdengoLunatone: {
    name: 'Gholdengo Lunatone',
    // Two required cards means this beats the generic gholdengo via
    // tie-break (b) when Lunatone is present.
    required: [
      { type: 'pokemon', name: 'Gholdengo ex' },
      { type: 'pokemon', name: 'Lunatone' },
    ],
    identifiers: [],
  },
  gholdengo: {
    name: 'Gholdengo',
    required: [{ type: 'pokemon', name: 'Gholdengo ex' }],
    identifiers: [],
  },
  snorlaxStall: {
    name: 'Snorlax Stall',
    // Note: "Snorlax" and "Hop's Snorlax" are different card names — no
    // conflict with hopsZacian.
    required: [{ type: 'pokemon', name: 'Snorlax' }],
    identifiers: [],
  },
  klawf: {
    name: 'Klawf',
    required: [{ type: 'pokemon', name: 'Klawf' }],
    identifiers: [],
  },
  pidgeotControl: {
    name: 'Pidgeot Control',
    // Three required cards distinguish this from charizardPidgeot, which also
    // plays Pidgeot ex but not Rotom V or Wellspring Mask Ogerpon ex.
    required: [
      { type: 'pokemon', name: 'Pidgeot ex' },
      { type: 'pokemon', name: 'Rotom V' },
      { type: 'pokemon', name: 'Wellspring Mask Ogerpon ex' },
    ],
    identifiers: [],
  },
  dragapultIronThorns: {
    name: 'Dragapult Iron Thorns',
    // Iron Thorns ex is an identifier rather than required so that the scoring
    // system naturally picks this over the generic dragapultEx when Iron Thorns
    // ex is present, without needing to hard-code ordering.
    required: [{ type: 'pokemon', name: 'Dragapult ex' }],
    identifiers: [{ type: 'pokemon', name: 'Iron Thorns ex' }],
  },
  palkiaDusknoir: {
    name: 'Palkia Dusknoir',
    required: [
      { type: 'pokemon', name: 'Origin Forme Palkia VSTAR' },
      { type: 'pokemon', name: 'Dusknoir' },
    ],
    identifiers: [],
  },
  miraidonFlaafy: {
    name: 'Miraidon Flaafy',
    required: [
      { type: 'pokemon', name: 'Miraidon ex' },
      { type: 'pokemon', name: 'Flaaffy' },
    ],
    identifiers: [],
  },
  miraidonEx: {
    name: 'Miraidon Ex',
    // No excludes needed: miraidonFlaafy requires two cards so it wins via
    // tie-break (b) when Flaaffy is present.
    required: [{ type: 'pokemon', name: 'Miraidon ex' }],
    identifiers: [],
  },
  hydreigon: {
    name: 'Hydreigon',
    required: [{ type: 'pokemon', name: 'Hydreigon ex' }],
    identifiers: [],
  },
  ancientBox: {
    name: 'Ancient Box',
    // Uses base-form Roaring Moon (not ex) — no conflict with the roaringMoon
    // archetype which requires 'Roaring Moon ex'.
    required: [
      { type: 'pokemon', name: 'Roaring Moon' },
      { type: 'pokemon', name: 'Flutter Mane' },
    ],
    identifiers: [],
  },
  archaludon: {
    name: 'Archaludon',
    required: [
      { type: 'pokemon', name: 'Archaludon ex' },
      { type: 'pokemon', name: 'Duraludon' },
    ],
    identifiers: [],
  },
  chienPao: {
    name: 'Chien-Pao',
    required: [
      { type: 'pokemon', name: 'Chien-Pao ex' },
      { type: 'pokemon', name: 'Baxcalibur' },
    ],
    identifiers: [],
  },
  palkiaNoctowl: {
    name: 'Palkia Noctowl',
    required: [
      { type: 'pokemon', name: 'Origin Forme Palkia VSTAR' },
      { type: 'pokemon', name: 'Noctowl' },
    ],
    // Hoothoot signals the full Noctowl engine line is present.
    identifiers: [{ type: 'pokemon', name: 'Hoothoot' }],
  },
  terapagosDusknoir: {
    name: 'Terapagos Dusknoir',
    required: [
      { type: 'pokemon', name: 'Terapagos ex' },
      { type: 'pokemon', name: 'Dusknoir' },
    ],
    identifiers: [],
  },
  ceruledge: {
    name: 'Ceruledge',
    required: [{ type: 'pokemon', name: 'Ceruledge ex' }],
    identifiers: [],
  },
  dragapultCharizard: {
    name: 'Dragapult Charizard',
    // Two required cards means this beats the generic dragapultEx via
    // tie-break (b) when both are present.
    required: [
      { type: 'pokemon', name: 'Dragapult ex' },
      { type: 'pokemon', name: 'Charizard ex' },
    ],
    identifiers: [],
  },
  dragapultDusknoir: {
    name: 'Dragapult Dusknoir',
    required: [
      { type: 'pokemon', name: 'Dragapult ex' },
      { type: 'pokemon', name: 'Dusknoir' },
    ],
    // Dreepy signals the full Dragapult evolution line is present.
    identifiers: [{ type: 'pokemon', name: 'Dreepy' }],
  },
  dragapultPidgeot: {
    name: 'Dragapult Pidgeot',
    required: [
      { type: 'pokemon', name: 'Dragapult ex' },
      { type: 'pokemon', name: 'Pidgeot ex' },
    ],
    // Dreepy signals the full Dragapult evolution line is present.
    identifiers: [{ type: 'pokemon', name: 'Dreepy' }],
  },
  dragapultEx: {
    name: 'Dragapult Ex',
    // Generic Dragapult fallback — wins only when no more specific Dragapult
    // variant (Iron Thorns, Charizard, Dusknoir, Pidgeot) can be identified.
    required: [{ type: 'pokemon', name: 'Dragapult ex' }],
    identifiers: [],
  },
  greatTuskMill: {
    name: 'Great Tusk Mill',
    // The original fn called cardCount() but never used the result — bug fixed
    // here by simply requiring Great Tusk.
    required: [{ type: 'pokemon', name: 'Great Tusk' }],
    identifiers: [],
  },
  futureHands: {
    name: 'Future Hands',
    required: [
      { type: 'pokemon', name: 'Iron Hands ex' },
      { type: 'pokemon', name: 'Iron Crown ex' },
    ],
    identifiers: [],
  },
  banetteLock: {
    name: 'Banette Lock',
    required: [{ type: 'pokemon', name: 'Banette ex' }],
    identifiers: [],
  },
  greninjaEx: {
    name: 'Greninja ex',
    required: [{ type: 'pokemon', name: 'Greninja ex' }],
    identifiers: [],
  },
  gougingFire: {
    name: 'Gouging Fire',
    required: [{ type: 'pokemon', name: 'Gouging Fire ex' }],
    identifiers: [],
  },
  alakazamDudunsparce: {
    name: 'Alakazam Dudunsparce',
    required: [
      { type: 'pokemon', name: 'Alakazam ex' },
      { type: 'pokemon', name: 'Dudunsparce' },
    ],
    identifiers: [],
  },
};
