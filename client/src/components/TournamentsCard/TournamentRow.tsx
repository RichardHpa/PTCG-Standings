import { useMemo } from 'react';

import { Indicator } from 'components/Indicator';

import { RUNNING, CHECK_IN, NOT_STARTED } from 'constants/tournamentStatus';

import { firstLetterToUppercase } from 'helpers/firstLetterToUppercase';
import { formatDateFromTimezone } from 'helpers/formatDateFromTimezone';

import type { FC } from 'react';
import type { TournamentRowProps } from './types';
import type { Division } from 'types/divisions';

const notRunningTournaments = [CHECK_IN, NOT_STARTED];

export const TournamentRow: FC<TournamentRowProps> = ({ tournament }) => {
  const divisionInfo = useMemo(() => {
    const entries = Object.keys(tournament.winners) as Division[];
    const formattedRes = entries.map(division => {
      const parsedWinner =
        tournament.winners[division] === 'None'
          ? null
          : tournament.winners[division];

      return {
        division: firstLetterToUppercase(division),
        winner: parsedWinner,
        roundNumber: tournament.roundNumbers[division],
      };
    });

    const filteredRes = formattedRes.filter(res => {
      return res.winner !== null || res.roundNumber !== null;
    });

    return filteredRes;
  }, [tournament.roundNumbers, tournament.winners]);

  return (
    <div className="w-full cursor-pointer items-center border-b border-gray-100 pl-3 pr-6 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800">
      <div className="flex justify-between gap-8 py-6">
        <div className="flex gap-4">
          {tournament.logo && (
            <img
              src={tournament.logo}
              alt={tournament.name}
              className="h-fit w-16"
            />
          )}
          <div className="flex flex-col gap-2">
            <div className="text-base font-semibold text-gray-900 dark:text-white">
              {tournament.name}
            </div>

            {!notRunningTournaments.includes(tournament.tournamentStatus) &&
              divisionInfo.length > 0 && (
                <div className="flex flex-col gap-2">
                  {divisionInfo.map(info => {
                    if (info.winner) {
                      return (
                        <div key={info.division} className="flex gap-2">
                          <div className="text-sm font-semibold text-gray-700 dark:text-gray-400">
                            {info.division} winner
                          </div>
                          <div className="text-sm text-gray-700 dark:text-gray-400">
                            {info.winner}
                          </div>
                        </div>
                      );
                    }
                    if (info.roundNumber) {
                      return (
                        <div key={info.division} className="flex gap-2">
                          <div className="text-sm font-semibold text-gray-700 dark:text-gray-400">
                            {info.division} currency at round
                          </div>
                          <div className="text-sm text-gray-700 dark:text-gray-400">
                            {info.roundNumber}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              )}

            {/* {winners.length > 0 && (
              <div>
                {winners.map(({ division, winner }) => (
                  <div key={division} className="flex gap-2">
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-400">
                      {division}
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-400">
                      {winner}
                    </div>
                  </div>
                ))}
              </div>
            )} */}
          </div>
        </div>

        <div className="flex gap-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {formatDateFromTimezone(tournament.date.start, 'MMMM d, yyyy')} -{' '}
            {formatDateFromTimezone(tournament.date.end, 'MMMM d, yyyy')}
          </div>

          {tournament.tournamentStatus === RUNNING && <Indicator />}
        </div>
      </div>
    </div>
  );
};
