import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Indicator } from 'components/Indicator';

import { RUNNING, CHECK_IN, NOT_STARTED } from 'constants/tournamentStatus';

import { formatDateFromTimezone } from 'helpers/formatDateFromTimezone';

import { AdditionalInfo } from '../AdditionalInfo';

import type { FC } from 'react';
import type { TournamentRowProps } from 'components/TournamentsCard/types';

const notRunningTournaments = [CHECK_IN, NOT_STARTED];

export const TournamentRow: FC<TournamentRowProps> = ({ tournament }) => {
  const navigate = useNavigate();

  const handleOnClick = useCallback(() => {
    navigate(`/tournaments/${tournament.id}`);
  }, [navigate, tournament.id]);

  return (
    <div
      role="link"
      onClick={handleOnClick}
      className="w-full cursor-pointer items-center border-b border-gray-100 pl-3 pr-6 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
    >
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

            {!notRunningTournaments.includes(tournament.tournamentStatus) && (
              <AdditionalInfo
                winners={tournament.winners}
                roundNumbers={tournament.roundNumbers}
              />
            )}
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
