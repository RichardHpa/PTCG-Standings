import { useMemo } from 'react';

import { flexRender } from '@tanstack/react-table';
import clsx from 'clsx';

import { getGridColumns } from '../helpers/getGridColumns';

import type { Header, Table } from '@tanstack/react-table';

interface TableFooterCellProps<T> {
  footer: Header<T, unknown>;
}

function TableFooterCell<T>({
  footer,
}: React.PropsWithChildren<TableFooterCellProps<T>>) {
  return (
    <th className="flex">
      <div
        className={clsx(
          'flex w-full whitespace-nowrap px-4 py-3',
          footer.column.columnDef.meta?.align === 'right' ? 'justify-end' : '',
          footer.column.columnDef.meta?.align === 'center'
            ? 'justify-center'
            : '',
          footer.column.columnDef.meta?.align === 'left' ? 'justify-start' : '',
        )}
      >
        <span>
          {flexRender(footer.column.columnDef.footer, footer.getContext())}
        </span>
      </div>
    </th>
  );
}

interface TableFooterRowProps {
  gridColumns: string;
}

const TableFooterRow = ({
  children,
  gridColumns,
}: React.PropsWithChildren<TableFooterRowProps>) => {
  return (
    <tr
      style={{ '--table-grid-columns': gridColumns }}
      className={`grid w-full grid-cols-[--table-grid-columns]`}
    >
      {children}
    </tr>
  );
};

interface TableFooterProps<TData> {
  table: Table<TData>;
}

export function TableFooter<T>({ table }: TableFooterProps<T>) {
  const visibleColumns = table.getVisibleFlatColumns();
  const gridColumns = useMemo(
    () => getGridColumns(visibleColumns),
    [visibleColumns],
  );

  const footers = table
    .getFooterGroups()
    .map(group => group.headers.map(header => header.column.columnDef.footer))
    .flat()
    .filter(Boolean);

  if (footers.length === 0) return;

  return (
    <tfoot
      className={clsx(
        'grid',
        'bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400',
      )}
    >
      {table.getFooterGroups().map(footerGroup => {
        return (
          <TableFooterRow key={footerGroup.id} gridColumns={gridColumns}>
            {footerGroup.headers.map(footer => (
              <TableFooterCell<T> key={footer.id} footer={footer} />
            ))}
          </TableFooterRow>
        );
      })}
    </tfoot>
  );
}
