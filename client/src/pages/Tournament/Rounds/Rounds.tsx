import { useMemo, useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { Division } from 'types/divisions';

export const Rounds = () => {
  const [selectedRound, setSelectedRound] = useState(1);
  const { tournament } = useTournamentContext();
  const { division = 'masters' } = useParams() as { division: Division };

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

  return (
    <div className="flex flex-col items-start gap-4">
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
      View {division} rounds
    </div>
  );
};
