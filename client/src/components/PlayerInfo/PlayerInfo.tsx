import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListBulletIcon } from '@heroicons/react/24/solid';

import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { IconButton } from 'components/Button';
import { Archetypes } from 'components/Archetypes';
import { Card } from 'components/Card';
import { RoundsTable } from 'components/RoundsTable';

import { StandingsTableCard } from './components/StandingsTableCard';
import { SimilarPointsCard } from './components/SimilarPointsCard';

import { formatRecord } from 'helpers/formatRecord';
import { calculatePoints } from 'helpers/calculatePoints';

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
      <div>
        <Paragraph>
          {formatRecord(player.record)}{' '}
          <b>({calculatePoints(player.record)})</b>
        </Paragraph>
      </div>

      <div className="flex justify-between">
        <div>
          <Heading level="6">Current Standing </Heading>
          <Paragraph size="sm">{player.placing}</Paragraph>
        </div>

        {player.decklist && (
          <div className="flex items-center justify-center gap-2">
            {player.archetype && (
              <Archetypes size="small" archetype={player.archetype} />
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

      <div className="flex flex-wrap gap-4">
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

        <SimilarPointsCard
          player={player}
          division={division}
          playerIndex={player.placing - 1}
        />

        <div className="col-span-1 h-screen min-h-screen sm:col-span-2 sm:min-h-[600px] md:h-auto lg:col-span-1">
          <StandingsTableCard
            player={player}
            division={division}
            // NOTE: This is a hacky way to get the player index, we should get this from the provider
            playerIndex={player.placing - 1}
          />
        </div>
      </div>
    </div>
  );
};
