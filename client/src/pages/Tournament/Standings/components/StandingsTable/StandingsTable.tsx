import { DataTable } from 'components/DataTable';
import { Archetypes } from 'components/Archetypes';

import { formatRecordToString } from 'helpers/formatRecord';
import { calculatePoints } from 'helpers/calculatePoints';
import { formatPlayerName } from 'helpers/formatPlayerName';

import { TextCell, NumberCell, CellWrapper } from 'components/DataTable/Cells';

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
    accessorKey: 'name',
    header: 'Player',
    cell: ({ row }) => {
      return (
        <CellWrapper>
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-4">
              <span className="font-extrabold">{row.original.placing}</span>
              <span className="font-medium">
                {formatPlayerName(row.original.name)}
              </span>
            </div>
          </div>
        </CellWrapper>
      );
    },
  },
  {
    accessorKey: 'record',
    header: 'Record',
    cell: ({ row }) => {
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
      return <NumberCell value={calculatePoints(row.original.record)} />;
    },
    meta: {
      columnWidth: '100px',
      align: 'right',
    },
  },
  {
    accessorKey: 'resistances.opp',
    header: 'Opp Resistances',
    cell: ({ row }) => {
      return (
        <TextCell value={formatToPercentage(row.original.resistances.opp)} />
      );
    },
  },
  {
    accessorKey: 'resistances.oppopp',
    header: 'Opp Opp Resistances',
    cell: ({ row }) => {
      return (
        <TextCell value={formatToPercentage(row.original.resistances.oppopp)} />
      );
    },
  },
  {
    accessorKey: 'archetype',
    header: 'Archetype',
    cell: ({ row }) => {
      if (!row.original.archetype) {
        return null;
      }
      return (
        <div className="flex items-center px-4">
          <Archetypes size="small" archetype={row.original.archetype} />
        </div>
      );
    },
    meta: {
      columnWidth: '150px',
    },
  },
];

export const StandingsTable: FC<StandingsTableProps> = ({ tableId, data }) => {
  return (
    <DataTable<Standing> tableId={tableId} columns={columns} data={data} />
  );
};
