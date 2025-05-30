import { useRef } from 'react';

import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { TableElement, TableScroller } from './components';
import { TableHead } from './components/TableHead';

import type { TableProps } from './types';

export function DataTable<T>({
  columns,
  data,
  tableId,
  ...rest
}: TableProps<T>) {
  const fixedHeaderScrollerRef = useRef<HTMLDivElement>(null);
  // const tableBodyScrollerRef = useRef<HTMLDivElement>(null);

  const table = useReactTable({
    data,
    columns,
    state: {},
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: import.meta.env.MODE === 'development',
    ...rest,
  });

  return (
    <div className="flex flex-col items-end">
      <div
        className="sticky top-0 z-10 w-full overflow-x-auto"
        aria-hidden="true"
      >
        <TableScroller scrollerRef={fixedHeaderScrollerRef}>
          <TableElement>
            <TableHead table={table} />
          </TableElement>
        </TableScroller>
      </div>

      <TableScroller>
        <TableElement>
          <TableHead table={table} hiddenHeader />
        </TableElement>
      </TableScroller>
    </div>
  );
}
