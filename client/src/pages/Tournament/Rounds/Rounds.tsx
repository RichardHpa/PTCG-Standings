import { useMemo, useState, useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';

import { LoadingPokeball } from 'components/LoadingPokeball';
import { VirtualizedTable } from 'components/VirtualizedTable';

import { WIN, LOSS, DRAW } from 'constants/results';

import { formatPlayerName } from 'helpers/formatPlayerName';

import { useGetRound } from 'queries/useGetRound/useGetRound';
import { useTournamentContext } from 'providers/TournamentProvider';

import type { Division } from 'types/divisions';
import type { RoundApi, SingleRoundData } from 'types/rounds';
import type { ColumnProps } from 'components/VirtualizedTable/types';

const columns: ColumnProps<RoundApi<SingleRoundData>>[] = [
  {
    key: 'player1',
    header: '',
    classes: row =>
      clsx(
        row.round_data.result === WIN && 'bg-green-600 text-black',
        row.round_data.result === DRAW && 'bg-yellow-300 text-black',
      ),
    render: row => <div>{formatPlayerName(row.name)}</div>,
  },

  {
    key: 'vs',
    header: '',
    render: () => <div className="">vs</div>,
    align: 'center',
    size: 'medium',
  },
  {
    key: 'player2',
    header: '',
    align: 'right',
    classes: row =>
      clsx(
        row.round_data.result === LOSS && 'bg-green-600 text-black',
        row.round_data.result === DRAW && 'bg-yellow-300 text-black',
      ),
    render: row => <div>{formatPlayerName(row.round_data.vs)}</div>,
  },
];

export const Rounds = () => {
  const [selectedRound, setSelectedRound] = useState(1);
  const { tournament } = useTournamentContext();
  const { division = 'masters' } = useParams() as { division: Division };
  const listRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading } = useGetRound({
    tournamentId: tournament.id,
    roundNumber: selectedRound,
    division,
    select: data => {
      const rawData = data.tournament_data[0].data.data;

      const filteredData = rawData.filter(roundData => {
        if (Array.isArray(roundData.round_data)) {
          return roundData.round_data.length > 0;
        }
        return true;
      }) as RoundApi<SingleRoundData>[];

      filteredData.sort((a, b) => a.round_data.table - b.round_data.table);

      // unless there is a BYE there would be 2 records at each table, remove 1 of them
      const tableNumbers: number[] = [];
      const tables = filteredData.filter(roundData => {
        if (
          roundData.round_data.vs === 'BYE' ||
          roundData.round_data.vs === 'LATE'
        ) {
          return true;
        }
        if (!tableNumbers.includes(roundData.round_data.table)) {
          tableNumbers.push(roundData.round_data.table);
          return true;
        } else {
          return false;
        }
      });

      return tables;
    },
  });

  useEffect(() => {
    setSelectedRound(1);
  }, [division]);

  const roundsNum = useMemo(() => {
    if (tournament.roundNumbers[division]) {
      return tournament.roundNumbers[division];
    }
    return 0;
  }, [tournament.roundNumbers, division]);

  const handleRoundClick = useCallback((round: number) => {
    setSelectedRound(round);
  }, []);

  // console.log(data);
  //
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="w-full overflow-x-auto">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {Array.from({ length: roundsNum }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleRoundClick(i + 1)}
              className={clsx(
                'border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:text-gray-300',
                i === roundsNum - 1 && 'rounded-r-md',
                i === 0 && 'rounded-l-md',
                selectedRound === i + 1 &&
                  'cursor-default bg-gray-200 text-gray-700 dark:bg-gray-700',
                selectedRound !== i + 1 &&
                  'cursor-pointer text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700',
              )}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {isLoading && (
        <div className="flex w-full justify-center text-center">
          <LoadingPokeball alt={`Loading ${selectedRound} data`} />
        </div>
      )}

      {data && (
        <div className="w-full" ref={listRef}>
          <VirtualizedTable<RoundApi<SingleRoundData>>
            type="window"
            data={data}
            columns={columns}
            containerRef={listRef}
            header="none"
          />
        </div>
      )}
    </div>
  );
};
