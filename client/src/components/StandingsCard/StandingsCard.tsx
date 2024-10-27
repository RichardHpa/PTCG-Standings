import { useRef } from 'react';

import { Card } from 'components/Card';

import { StandingsRow } from './StandingsRow';

import { useWindowVirtualizer } from '@tanstack/react-virtual';

import type { FC } from 'react';
import type { StandingsCardProps } from './types';

export const StandingsCard: FC<StandingsCardProps> = ({
  division,
  standings,
}) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useWindowVirtualizer({
    count: standings.length,
    estimateSize: () => 77,
    overscan: 5,
    scrollMargin: listRef.current?.offsetTop ?? 0,
  });

  return (
    <Card title={`Current ${division} standings`}>
      <div ref={listRef} className="List">
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {virtualizer.getVirtualItems().map(item => {
            const standing = standings[item.index];
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
                <StandingsRow player={standing} division={division} />
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};
