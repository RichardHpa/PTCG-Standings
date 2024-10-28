import type { Division } from 'types/divisions';
// import type { Tournament } from 'types/tournament';

export interface PinnedPlayerEventProps {
  player: string;
  tournamentId: string;
  division: Division;
}

export type DivisionData = {
  [division in Division]: string[];
};

export interface TournamentData {
  [tournamentId: string]: DivisionData;
}

export interface PinnedPlayersProviderProps {
  localStorageValue: TournamentData;

  pinPlayer: (tournamentId: string, division: Division, player: string) => void;
  unpinPlayer: (
    tournamentId: string,
    division: Division,
    player: string,
  ) => void;
  togglePlayer: (
    tournamentId: string,
    division: Division,
    player: string,
  ) => void;
  isPlayerPinned: (
    tournamentId: string,
    division: Division,
    player: string,
  ) => boolean;
}

export interface TournamentsContextType {
  // tournaments: Record<string, Tournament | undefined>;
  // addTournament: (tournamentId: string) => void;
  // removeTournament: (tournamentId: string) => void;
  // addDivision: (tournamentId: string, division: string) => void;
  // pinPlayer: (tournamentId: string, division: string, player: string) => void;
  // unpinPlayer: (
  //   tournamentId: string,
  //   division: string,
  //   playerId: string,
  // ) => void;

  localStorageValue: string;

  pinPlayer: (tournamentId: string, division: Division, player: string) => void;
  unpinPlayer: (
    tournamentId: string,
    division: Division,
    player: string,
  ) => void;
  togglePlayer: (
    tournamentId: string,
    division: Division,
    player: string,
  ) => void;
  isPlayerPinned: (
    tournamentId: string,
    division: Division,
    player: string,
  ) => boolean;
}
