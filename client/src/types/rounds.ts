import type { RawTournament } from './tournament';
import type { RecordProps } from './standing';
import type { Division } from './divisions';

export interface SingleRoundData {
  table: number;
  vs: string;
  result: 'W' | 'L' | 'T' | 'BYE' | 'LATE';
}
export interface RoundApi<T = SingleRoundData | []> {
  name: string;
  record: RecordProps;
  // for some reason if there is no round_data it is an empty array
  round_data: T;
}

interface RoundData {
  division: Division;
  data: {
    round: number;
    data: RoundApi[];
  };
}

export interface FullRoundApiResponse {
  type: 'tcg';
  tournament: RawTournament;
  tournament_data: RoundData[];
}
