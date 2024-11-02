import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListBulletIcon } from '@heroicons/react/24/solid';

import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { IconButton } from 'components/Button';
import { Archetypes } from 'components/Archetypes';

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
          <div className="flex items-center justify-center gap-4">
            <IconButton
              icon={<ListBulletIcon />}
              alt="deck list"
              variant="outlined"
              color="alternative"
              onClick={handleViewDecklist}
            />
            {typeof player.decklist !== 'string' && (
              <Archetypes decklist={player.decklist} />
            )}
          </div>
        )}
      </div>

      <div>
        <Heading level="6">
          Current Standing{' '}
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            {player.placing}
          </span>
        </Heading>
      </div>

      <div className="flex gap-4">
        <p className="font-medium">
          Self Resistance{' '}
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            {player.resistances.self} |{' '}
            {formatToPercentage(player.resistances.self)}
          </span>
        </p>

        <p className="font-medium">
          Opponents Resistance{' '}
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            {player.resistances.opp} |{' '}
            {formatToPercentage(player.resistances.opp)}
          </span>
        </p>

        <p className="font-medium">
          Opponents Opponents Resistance{' '}
          <span className="block text-sm text-gray-500 dark:text-gray-400">
            {player.resistances.oppopp} |{' '}
            {formatToPercentage(player.resistances.oppopp)}
          </span>
        </p>
      </div>
    </div>
  );
};
