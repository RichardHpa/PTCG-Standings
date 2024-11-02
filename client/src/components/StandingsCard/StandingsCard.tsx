// import { useRef, useMemo } from 'react';
// import { useWindowVirtualizer } from '@tanstack/react-virtual';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

// import { StandingsRow } from './StandingsRow';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { IconButton } from 'components/Button';

import { formatPlayerName } from 'helpers/formatPlayerName';
import { formatRecord } from 'helpers/formatRecord';
// import { formatPlayerNameToUrl } from 'utils/parsePlayerUrl';

import { PinIcon } from 'icons/PinIcon';

import type { FC } from 'react';
import type { StandingsCardProps } from './types';
import type { Standing } from 'types/standing';

const columnHelper = createColumnHelper<Standing>();

const columns = [
  columnHelper.display({
    id: 'name',
    header: 'Player',
    cell: props => {
      const player = props.row.original;
      return (
        <div className="flex items-center gap-4">
          <Heading level="6">{player.placing}</Heading>

          <div className="min-w-0 flex-1">
            <Paragraph>{formatPlayerName(player.name)}</Paragraph>
          </div>
        </div>
      );
    },
  }),
  columnHelper.display({
    id: 'record',
    header: 'Record',
    cell: props => {
      const player = props.row.original;
      const formattedRecord = formatRecord(player.record);
      return <Paragraph size="sm">{formattedRecord}</Paragraph>;
    },
  }),
  columnHelper.accessor('resistances.opp', {
    header: 'Opp Resistance',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  columnHelper.accessor('resistances.oppopp', {
    header: 'Opp Opp Resistance',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  columnHelper.display({
    id: 'actions',
    cell: props => {
      const player = props.row.original;
      return (
        <div className="text-right">
          <IconButton
            icon={<PinIcon />}
            alt={`Pin ${player.name}`}
            variant="ghost"
            color="alternative"
          />
        </div>
      );
    },
  }),
];

export const StandingsCard: FC<StandingsCardProps> = ({
  division,
  standings,
}) => {
  // const listRef = useRef<HTMLDivElement | null>(null);

  const table = useReactTable({
    data: standings,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  // const { rows } = table.getRowModel();

  //The virtualizer needs to know the scrollable container element
  // const tableContainerRef = useRef<HTMLDivElement>(null);

  // const rowVirtualizer = useWindowVirtualizer({
  //   count: rows.length,
  //   estimateSize: () => 33, //estimate row height for accurate scrollbar dragging
  //   // getScrollElement: () => tableContainerRef.current,
  //   //measure dynamic row height, except in firefox because it measures table border height incorrectly
  //   measureElement:
  //     typeof window !== 'undefined' &&
  //     navigator.userAgent.indexOf('Firefox') === -1
  //       ? element => element?.getBoundingClientRect().height
  //       : undefined,
  //   overscan: 5,
  // });

  // const virtualizer = useWindowVirtualizer({
  //   count: standings.length,
  //   estimateSize: () => 77,
  //   overscan: 5,
  //   scrollMargin: listRef.current?.offsetTop ?? 0,
  // });

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} scope="col" className="px-4 py-3">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {table.getRowModel().rows.map(row => (
          <tr key={row.id} className="border-b dark:border-gray-700">
            {row.getVisibleCells().map(cell => {
              return (
                <td
                  key={cell.id}
                  className="px-4 py-3"
                  style={{
                    width: cell.column.getSize(),
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              );
            })}
          </tr>
        ))}
      </table>
    </div>
  );
};
{
  /* <div ref={listRef} className="List">
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
      </div> */
}
