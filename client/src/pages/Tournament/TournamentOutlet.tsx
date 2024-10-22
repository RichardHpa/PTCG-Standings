import { Outlet, useLoaderData, Link } from 'react-router-dom';

import { Heading } from 'components/Heading';
import { Indicator } from 'components/Indicator';
import { Paragraph } from 'components/Paragraph';

import { RUNNING } from 'constants/tournamentStatus';

import { formatDateFromTimezone } from 'helpers/formatDateFromTimezone';

import {
  TournamentContextProvider,
  useTournamentContext,
} from 'providers/TournamentProvider';

const RawTournamentOutlet = () => {
  const { tournament } = useTournamentContext();

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <div className="grid place-content-start gap-4 sm:grid-cols-[auto_auto]">
          {tournament?.logo && (
            <div className="hidden sm:block">
              <img
                src={tournament.logo}
                alt={tournament.name}
                className="h-0 min-h-full object-contain"
              />
            </div>
          )}

          <div>
            <Link to={`/tournaments/${tournament.id}`}>
              <Heading level="3" className="cursor-pointer hover:underline">
                {tournament.name}
              </Heading>
            </Link>

            <Paragraph>
              {formatDateFromTimezone(tournament.date.start, 'MMMM d, yyyy')} -{' '}
              {formatDateFromTimezone(tournament.date.end, 'MMMM d, yyyy')}
            </Paragraph>

            {tournament.streams && (
              <div className="flex gap-2">
                <Paragraph>Streams: </Paragraph>
                {Object.entries(tournament.streams).map(([day, url], index) => {
                  const streamKeys = Object.keys(tournament.streams || {});
                  return (
                    <>
                      <a
                        key={`${tournament.id}-${day}`}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline dark:text-blue-400"
                      >
                        Day {index + 1}
                      </a>
                      {index < streamKeys.length - 1 && (
                        <span className="text-gray-500 dark:text-gray-400">
                          |
                        </span>
                      )}
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {tournament.tournamentStatus === RUNNING && <Indicator />}
      </div>

      <Outlet />
    </div>
  );
};

export const TournamentOutlet = () => {
  const { tournamentId } = useLoaderData() as { tournamentId: string };
  return (
    <TournamentContextProvider tournamentId={tournamentId}>
      <RawTournamentOutlet />
    </TournamentContextProvider>
  );
};
