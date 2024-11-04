import clsx from 'clsx';
import React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table';

import { tw } from 'utils/tailwindClassName';
import { Heading } from 'components/Heading';

import { useVirtualizer } from '@tanstack/react-virtual';

import { makeData, Person } from './makeData';

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 60,
  },
  {
    accessorKey: 'firstName',
    cell: info => info.getValue(),
  },
  {
    accessorFn: row => row.lastName,
    id: 'lastName',
    cell: info => info.getValue(),
    header: () => <span>Last Name</span>,
  },
  {
    accessorKey: 'age',
    header: () => 'Age',
  },
  {
    accessorKey: 'visits',
    header: () => <span>Visits</span>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'progress',
    header: 'Profile Progress',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
    cell: info => info.getValue<Date>().toLocaleString(),
  },
];

const tableClasses = tw`w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right`;

const theadClasses = tw`bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400`;
const thtrClasses = tw`border-b-2 border-gray-600 last-of-type:border-b-0`;
const thClasses = tw`border-r-2 border-gray-600 px-6 py-3 last-of-type:border-r-0`;

const tbodytrClasses = tw`border-b bg-white dark:border-gray-700 dark:bg-gray-800`;
const tbodytdClasses = tw`px-6 py-4`;

const FullWidthTest = ({ data }: { data: Person[] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      className="container block max-w-full overflow-y-auto overflow-x-scroll p-2"
      style={{
        // overflow: 'auto', //our scrollable table container
        height: '400px', //should be a fixed height
      }}
    >
      <table className={clsx(tableClasses)}>
        <thead className={clsx(theadClasses)}>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className={clsx(thtrClasses)}>
              {headerGroup.headers.map(header => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className={clsx(thClasses)}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => {
            return (
              <tr key={row.id} className={clsx(tbodytrClasses)}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id} className={clsx(tbodytdClasses)}>
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
};

const BaseVirtualizedTest = ({ data }: { data: Person[] }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // debugTable: true,
  });

  const { rows } = table.getRowModel();

  //The virtualizer needs to know the scrollable container element
  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 33, //estimate row height for accurate scrollbar dragging
    getScrollElement: () => tableContainerRef.current,
    //measure dynamic row height, except in firefox because it measures table border height incorrectly
    measureElement:
      typeof window !== 'undefined' &&
      navigator.userAgent.indexOf('Firefox') === -1
        ? element => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  });

  return (
    <div
      className="container block max-w-full overflow-y-auto overflow-x-scroll p-2"
      ref={tableContainerRef}
      style={{
        // overflow: 'auto', //our scrollable table container
        height: '400px', //should be a fixed height
      }}
    >
      <table style={{ display: 'grid' }} className={clsx(tableClasses)}>
        <thead
          className={clsx(theadClasses)}
          style={{
            display: 'grid',
          }}
        >
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} style={{ display: 'flex', width: '100%' }}>
              {headerGroup.headers.map(header => {
                return (
                  <th
                    className={clsx(thClasses)}
                    key={header.id}
                    style={{
                      display: 'flex',
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
        <tbody
          style={{
            display: 'grid',
            height: `${rowVirtualizer.getTotalSize()}px`, //tells scrollbar how big the table is
            position: 'relative', //needed for absolute positioning of rows
          }}
        >
          {rowVirtualizer.getVirtualItems().map(virtualRow => {
            const row = rows[virtualRow.index] as Row<Person>;
            return (
              <tr
                className={clsx(tbodytrClasses)}
                data-index={virtualRow.index} //needed for dynamic row height measurement
                ref={node => rowVirtualizer.measureElement(node)} //measure dynamic row height
                key={row.id}
                style={{
                  display: 'flex',
                  position: 'absolute',
                  transform: `translateY(${virtualRow.start}px)`, //this should always be a `style` as it changes on scroll
                  width: '100%',
                }}
              >
                {row.getVisibleCells().map(cell => {
                  return (
                    <td
                      className={clsx(tbodytdClasses)}
                      key={cell.id}
                      style={{
                        display: 'flex',
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
};

export const Test = () => {
  const [data, _setData] = React.useState(() => makeData(50));

  return (
    <div className="flex flex-col gap-4">
      <div>
        <Heading>Testing Table</Heading>
      </div>

      <FullWidthTest data={data} />
      {/* <BaseVirtualizedTest data={data} /> */}
    </div>
  );
};
