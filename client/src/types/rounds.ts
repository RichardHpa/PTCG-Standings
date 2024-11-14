import type { RawTournament } from './tournament';
import type { RecordProps, Results } from './standing';
import type { Division } from './divisions';

interface SingleRoundData {
  table: number;
  vs: string;
  result: Results;
}
export interface RoundApi {
  name: string;
  record: RecordProps;
  round_data: SingleRoundData;
}

interface RoundData {
  division: Division;
  data: {
    round: number;
    data: RoundApi[];
  }[];
}

export interface FullRoundApiResponse {
  type: 'tcg';
  tournament: RawTournament;
  tournament_data: RoundData[];
}
