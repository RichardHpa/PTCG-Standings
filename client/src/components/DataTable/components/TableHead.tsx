import { useMemo } from 'react';

import { flexRender } from '@tanstack/react-table';
import clsx from 'clsx';

import { getGridColumns } from '../helpers/getGridColumns';

import type { Header, Table } from '@tanstack/react-table';

interface TableHeadCellProps<T> {
  header: Header<T, unknown>;
}

function TableHeadCell<T>({
  header,
}: React.PropsWithChildren<TableHeadCellProps<T>>) {
  return (
    <th className="flex">
      <div
        // role="button"
        className={clsx(
          'flex w-full whitespace-nowrap px-4 py-3',
          // header.column.getCanSort() ? 'cursor-pointer select-none' : '',
          header.column.columnDef.meta?.align === 'right' ? 'justify-end' : '',
          header.column.columnDef.meta?.align === 'center'
            ? 'justify-center'
            : '',
          header.column.columnDef.meta?.align === 'left' ? 'justify-start' : '',
        )}
        // onClick={header.column.getToggleSortingHandler()}
        // onKeyDown={e => {
        //   if (e.key === 'Enter' && header.column.getCanSort()) {
        //     return header.column.toggleSorting();
        //   }
        // }}
        // tabIndex={header.column.getCanSort() ? 0 : undefined}
      >
        <span>
          {flexRender(header.column.columnDef.header, header.getContext())}
        </span>
      </div>
    </th>
  );
}

interface TableHeadRowProps {
  gridColumns: string;
}

const TableHeadRow = ({
  children,
  gridColumns,
}: React.PropsWithChildren<TableHeadRowProps>) => {
  return (
    <tr
      style={{ '--table-grid-columns': gridColumns }}
      className={`grid w-full grid-cols-[--table-grid-columns]`}
    >
      {children}
    </tr>
  );
};

interface TableHeadProps<TData> {
  table: Table<TData>;
  hiddenHeader?: boolean;
}

export function TableHead<T>({
  table,
  hiddenHeader = false,
}: TableHeadProps<T>) {
  const visibleColumns = table.getVisibleFlatColumns();
  const gridColumns = useMemo(
    () => getGridColumns(visibleColumns),
    [visibleColumns],
  );

  return (
    <thead
      className={clsx(
        'grid',
        'bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400',
        hiddenHeader ? 'collapse h-0' : '',
      )}
    >
      {table.getHeaderGroups().map(headerGroup => {
        return (
          <TableHeadRow key={headerGroup.id} gridColumns={gridColumns}>
            {headerGroup.headers.map(header => (
              <TableHeadCell<T> key={header.id} header={header} />
            ))}
          </TableHeadRow>
        );
      })}
    </thead>
  );
}
