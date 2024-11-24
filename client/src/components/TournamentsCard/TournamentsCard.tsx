import { useRef, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { RUNNING, CHECK_IN, NOT_STARTED } from 'constants/tournamentStatus';

import { Card } from 'components/Card';
import { VirtualizedTable } from 'components/VirtualizedTable';
import { TournamentLogo } from 'components/TournamentLogo';
import { Indicator } from 'components/Indicator';

import { AdditionalInfo } from './components/AdditionalInfo';

import { formatDateFromTimezone } from 'helpers/formatDateFromTimezone';

import type { FC } from 'react';
import type { TournamentsCardProps } from './types';
import type { Tournament } from 'types/tournament';
import type { ColumnProps } from 'components/VirtualizedTable/types';

const notRunningTournaments = [CHECK_IN, NOT_STARTED];

export const TournamentsCard: FC<TournamentsCardProps> = ({
  title,
  tournaments,
}) => {
  const navigate = useNavigate();
  const listRef = useRef<HTMLDivElement | null>(null);

  const columns: ColumnProps<Tournament>[] = useMemo(() => {
    return [
      {
        key: 'name',
        header: 'Tournament',
        render: row => (
          <div className="flex gap-4">
            <TournamentLogo tournamentName={row.name} />

            <div className="flex flex-col gap-2">
              <div className="text-base font-semibold text-gray-900 dark:text-white">
                {row.name}
              </div>

              {!notRunningTournaments.includes(row.tournamentStatus) && (
                <AdditionalInfo
                  winners={row.winners}
                  roundNumbers={row.roundNumbers}
                />
              )}
            </div>
          </div>
        ),
      },
      {
        key: 'dates',
        header: 'Dates',
        align: 'right',
        render: row => (
          <div className="flex gap-2">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {formatDateFromTimezone(row.date.start, 'MMMM d, yyyy')} -{' '}
              {formatDateFromTimezone(row.date.end, 'MMMM d, yyyy')}
            </div>

            {row.tournamentStatus === RUNNING && <Indicator />}
          </div>
        ),
      },
    ];
  }, []);

  const handleRowClick = useCallback(
    (tournament: Tournament) => {
      navigate(`/tournaments/${tournament.id}`);
    },
    [navigate],
  );

  return (
    <div ref={listRef}>
      <Card title={title} growHeight>
        <VirtualizedTable
          header="none"
          data={tournaments}
          columns={columns}
          containerRef={listRef}
          estimateSize={130}
          onRowClick={handleRowClick}
        />
      </Card>
    </div>
  );
};
