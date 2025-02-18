import { useMemo } from 'react';

import { formatDivisionName } from 'helpers/formatDivisionName';
import { formatPlayerName } from 'helpers/formatPlayerName';

import { FINISHED } from 'constants/tournamentStatus';

import type { FC } from 'react';
import type { AdditionalInfoProps, AdditionInfoRowProps } from './types';
import type { Division } from 'types/divisions';

const AdditionInfoRow: FC<AdditionInfoRowProps> = ({
  division,
  winner,
  roundNumber,
}) => {
  if (winner) {
    return (
      <div>
        {division} winner: {formatPlayerName(winner)}
      </div>
    );
  }

  if (roundNumber) {
    return (
      <div>
        {division} currently on round {roundNumber}
      </div>
    );
  }
  return null;
};

export const AdditionalInfo: FC<AdditionalInfoProps> = ({
  winners,
  roundNumbers,
  tournamentStatus,
}) => {
  const divisionInfo = useMemo(() => {
    const entries = Object.keys(winners) as Division[];
    const formattedRes = entries.map(division => {
      const parsedWinner =
        winners[division] === 'None' ? null : winners[division];

      return {
        division: formatDivisionName(division),
        winner: parsedWinner,
        roundNumber: roundNumbers[division],
      };
    });

    const filteredRes = formattedRes.filter(res => {
      return res.winner !== null || res.roundNumber !== null;
    });

    const orderedDivisions = [
      'Masters',
      'Seniors',
      'Juniors',
      'Juniorsseniors',
    ];
    filteredRes.sort((a, b) => {
      return (
        orderedDivisions.indexOf(a.division) -
        orderedDivisions.indexOf(b.division)
      );
    });

    return filteredRes;
  }, [roundNumbers, winners]);

  if (
    Object.keys(winners).length === 0 &&
    Object.keys(roundNumbers).length === 0
  ) {
    return null;
  }

  return (
    <div className="flex flex-col">
      {divisionInfo.map(info => {
        if (tournamentStatus === FINISHED && !info.winner) {
          return null;
        }
        return (
          <div key={info.division}>
            <AdditionInfoRow
              division={info.division}
              roundNumber={info.roundNumber}
              winner={info.winner}
            />
          </div>
        );
      })}
    </div>
  );
};
