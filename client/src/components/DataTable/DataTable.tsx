import { useRef } from 'react';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { useSyncedScroll } from 'hooks/useSyncedScroll';

import {
  TableElement,
  TableHead,
  TableScroller,
  TableBody,
  TableFooter,
} from './components';

import type { TableProps } from './types';

export function DataTable<T>({
  columns,
  data,
  tableId,
  estimatedRowSize = 40,
  overscan = 10,
  globalScrollSync = false,
  ...rest
}: TableProps<T>) {
  const tableRef = useRef<HTMLTableElement>(null);
  const fixedHeaderScrollerRef = useRef<HTMLDivElement>(null);
  const tableBodyScrollerRef = useRef<HTMLDivElement>(null);

  useSyncedScroll(
    [fixedHeaderScrollerRef, tableBodyScrollerRef],
    globalScrollSync,
  );

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
        className="sticky top-14 z-10 w-full overflow-x-auto"
        aria-hidden="true"
      >
        <TableScroller scrollerRef={fixedHeaderScrollerRef}>
          <TableElement>
            <TableHead table={table} />
          </TableElement>
        </TableScroller>
      </div>

      <TableScroller scrollerRef={tableBodyScrollerRef}>
        <TableElement ref={tableRef}>
          <TableHead table={table} hiddenHeader />
          <TableBody
            table={table}
            tableRef={tableRef}
            estimatedRowSize={estimatedRowSize}
            overscan={overscan}
          />
          <TableFooter table={table} />
        </TableElement>
      </TableScroller>
    </div>
  );
}
