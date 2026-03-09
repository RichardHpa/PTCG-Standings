import { createContext, useContext, useCallback } from 'react';

import { useGetTournament } from 'queries/useGetTournament';

import { LoadingPokeball } from 'components/LoadingPokeball';
import { Notice } from 'components/Notice';

import type { Standing } from 'types/standing';
import type { ReactNode } from 'react';
import type { Division } from 'types/divisions';
import type { PlayerContextProps } from './types';
import type { TournamentApiResponse } from 'types/tournament';

const PlayerContext = createContext<PlayerContextProps | null>(null);

export const usePlayerContext = () => {
  const currentPlayers = useContext(PlayerContext);
  if (!currentPlayers) {
    throw new Error('TournamentContext: No value provided');
  }

  return currentPlayers;
};

export const PlayerContextProvider = ({
  children,
  playerName,
  division,
  tournamentId,
}: {
  children: ReactNode;
  playerName: Standing['name'];
  division: Division;
  tournamentId: string;
}) => {
  const tournamentQuery = useGetTournament({
    tournamentId,
    select: useCallback(
      (data: TournamentApiResponse) => {
        const allDivisions = data.tournament_data;
        const foundDivision = allDivisions.find(
          item => item.division === division,
        );

        if (!foundDivision) {
          throw new Error('PlayerContextProvider: Division not found');
        }

        const foundPlayers = foundDivision.data.filter(
          player => player.name === playerName,
        );

        if (!foundPlayers.length) {
          throw new Error('PlayerContextProvider: Player not found');
        }

        return {
          players: foundPlayers,
          division,
        };
      },
      [division, playerName],
    ),
  });

  if (tournamentQuery.isPending) {
    return (
      <div className="flex flex-col items-center justify-center">
        <LoadingPokeball alt="Loading player data..." showAlt size="100" />
      </div>
    );
  }

  if (tournamentQuery.isError) {
    return <Notice status="error">Cant find player information</Notice>;
  }

  return (
    <PlayerContext.Provider value={tournamentQuery.data}>
      {children}
    </PlayerContext.Provider>
  );
};
