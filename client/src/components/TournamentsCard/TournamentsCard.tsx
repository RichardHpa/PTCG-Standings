import { useRef } from 'react';
import { Card } from 'components/Card';

import { useWindowVirtualizer } from '@tanstack/react-virtual';

import { TournamentRow } from './components/TournamentRow';

import type { FC } from 'react';
import type { TournamentsCardProps } from './types';

export const TournamentsCard: FC<TournamentsCardProps> = ({
  title,
  tournaments,
}) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useWindowVirtualizer({
    count: tournaments.length,
    // TODO: need to figure out the way to use variable sizing within a window scroller
    estimateSize: () => 156,
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
                <TournamentRow tournament={tournament} />
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
