import { useEffect } from 'react';
import { useNavigationType } from 'react-router-dom';

import clsx from 'clsx';
import {
  useWindowVirtualizer,
  useVirtualizer,
  // observeWindowOffset,
} from '@tanstack/react-virtual';

import { tw } from 'utils/tailwindClassName';

import { Column } from './Column';

import type { VirtualizedTableProps } from './types';
import type { VirtualItem } from '@tanstack/react-virtual';
import type { NavigationType } from 'react-router-dom';

interface Accessor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- this actually needs to be any
  (path: string, object: unknown): any;
}

const access: Accessor = (path, object) => {
  // @ts-expect-error -- this is actually fine here as object is unknown
  return path.split('.').reduce((o, i) => o[i], object);
};

type VirtualizerProps<T> = Pick<
  VirtualizedTableProps<T>,
  | 'tableId'
  | 'data'
  | 'columns'
  | 'containerRef'
  | 'onRowClick'
  | 'scrollToIndex'
  | 'estimateSize'
>;

interface CacheItem {
  _kSavedOffset: number | undefined | null;
  _kMeasurementsCache: VirtualItem[];
}

type VirtualizerCache = Record<string, CacheItem>;

const virtualizerCache: VirtualizerCache = {};

const getInitialOffset = (tableId: string, navigationType: NavigationType) => {
  if (navigationType !== 'POP') {
    delete virtualizerCache[tableId];
  }
  if (virtualizerCache[tableId]) {
    return virtualizerCache[tableId]._kSavedOffset ?? 0;
  }
  return 0;
};

const getInitialMeasurementsCache = (
  tableId: string,
  navigationType: NavigationType,
) => {
  if (navigationType !== 'POP') {
    delete virtualizerCache[tableId];
  }
  if (virtualizerCache[tableId]) {
    return virtualizerCache[tableId]._kMeasurementsCache ?? [];
  }
  return [];
};

const WindowVirtualizer = <T,>({
  tableId,
  data,
  columns,
  containerRef,
  onRowClick,
  scrollToIndex,
  estimateSize,
}: VirtualizerProps<T>) => {
  const navigation = useNavigationType();

  const virtualizer = useWindowVirtualizer({
    initialOffset: getInitialOffset(tableId, navigation),
    initialMeasurementsCache: getInitialMeasurementsCache(tableId, navigation),
    onChange: virtualizer => {
      if (!virtualizer.isScrolling) {
        virtualizerCache[tableId] = {
          _kSavedOffset: virtualizer.scrollOffset,
          _kMeasurementsCache: virtualizer.measurementsCache,
        };
      }
    },
    count: data.length,
    estimateSize: () => estimateSize,
    overscan: 5,
    scrollMargin: containerRef.current?.offsetTop ?? 0,
    measureElement:
      typeof window !== 'undefined' &&
      navigator.userAgent.indexOf('Firefox') === -1
        ? element => element?.getBoundingClientRect().height
        : undefined,
  });

  useEffect(() => {
    if (scrollToIndex !== undefined) {
      virtualizer.scrollToIndex(scrollToIndex, {
        align: 'start',
      });
    }
  }, [containerRef, scrollToIndex, virtualizer]);

  return (
    <div
      style={{
        height: `${virtualizer.getTotalSize()}px`,
        width: '100%',
        position: 'relative',
      }}
    >
      {virtualizer.getVirtualItems().map(item => {
        const row = data[item.index];
        return (
          <div
            data-index={item.index}
            ref={node => virtualizer.measureElement(node)}
            onClick={() => onRowClick && onRowClick(row)}
            key={item.key}
            className={clsx(
              'flex border-b dark:border-gray-700',
              onRowClick &&
                'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700',
            )}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${
                item.start - virtualizer.options.scrollMargin
              }px)`,
            }}
          >
            {columns.map(column => (
              <Column
                key={column.key}
                size={column.size}
                align={column.align}
                classes={column.classes && column.classes(row)}
              >
                {column.render ? column.render(row) : access(column.key, row)}
              </Column>
            ))}
          </div>
        );
      })}
    </div>
  );
};

const ContainerVirtualizer = <T,>({
  data,
  columns,
  containerRef,
  onRowClick,
  scrollToIndex,
  estimateSize,
}: VirtualizerProps<T>) => {
  console.log('data', data);
  const virtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => containerRef.current,
    estimateSize: () => estimateSize,
    measureElement:
      typeof window !== 'undefined' &&
      navigator.userAgent.indexOf('Firefox') === -1
        ? element => element?.getBoundingClientRect().height
        : undefined,
  });
  const virtualRows = virtualizer.getVirtualItems();
  console.log('virtualRows', virtualRows);

  useEffect(() => {
    if (scrollToIndex !== undefined) {
      virtualizer.scrollToIndex(scrollToIndex, {
        align: 'start',
      });
    }
  }, [containerRef, scrollToIndex, virtualizer]);

  return (
    <div
      style={{
        height: `${virtualizer.getTotalSize()}px`,
        width: '100%',
        position: 'relative',
      }}
    >
      {virtualizer.getVirtualItems().map(virtualItem => {
        const row = data[virtualItem.index];
        return (
          <div
            data-index={virtualItem.index}
            key={virtualItem.key}
            ref={node => virtualizer.measureElement(node)}
            onClick={() => onRowClick && onRowClick(row)}
            className={clsx(
              'flex border-b dark:border-gray-700',
              onRowClick &&
                'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700',
            )}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              // height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {columns.map(column => (
              <Column
                key={column.key}
                size={column.size}
                align={column.align}
                // classes={column.columnsClasses && column.columnsClasses(row)}
                classes="!text-red"
              >
                {column.render ? column.render(row) : access(column.key, row)}
              </Column>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export const VirtualizedTable = <T,>({
  tableId,
  type = 'container',
  data,
  columns,
  header = 'static',
  noDataMessage = 'No data available',
  containerRef,
  onRowClick,
  scrollToIndex,
  estimateSize,
}: VirtualizedTableProps<T>) => {
  return (
    <div>
      {header !== 'none' && (
        <div
          className={clsx(
            tw`w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right`,
            header === 'sticky' && tw`sticky top-14 z-10`,
          )}
        >
          <div
            className={tw`flex bg-gray-50 text-xs font-bold uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400`}
          >
            {columns.map(column => (
              <Column key={column.key} size={column.size} align={column.align}>
                {column.header}
              </Column>
            ))}
          </div>
        </div>
      )}

      {data.length === 0 ? (
        <div className="p-4 text-center text-gray-500 dark:text-gray-400">
          {noDataMessage}
        </div>
      ) : (
        <>
          {type === 'window' ? (
            <WindowVirtualizer<T>
              tableId={tableId}
              data={data}
              columns={columns}
              onRowClick={onRowClick}
              containerRef={containerRef}
              estimateSize={estimateSize}
            />
          ) : (
            <ContainerVirtualizer<T>
              tableId={tableId}
              data={data}
              columns={columns}
              onRowClick={onRowClick}
              containerRef={containerRef}
              scrollToIndex={scrollToIndex}
              estimateSize={estimateSize}
            />
          )}
        </>
      )}
    </div>
  );
};
