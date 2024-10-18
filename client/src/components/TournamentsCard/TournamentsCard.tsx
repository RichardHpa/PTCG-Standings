import { useRef } from 'react';
import { Card } from 'components/Card';

import { useWindowVirtualizer } from '@tanstack/react-virtual';

import type { FC } from 'react';
import type { TournamentsCardProps } from './types';

export const TournamentsCard: FC<TournamentsCardProps> = ({
  title,
  tournaments,
}) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useWindowVirtualizer({
    count: tournaments.length,
    estimateSize: () => 100,
    overscan: 5,
    scrollMargin: listRef.current?.offsetTop ?? 0,
  });

  return (
    <Card title={title} growHeight>
      <div ref={listRef} className="List">
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {virtualizer.getVirtualItems().map(item => {
            const tournament = tournaments[item.index];
            return (
              <div
                key={item.key}
                className="w-full cursor-pointer items-center border-b border-gray-100 pl-3 pr-6 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: `${item.size}px`,
                  transform: `translateY(${
                    item.start - virtualizer.options.scrollMargin
                  }px)`,
                }}
              >
                <div className="flex justify-between gap-8 py-6">
                  <div className="flex gap-4">
                    {tournament.logo && (
                      <img
                        src={tournament.logo}
                        alt={tournament.name}
                        className="h-fit w-16"
                      />
                    )}
                    {tournament.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
