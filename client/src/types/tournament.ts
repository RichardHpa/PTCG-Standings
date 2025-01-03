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

export interface RawTournamentsApiResponse {
  dataLastUpdated?: string;
  tcg: {
    type: 'tcg';
    data: RawTournament[];
  };
}

export interface TournamentsApiResponse {
  dataLastUpdated?: string;
  tcg: {
    type: 'tcg';
    data: Tournament[];
  };
}

export interface TournamentData {
  division: Division;
  data: Standing[];
}

export interface TournamentApiResponse {
  dataLastUpdated?: string;
  type: 'tcg';
  tournament: RawTournament;
  tournament_data: TournamentData[];
}

export interface StreamsMap {
  day1?: string;
  day2?: string;
  day3?: string;
  day4?: string;
}

export interface TournamentDeckAnalysis {
  day1?: string;
  day1BestOfTheRest?: string;
  day2?: string;
  day2BestOfTheRest?: string;
}

export interface LocalTournamentData {
  name?: string;
  logo?: string;
  tournamentStatus?: TournamentStatus;
  streams?: StreamsMap;
  notes?: ReactNode;

  deckAnalysis?: DivisionMap<TournamentDeckAnalysis>;
}

export type Tournament = RawTournament & LocalTournamentData;
