import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListBulletIcon } from '@heroicons/react/24/solid';

import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { IconButton } from 'components/Button';
import { Archetypes } from 'components/Archetypes';
import { Card } from 'components/Card';
import { RoundsTable } from 'components/RoundsTable';

import { formatPlayerName } from 'helpers/formatPlayerName';
import { formatRecord } from 'helpers/formatRecord';
import { calculatePoints } from 'helpers/calculatePoints';
import { firstLetterToUppercase } from 'helpers/firstLetterToUppercase';

import type { FC } from 'react';
import type { PlayerInfoProps } from './types';

const formatToPercentage = (value: number) => {
  return `${(value * 100).toFixed(2)}%`;
};

export const PlayerInfo: FC<PlayerInfoProps> = ({ player, division }) => {
  const navigate = useNavigate();

  const handleViewDecklist = useCallback(() => {
    navigate('./decklist');
  }, [navigate]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Heading level="2">{formatPlayerName(player.name)}</Heading>
            <span className="me-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              {firstLetterToUppercase(division)}
            </span>
          </div>

          <Paragraph>
            {formatRecord(player.record)}{' '}
            <b>({calculatePoints(player.record)})</b>
          </Paragraph>
        </div>

        {player.decklist && (
          <div className="flex items-center justify-center gap-2">
            {typeof player.decklist !== 'string' && (
              <Archetypes decklist={player.decklist} />
            )}
            <IconButton
              icon={<ListBulletIcon />}
              alt="deck list"
              variant="outlined"
              color="alternative"
              onClick={handleViewDecklist}
            />
          </div>
        )}
      </div>

      <div>
        <Heading level="6">Current Standing </Heading>
        <Paragraph size="sm">{player.placing}</Paragraph>
      </div>

      <div className="flex gap-4">
        <div>
          <Paragraph weight="medium" color="white">
            Self Resistance
          </Paragraph>
          <Paragraph size="sm">
            {player.resistances.self} |{' '}
            {formatToPercentage(player.resistances.self)}
          </Paragraph>
        </div>

        <div>
          <Paragraph weight="medium" color="white">
            Opponents Resistance
          </Paragraph>
          <Paragraph size="sm">
            {player.resistances.opp} |{' '}
            {formatToPercentage(player.resistances.opp)}
          </Paragraph>
        </div>

        <div>
          <Paragraph weight="medium" color="white">
            Opponents Opponents Resistance
          </Paragraph>
          <Paragraph size="sm">
            {player.resistances.oppopp} |{' '}
            {formatToPercentage(player.resistances.oppopp)}
          </Paragraph>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Rounds">
          <RoundsTable player={player} division={division} />
        </Card>
        <Card title="Players with same points">Points</Card>
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <Card title="Current placing">Standings</Card>
        </div>
      </div>
    </div>
  );
};
