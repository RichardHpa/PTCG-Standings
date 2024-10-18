import type { Standing } from './standing';
import type { Division } from './divisions';

import type { ReactNode } from 'react';

export type TournamentStatus =
  | 'finished'
  | 'running'
  | 'not-started'
  | 'check-in';

export type DivisionMap<T> = {
  [key in Division]?: T;
};

export interface RawTournament {
  id: string;
  name: string;
  date: {
    start: string;
    end: string;
  };
  decklists: number;
  players: DivisionMap<string | number>;
  winners: DivisionMap<string | null>;
  tournamentStatus: TournamentStatus;
  roundNumbers: DivisionMap<number | null>;
  lastUpdated: string;
  rk9link: string;
}

export interface TournamentsApiResponse {
  dataLastUpdated?: string;
  tcg: {
    type: 'tcg';
    data: RawTournament[];
  };
}

interface TournamentData {
  division: Division;
  data: Standing[];
}

export interface TournamentApiResponse {
  dataLastUpdated?: string;
  type: 'tcg';
  tournament: RawTournament;
  tournament_data: TournamentData[];
}

interface StreamsMap {
  day1?: string;
  day2?: string;
  day3?: string;
}

export interface LocalTournamentData {
  name?: string;
  logo?: string;
  tournamentStatus?: TournamentStatus;
  streams?: StreamsMap;
  notes?: ReactNode;
}
// export interface Tournament extends RawTournament {}

export type Tournament = RawTournament & LocalTournamentData;
