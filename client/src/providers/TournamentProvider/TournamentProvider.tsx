import { createContext, useContext } from 'react';

import { useGetTournament } from 'queries/useGetTournament';

import type { ReactNode } from 'react';
import { TournamentContextProps } from './types';

const TournamentContext = createContext<TournamentContextProps | null>(null);

export const useTournamentContext = () => {
  const currentUser = useContext(TournamentContext);
  if (!currentUser) {
    throw new Error('TournamentContext: No value provided');
  }

  return currentUser;
};

export const TournamentContextProvider = ({
  children,
  tournamentId,
}: {
  children: ReactNode;
  tournamentId: string | number;
}) => {
  const tournamentQuery = useGetTournament(tournamentId);

  if (tournamentQuery.isPending) {
    return 'Loading...';
  }

  if (tournamentQuery.isError) {
    return `There was an error: ${tournamentQuery.error}`;
  }

  return (
    <TournamentContext.Provider value={tournamentQuery.data}>
      {children}
    </TournamentContext.Provider>
  );
};
