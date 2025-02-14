import { Outlet, useLoaderData, Link } from 'react-router-dom';

import { Heading } from 'components/Heading';
import { PinPlayerButton } from 'components/PinPlayer';
import { Notice } from 'components/Notice';
import { SEO } from 'components/SEO';

import { RUNNING } from 'constants/tournamentStatus';

import { formatPlayerName } from 'helpers/formatPlayerName';
import { firstLetterToUppercase } from 'helpers/firstLetterToUppercase';
import { formatPlayerNameToUrl } from 'utils/parsePlayerUrl';

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
    <div className="flex flex-col gap-8">
      <SEO
        title={`${formatPlayerName(player.name, false)} in ${tournament.name}`}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            to={`/tournaments/${tournament.id}/${division}/${formatPlayerNameToUrl(player.name)}`}
          >
            <Heading level="2" className="hover:underline">
              {formatPlayerName(player.name)}
            </Heading>
          </Link>

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

      {players.length > 1 && (
        <div>
          <Notice status="warning">
            We have found multiple players with the same name and from the same
            country. Since we cannot determine which player you are looking for,
            some of the data may be incorrect. This is a known issue and since
            RK9 Labs doesn't provide unique identifiers for players, we cannot
            fix this. Hopefully they will add something in the future but for
            now we have to live with it.
          </Notice>
        </div>
      )}

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
