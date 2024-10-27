import { Outlet, useLoaderData } from 'react-router-dom';

import { PlayerContextProvider } from 'providers/PlayerProvider';

import type { Division } from 'types/divisions';

const RawPlayerOutlet = () => {
  return <Outlet />;
};

export const PlayerOutlet = () => {
  const { parsedPlayerName, division, tournamentId } = useLoaderData() as {
    playerName: string;
    parsedPlayerName: string;
    division: Division;
    tournamentId: string;
  };

  return (
    <PlayerContextProvider
      division={division}
      playerName={parsedPlayerName}
      tournamentId={tournamentId}
    >
      <RawPlayerOutlet />
    </PlayerContextProvider>
  );
};
