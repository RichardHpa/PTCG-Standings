import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';

import { formatPlayerName } from 'helpers/formatPlayerName';
import { formatRecord } from 'helpers/formatRecord';

import type { FC } from 'react';
import type { StandingsRowProps } from './types';

export const StandingsRow: FC<StandingsRowProps> = ({ player }) => {
  const formattedRecord = formatRecord(player.record);
  return (
    <div className="flex h-full cursor-pointer items-center justify-between border-b border-gray-100 pl-3 pr-6 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800">
      <div className="flex items-center gap-4">
        <Heading level="6">{player.placing}</Heading>

        <div className="min-w-0 flex-1">
          <Paragraph>{formatPlayerName(player.name)}</Paragraph>
          {formattedRecord && (
            <Paragraph size="sm">{formattedRecord}</Paragraph>
          )}
        </div>
      </div>
    </div>
  );
};
