import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';

import { formatPlayerName } from 'helpers/formatPlayerName';
import { formatRecord } from 'helpers/formatRecord';
import { calculatePoints } from 'helpers/calculatePoints';

import type { FC } from 'react';
import type { PlayerInfoProps } from './types';

export const PlayerInfo: FC<PlayerInfoProps> = ({ player, division }) => {
  return (
    <div>
      <Heading level="2">{formatPlayerName(player.name)}</Heading>
      <Paragraph>
        {formatRecord(player.record)} <b>({calculatePoints(player.record)})</b>
      </Paragraph>
      {division}
    </div>
  );
};
