import { DataTable } from 'components/DataTable';

import { formatRecordToString } from 'helpers/formatRecord';
import { calculatePoints } from 'helpers/calculatePoints';

import { TextCell, NumberCell } from 'components/DataTable/Cells';

import type { StandingsTableProps } from './types';
import type { Standing } from 'types/standing';
import type { FC } from 'react';

// maybe move these to be exported from DataTable types
import type { ColumnDef } from '@tanstack/react-table';

// TODO: move to a shared utils/helpers file
const formatToPercentage = (value: number) => {
  return `${(value * 100).toFixed(2)}%`;
};

const columns: ColumnDef<Standing>[] = [
  {
    accessorKey: 'placing',
    header: 'Placing',
    cell: ({ row }) => {
      // return row.original.placing;
      return <NumberCell value={row.original.placing} />;
    },
    meta: {
      columnWidth: '80px',
    },
  },
  {
    accessorKey: 'name',
    header: 'Player',
    cell: ({ row }) => {
      // return `${row.original.name} `;
      return <TextCell value={row.original.name} />;
    },
  },
  {
    accessorKey: 'record',
    header: 'Record',
    cell: ({ row }) => {
      // return formatRecordToString(row.original.record);
      return <TextCell value={formatRecordToString(row.original.record)} />;
    },
    meta: {
      columnWidth: '100px',
    },
  },
  {
    accessorKey: 'points',
    header: 'Points',
    cell: ({ row }) => {
      // return calculatePoints(row.original.record);
      return <NumberCell value={calculatePoints(row.original.record)} />;
    },
    meta: {
      columnWidth: '100px',
    },
  },
  {
    accessorKey: 'resistances.opp',
    header: 'Opp Resistances',
    cell: ({ row }) => {
      // return formatToPercentage(row.original.resistances.opp);
      return (
        <TextCell value={formatToPercentage(row.original.resistances.opp)} />
      );
    },
  },
  {
    accessorKey: 'resistances.oppopp',
    header: 'Opp Opp Resistances',
    cell: ({ row }) => {
      // return formatToPercentage(row.original.resistances.oppopp);
      return (
        <TextCell value={formatToPercentage(row.original.resistances.oppopp)} />
      );
    },
  },
];

export const StandingsTable: FC<StandingsTableProps> = ({ tableId, data }) => {
  return (
    <DataTable<Standing> tableId={tableId} columns={columns} data={data} />
  );
};
