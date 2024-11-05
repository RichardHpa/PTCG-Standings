import { useRef } from 'react';
import clsx from 'clsx';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useWindowVirtualizer } from '@tanstack/react-virtual';

import { virtualizedTableClasses } from './virtualizedTableClasses';

import { VirtualizedTableProps } from './types';

export function VirtualizedTable<T>({
  data,
  columns,
  overscan = 10,
  showHeader = true,
}: VirtualizedTableProps<T>) {
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { rows } = table.getRowModel();

  const rowVirtualizer = useWindowVirtualizer({
    count: rows.length,
    estimateSize: () => 33, //estimate row height for accurate scrollbar dragging
    scrollMargin: tableContainerRef.current?.offsetTop ?? 0,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== 'undefined' &&
      navigator.userAgent.indexOf('Firefox') === -1
        ? element => element?.getBoundingClientRect().height
        : undefined,
    overscan,
  });

  return (
    <div ref={tableContainerRef} className="overflow-x-auto">
      <table className={clsx(virtualizedTableClasses.tableClasses)}>
        {showHeader && (
          <thead className={clsx(virtualizedTableClasses.theadClasses)}>
            {table.getHeaderGroups().map(headerGroup => (
              <tr
                key={headerGroup.id}
                style={{ display: 'flex', width: '100%' }}
                className={clsx(virtualizedTableClasses.thtrClasses)}
              >
                {headerGroup.headers.map(header => {
                  return (
                    <th
                      key={header.id}
                      className={clsx(
                        virtualizedTableClasses.thClasses,
                        'flex',
                      )}
                      style={{
                        width: header.getSize(),
                      }}
                    >
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
        )}

        <tbody
          className="relative grid"
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`, //tells scrollbar how big the table is
          }}
        >
          {rowVirtualizer.getVirtualItems().map(virtualRow => {
            const row = rows[virtualRow.index];
            return (
              <tr
                data-index={virtualRow.index} //needed for dynamic row height measurement
                ref={node => rowVirtualizer.measureElement(node)} //measure dynamic row height
                key={row.id}
                className={clsx(
                  virtualizedTableClasses.tbodytrClasses,
                  'top-0, left-0, absolute w-full',
                )}
                style={{
                  transform: `translateY(${
                    virtualRow.start - rowVirtualizer.options.scrollMargin
                  }px)`,
                }}
              >
                {row.getVisibleCells().map(cell => {
                  return (
                    <td
                      key={cell.id}
                      className={clsx(virtualizedTableClasses.tbodytdClasses)}
                      style={{
                        width: cell.column.getSize(),
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
