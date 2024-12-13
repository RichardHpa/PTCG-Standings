import type { SetCodes } from 'constants/sets';

export type Results = 'wins' | 'losses' | 'ties';

export type RecordProps = {
  [key in Results]: number;
};

export interface Round {
  name: string;
  result: string | null;
  table: number;
}

export interface Rounds {
  [key: string]: Round;
}

export interface PokemonCard {
  count: number;
  name: string;
  number: string;
  set: SetCodes;
}

export interface DeckList {
  pokemon: PokemonCard[];
  trainer: PokemonCard[];
  energy: PokemonCard[];
}

export interface Standing<D = DeckList | string> {
  name: string;
  placing: number;
  record: RecordProps;
  resistances: {
    self: number;
    opp: number;
    oppopp: number;
  };
  decklist: D;
  drop: number;
  rounds: Rounds;
}
