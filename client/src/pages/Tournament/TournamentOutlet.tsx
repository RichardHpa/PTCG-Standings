import { Outlet, useLoaderData, Link } from 'react-router-dom';

import { Heading } from 'components/Heading';
import { Indicator } from 'components/Indicator';
import { Paragraph } from 'components/Paragraph';
import { Tabs, NavTab } from 'components/Tabs';

import { RUNNING, CHECK_IN, NOT_STARTED } from 'constants/tournamentStatus';

import { formatDateFromTimezone } from 'helpers/formatDateFromTimezone';

import {
  TournamentContextProvider,
  useTournamentContext,
} from 'providers/TournamentProvider';

const notStartedTournamentStatus = [CHECK_IN, NOT_STARTED];

const RawTournamentOutlet = () => {
  const { tournament } = useTournamentContext();

  return (
    <div className="flex flex-col gap-4">
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

      {tournament.tournamentStatus === CHECK_IN && (
        <Paragraph>
          Tournament check-in is open. Players have started to check in for the
          tournament. Once the check-in period is over, the tournament will
          start and we will be able to show the standings, pairings, and other
          information.
        </Paragraph>
      )}

      {tournament.tournamentStatus === NOT_STARTED && (
        <Paragraph>
          Tournament has not started yet. Once the tournament starts, we will be
          able to show the standings, pairings, and other information.
        </Paragraph>
      )}

      {!notStartedTournamentStatus.includes(tournament.tournamentStatus) && (
        <>
          <div>
            <Tabs>
              {tournament.tournamentStatus === RUNNING && (
                <NavTab to="live">Current Pairings</NavTab>
              )}
              <NavTab to="top_cut">Top cut</NavTab>
              <NavTab to="standings">Standings</NavTab>
              <NavTab to="rounds">Rounds</NavTab>
              <NavTab to="stats">Stats</NavTab>
              {tournament.streams && <NavTab to="streams">Streams</NavTab>}
            </Tabs>
          </div>

          {/* <div>
            <ul className="hidden rounded-lg text-center text-sm font-medium text-gray-500 shadow dark:divide-gray-700 dark:text-gray-400 sm:flex">
              <li className="w-full focus-within:z-10">
                <a
                  href="#"
                  className="active inline-block w-full rounded-s-lg border-r border-gray-200 bg-gray-100 p-4 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  aria-current="page"
                >
                  Masters
                </a>
              </li>
              <li className="w-full focus-within:z-10">
                <a
                  href="#"
                  className="inline-block w-full border-r border-gray-200 bg-white p-4 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Seniors
                </a>
              </li>
              <li className="w-full focus-within:z-10">
                <a
                  href="#"
                  className="inline-block w-full rounded-e-lg border-s-0 border-gray-200 bg-white p-4 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Juniors
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <Outlet />
          </div>
        </>
      )}
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
