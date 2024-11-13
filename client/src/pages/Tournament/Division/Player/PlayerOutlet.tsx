import { Outlet, useLoaderData } from 'react-router-dom';

import { Heading } from 'components/Heading';
import { PinPlayerButton } from 'components/PinPlayer';

import { RUNNING } from 'constants/tournamentStatus';

import { formatPlayerName } from 'helpers/formatPlayerName';
import { firstLetterToUppercase } from 'helpers/firstLetterToUppercase';

import {
  PlayerContextProvider,
  usePlayerContext,
} from 'providers/PlayerProvider';
import { useTournamentContext } from 'providers/TournamentProvider';

import type { Division } from 'types/divisions';

const RawPlayerOutlet = () => {
  const { players, division } = usePlayerContext();
  const { tournament } = useTournamentContext();
  const player = players[0];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heading level="2">{formatPlayerName(player.name)}</Heading>
          <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            {firstLetterToUppercase(division)}
          </span>
        </div>

        {tournament.tournamentStatus === RUNNING && (
          <div>
            <PinPlayerButton
              player={player}
              division={division}
              tournamentId={tournament.id}
            />
          </div>
        )}
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
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
