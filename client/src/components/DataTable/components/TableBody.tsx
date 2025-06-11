import { useMemo } from 'react';
import clsx from 'clsx';
import { flexRender } from '@tanstack/react-table';
import { useWindowVirtualizer } from '@tanstack/react-virtual';

import { getGridColumns } from '../helpers/getGridColumns';

import type { VirtualItem } from '@tanstack/react-virtual';
import type { Table, Cell } from '@tanstack/react-table';

interface TableBodyCellProps<T> {
  cell: Cell<T, unknown>;
}

function TableBodyCell<T>({
  cell,
}: React.PropsWithChildren<TableBodyCellProps<T>>) {
  return (
    <td
      className={clsx(
        'flex',
        // `flex px-6 py-3`,
        // cell.column.columnDef.meta?.align === 'right' ? 'justify-end' : '',
        // cell.column.columnDef.meta?.align === 'center' ? 'justify-center' : '',
        // cell.column.columnDef.meta?.align === 'left' ? 'justify-start' : '',
        // 'overflow-hidden text-ellipsis whitespace-nowrap',
      )}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
}
interface TableBodyRowProps {
  rowRef: React.Ref<HTMLTableRowElement>;
  item: VirtualItem;
  scrollMargin: number;
  gridColumns: string;
  isLastRow?: boolean;
}

const TableBodyRow = ({
  children,
  rowRef,
  item,
  gridColumns,
  scrollMargin,
  isLastRow = false,
}: React.PropsWithChildren<TableBodyRowProps>) => {
  return (
    <tr
      data-index={item.index}
      ref={rowRef}
      style={
        {
          '--table-grid-columns': gridColumns,
          transform: `translateY(${item.start - scrollMargin}px)`,
        } as React.CSSProperties
      }
      className={clsx(
        'absolute grid w-full grid-cols-[--table-grid-columns]',
        !isLastRow && 'border-b dark:border-gray-700',
      )}
    >
      {children}
    </tr>
  );
};

interface TableBodyProps<T> {
  tableRef: React.RefObject<HTMLTableElement | null>;
  table: Table<T>;
  estimatedRowSize?: number;
  overscan?: number;
  noDataMessage?: string;
}

export function TableBody<T>({
  table,
  tableRef,
  estimatedRowSize = 40,
  overscan = 10,
  noDataMessage = 'No data available',
}: TableBodyProps<T>) {
  const { rows } = table.getRowModel();

  const virtualizer = useWindowVirtualizer({
    count: rows.length,
    estimateSize: () => estimatedRowSize, // estimate row height for accurate scrollbar dragging
    scrollMargin: tableRef.current?.offsetTop ?? 0,
    overscan,
  });

  const visibleColumns = table.getVisibleFlatColumns();
  const gridColumns = useMemo(
    () => getGridColumns(table),
    [table, visibleColumns],
  );

  if (rows.length === 0) {
    return (
      <tbody>
        <tr className="flex">
          <td
            colSpan={table.getAllLeafColumns().length}
            className={clsx(
              'flex w-full grid-cols-[--table-grid-columns]',
              'items-center justify-center py-8',
            )}
          >
            {noDataMessage}
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody
      style={{
        height: `${virtualizer.getTotalSize()}px`,
      }}
      className={clsx('relative grid')}
    >
      {virtualizer.getVirtualItems().map(item => {
        const row = rows[item.index];

        return (
          <TableBodyRow
            key={row.id}
            scrollMargin={virtualizer.options.scrollMargin}
            rowRef={node => virtualizer.measureElement(node)}
            item={item}
            gridColumns={gridColumns}
            isLastRow={item.index === rows.length - 1}
          >
            {row.getVisibleCells().map(cell => {
              return <TableBodyCell key={cell.id} cell={cell} />;
            })}
          </TableBodyRow>
        );
      })}
    </tbody>
  );
}
