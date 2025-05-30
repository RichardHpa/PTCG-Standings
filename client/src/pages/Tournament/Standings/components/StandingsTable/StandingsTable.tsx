import { DataTable } from 'components/DataTable';

import type { StandingsTableProps } from './types';
import type { Standing } from 'types/standing';
import type { FC } from 'react';

// maybe move these to be exported from DataTable types
import type { ColumnDef } from '@tanstack/react-table';

const columns: ColumnDef<Standing>[] = [
  {
    accessorKey: 'name',
    header: 'Player',
    cell: () => {
      return <>test</>;
    },
  },
  {
    accessorKey: 'record',
    header: 'Record',
    cell: ({ row }) => {
      return <span>{row.getValue('record')}</span>;
    },
  },
];

export const StandingsTable: FC<StandingsTableProps> = ({ tableId, data }) => {
  return (
    <DataTable<Standing> tableId={tableId} columns={columns} data={data} />
  );
};
