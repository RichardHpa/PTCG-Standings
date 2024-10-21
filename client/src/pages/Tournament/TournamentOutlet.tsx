import { Outlet, useLoaderData } from 'react-router-dom';

import { TournamentContextProvider } from 'providers/TournamentProvider';

export const TournamentOutlet = () => {
  const { tournamentId } = useLoaderData() as { tournamentId: string };
  return (
    <TournamentContextProvider tournamentId={tournamentId}>
      <Outlet />
    </TournamentContextProvider>
  );
};
