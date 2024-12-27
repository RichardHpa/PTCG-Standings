import { useMemo } from 'react';
import { formatPlayerName } from 'helpers/formatPlayerName';

import { Paragraph } from 'components/Paragraph';
import { Archetypes } from 'components/Archetypes';

import { recordColorMap } from 'utils/recordColorMap';

import { useTournamentContext } from 'providers/TournamentProvider';

import type {
  RoundsTableProps,
  RoundRowProps,
  RoundsWithArchetype,
} from './types';
import type { FC } from 'react';

export const RoundRow = ({ round, roundNum }: RoundRowProps) => {
  return (
    <li className="py-4 pl-3 pr-6">
      <div className="flex justify-between align-top">
        <div className="text-left">
          <Paragraph size="sm">
            Round {roundNum} - Table {round.table}
          </Paragraph>
          <Paragraph>{formatPlayerName(round.name)}</Paragraph>
        </div>
        <div className="flex items-center gap-2">
          {/* {round.decklist && (
            <Archetypes size="small" decklist={round.decklist} />
          )} */}

          {round.archetype && (
            <Archetypes size="small" archetype={round.archetype} />
          )}
          {round.result && (
            <p className={`${recordColorMap[round.result]} font-bold`}>
              {round.result}
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

export const RoundsTable: FC<RoundsTableProps> = ({ player, division }) => {
  const { divisions } = useTournamentContext();

  const formattedRounds = useMemo(() => {
    const divisionData = divisions.find(item => item.division === division)!;
    const rounds = player.rounds as RoundsWithArchetype;
    Object.keys(rounds).forEach(round => {
      const opponentsName = rounds[round].name;
      // NOTE: If there are 2 players with the same name, this will only get the first one, we probably need to do a better check
      const opponent = divisionData.data.find(x => x.name === opponentsName);
      if (opponent?.archetype) {
        rounds[round].archetype = opponent?.archetype;
      } else {
        rounds[round].archetype = undefined;
      }
    });
    return rounds;
  }, [divisions, player.rounds, division]);

  const rounds = player.rounds;

  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {Object.keys(formattedRounds)
        .reverse()
        .map(round => {
          return (
            <RoundRow key={round} roundNum={round} round={rounds[round]} />
          );
        })}
    </ul>
  );
};
