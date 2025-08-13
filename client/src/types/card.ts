export interface Card {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level?: string;
  hp?: string;
  types: string[];
  evolvesFrom?: string;
  attacks: Attack[];
  weaknesses?: Weakness[];
  resistances?: Resistance[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: CardSet;
  number: string;
  artist: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers: number[];
  legalities: CardLegalities;
  images: CardImages;
  tcgplayer?: TCGPlayer;
  cardmarket?: CardMarket;
}

export interface Attack {
  name: string;
  cost: string[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

export interface Weakness {
  type: string;
  value: string;
}

export interface Resistance {
  type: string;
  value: string;
}

export interface CardSet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: CardLegalities;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: SetImages;
}

export interface CardLegalities {
  unlimited: string;
  expanded?: string;
  standard?: string;
}

export interface CardImages {
  small: string;
  large: string;
}

export interface SetImages {
  symbol: string;
  logo: string;
}

export interface TCGPlayer {
  url: string;
  updatedAt: string;
  prices: {
    [edition: string]: {
      low: number | null;
      mid: number | null;
      high: number | null;
      market: number | null;
      directLow: number | null;
    };
  };
}

export interface CardMarket {
  url: string;
  updatedAt: string;
  prices: {
    averageSellPrice: number;
    lowPrice: number;
    trendPrice: number;
    germanProLow: number;
    suggestedPrice: number;
    reverseHoloSell: number;
    reverseHoloLow: number;
    reverseHoloTrend: number;
    lowPriceExPlus: number;
    avg1: number;
    avg7: number;
    avg30: number;
    reverseHoloAvg1: number;
    reverseHoloAvg7: number;
    reverseHoloAvg30: number;
  };
}

export interface CardApiResponse {
  count: number;
  page: number;
  pageSize: number;
  totalCount: number;
  data: Card[];
}
