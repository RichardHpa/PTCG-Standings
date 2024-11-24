import { useMemo } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

import { Card } from 'components/Card';
import { Paragraph } from 'components/Paragraph';

import { useTournamentContext } from 'providers/TournamentProvider';

import { formatPlayerName } from 'helpers/formatPlayerName';
import { calculatePoints } from 'helpers/calculatePoints';

import { useGetSimilarPlayers } from './hooks/useGetSimilarPlayers';

import type { SimilarPointsCardProps } from './types';
import type { FC, ReactNode } from 'react';
import type { Standing } from 'types/standing';

const ListItemClasses = {
  base: 'flex justify-between items-center pl-3 pr-6 py-2 text-gray-700 border-b border-gray-100 dark:border-gray-800 dark:text-gray-400',
  active: 'bg-gray-50 dark:bg-gray-700 font-bold',
};

interface ListItemProps {
  children: ReactNode;
  active?: boolean;
}

const ListItem: FC<ListItemProps> = ({ children, active }) => {
  return (
    <li
      className={clsx({
        [ListItemClasses.base]: true,
        [ListItemClasses.active]: active,
      })}
    >
      {children}
    </li>
  );
};

export interface ResistancesListItemProps {
  state: 'above' | 'below';
  player: Standing;
}

const ResistancesListItem: FC<ResistancesListItemProps> = ({
  state,
  player,
}) => {
  return (
    <ListItem>
      <div className="flex w-full flex-col gap-1">
        <div className="flex justify-between">
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {player.record.wins}-{player.record.losses}-{player.record.ties}
          </p>
          <div className="flex gap-1">
            <p
              className={clsx({
                'dark:text-gray-400" truncate text-sm text-gray-500': true,
                'text-red-500': state === 'above',
                'text-blue-500': state === 'below',
              })}
            >
              {player.resistances.opp}
            </p>
            {state === 'above' ? (
              <ChevronUpIcon className="h-5 w-5 text-red-500" />
            ) : null}
            {state === 'below' ? (
              <ChevronDownIcon className="h-5 w-5 text-blue-500" />
            ) : null}
          </div>
        </div>

        <Paragraph>{formatPlayerName(player.name)}</Paragraph>
      </div>
    </ListItem>
  );
};

export const SimilarPointsCard: FC<SimilarPointsCardProps> = ({
  player,
  playerIndex,
  division,
}) => {
  const { divisions } = useTournamentContext();
  const divisionData = useMemo(() => {
    return divisions.find(d => d.division === division)!.data;
  }, [division, divisions]);
  const similarPlayers = useGetSimilarPlayers(playerIndex, divisionData);

  const playerCount = useMemo(() => {
    if (!similarPlayers) return 0;
    return similarPlayers.above.length + similarPlayers.below.length + 1;
  }, [similarPlayers]);

  const renderAbove = useMemo(() => {
    if (!similarPlayers?.above) return null;
    const length = similarPlayers?.above.length;
    if (length > 4) {
      return (
        <>
          <ResistancesListItem state="above" player={similarPlayers.above[0]} />
          <ResistancesListItem state="above" player={similarPlayers.above[1]} />

          <ListItem>
            <i>...{length - 4} other players</i>
          </ListItem>

          <ResistancesListItem
            state="above"
            player={similarPlayers.above[length - 2]}
          />
          <ResistancesListItem
            state="above"
            player={similarPlayers.above[length - 1]}
          />
        </>
      );
    }

    return similarPlayers?.above?.map(otherPlayer => {
      return (
        <ResistancesListItem
          state="above"
          player={otherPlayer}
          key={otherPlayer.name}
        />
      );
    });
  }, [similarPlayers?.above]);

  const renderBelow = useMemo(() => {
    if (!similarPlayers?.below) return null;
    const length = similarPlayers?.below.length;

    if (length > 4) {
      return (
        <>
          <ResistancesListItem state="below" player={similarPlayers.below[0]} />
          <ResistancesListItem state="below" player={similarPlayers.below[1]} />

          <ListItem>
            <i>...{length - 4} other players</i>
          </ListItem>

          <ResistancesListItem
            state="below"
            player={similarPlayers.below[length - 2]}
          />
          <ResistancesListItem
            state="below"
            player={similarPlayers.below[length - 1]}
          />
        </>
      );
    }

    return similarPlayers?.below?.map(otherPlayer => {
      return (
        <ResistancesListItem
          state="below"
          player={otherPlayer}
          key={otherPlayer.name}
        />
      );
    });
  }, [similarPlayers?.below]);

  if (Object.keys(player.rounds).length <= 3) {
    return (
      <Card title="Players with the same amount of points">
        <div className="px-3 py-2.5">
          <Paragraph weight="bold">
            Player comparisons will be available after round 3 as there would be
            to many players to compare
          </Paragraph>
        </div>
      </Card>
    );
  }

  return (
    <Card title={`Players also with ${calculatePoints(player.record)} points`}>
      <div className="px-3 py-2.5">
        <Paragraph>
          There are {playerCount} players with also{' '}
          {calculatePoints(player.record)} Points
        </Paragraph>
      </div>

      {renderAbove}
      <ListItem active>
        <p>Your Placement</p>
        <p>{player.resistances.opp}</p>
      </ListItem>
      {renderBelow}
    </Card>
  );
};
