import {
  createContext,
  useContext,
  useCallback,
  // useState,
  // useEffect,
  useMemo,
} from 'react';
// import { useQueries, useQueryClient } from '@tanstack/react-query';

// import { RUNNING } from 'constants/tournamentStatus';

import { useLocalStorageState } from 'hooks/useLocalStorageState';
// import { getTournamentQueryOptions } from 'queries/useGetTournament';

import { PINNED_PLAYERS_KEY } from 'constants/localStorageKeys';

import type { ReactNode } from 'react';
import type {
  PinnedPlayersProviderProps,
  // DivisionData,
  TournamentData,
} from './types';
import type { Division } from 'types/divisions';

const PinnedPlayersContext = createContext<PinnedPlayersProviderProps | null>(
  null,
);

export const usePinnedPlayersContext = () => {
  const currentPinnedPlayers = useContext(PinnedPlayersContext);
  if (!currentPinnedPlayers) {
    throw new Error('PinnedPlayersContext: No value provided');
  }

  return currentPinnedPlayers;
};

export const PinnedPlayersProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [tournamentData, setTournamentData] =
    useLocalStorageState<TournamentData>(PINNED_PLAYERS_KEY, {});

  const updateTournamentData = useCallback(
    (update: Partial<TournamentData>) => {
      setTournamentData((prevData: TournamentData) => {
        // Ensure that we are creating a full TournamentData object
        const mergedData: TournamentData = { ...prevData };

        // Merge in the updates, ensuring we initialize any undefined properties
        for (const tournamentId in update) {
          if (Object.prototype.hasOwnProperty.call(update, tournamentId)) {
            const divisionData = update[tournamentId];

            // If divisionData is defined, merge it
            if (divisionData) {
              mergedData[tournamentId] = {
                ...mergedData[tournamentId],
                ...divisionData,
              };
            }
          }
        }

        return mergedData; // TypeScript should now correctly infer this as TournamentData
      });
    },
    [setTournamentData],
  );

  const removeTournament = useCallback(
    (tournamentId: string) => {
      setTournamentData(prevData => {
        const { [tournamentId]: _, ...remainingData } = prevData;
        return remainingData;
      });
    },
    [setTournamentData],
  );

  // Check if a player is pinned within a specific division
  const isPlayerPinned = useCallback(
    (tournamentId: string, division: Division, playerId: string) => {
      return !!tournamentData[tournamentId]?.[division]?.some(
        player => player === playerId,
      );
    },
    [tournamentData],
  );

  const pinPlayer = useCallback(
    (tournamentId: string, division: Division, player: string) => {
      updateTournamentData({
        [tournamentId]: {
          ...(tournamentData[tournamentId] || {}),
          [division]: [
            ...(tournamentData[tournamentId]?.[division] || []),
            player,
          ],
        },
      });
    },
    [tournamentData, updateTournamentData],
  );

  const unpinPlayer = useCallback(
    (tournamentId: string, division: Division, playerId: string) => {
      const updatedDivision = (
        tournamentData[tournamentId]?.[division] || []
      ).filter(player => player !== playerId);

      const updatedTournament = {
        ...tournamentData[tournamentId],
        [division]: updatedDivision,
      };

      if (updatedDivision.length === 0) delete updatedTournament[division];
      if (Object.keys(updatedTournament).length === 0) {
        removeTournament(tournamentId);
      } else {
        updateTournamentData({ [tournamentId]: updatedTournament });
      }
    },
    [removeTournament, tournamentData, updateTournamentData],
  );

  const togglePlayer = useCallback(
    (tournamentId: string, division: Division, player: string) => {
      if (isPlayerPinned(tournamentId, division, player)) {
        unpinPlayer(tournamentId, division, player);
      } else {
        pinPlayer(tournamentId, division, player);
      }
    },
    [isPlayerPinned, pinPlayer, unpinPlayer],
  );

  const values = useMemo(() => {
    return {
      pinPlayer,
      unpinPlayer,
      togglePlayer,
      localStorageValue: tournamentData,
      isPlayerPinned,
    };
  }, [isPlayerPinned, pinPlayer, togglePlayer, tournamentData, unpinPlayer]);

  return (
    <PinnedPlayersContext.Provider value={values}>
      {children}
    </PinnedPlayersContext.Provider>
  );
};
