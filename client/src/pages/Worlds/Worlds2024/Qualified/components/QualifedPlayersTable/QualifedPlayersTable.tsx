import { useMemo } from 'react';
import { DataTable } from 'components/DataTable';
import {
  TextCell,
  NumberCell,
  CellWrapper,
  BlankCell,
} from 'components/DataTable/Cells';
import { Archetypes } from 'components/Archetypes';

import { getCountryFlag } from 'helpers/getCountryFlag';
import { formatRecordToString } from 'helpers/formatRecord';
import { calculatePoints } from 'helpers/calculatePoints';
import { formatPlayerNameToUrl } from 'utils/parsePlayerUrl';

import type { FC } from 'react';
// maybe move these to be exported from DataTable types
import type { ColumnDef } from '@tanstack/react-table';
import type { QualifedPlayer, QualifedPlayersTableProps } from './types';

const buildPokeDataName = (player: QualifedPlayer) => {
  const { FirstName, LastName, Country, AgeDivision } = player;
  const pokeDataName =
    AgeDivision === 'masters'
      ? `${FirstName} ${LastName} [${Country}]`
      : `${FirstName} ${LastName[0]}. [${Country}]`;
  return pokeDataName;
};

export const QualifedPlayersTable: FC<QualifedPlayersTableProps> = ({
  data,
  tournamentId,
  division,
}) => {
  const columns: ColumnDef<QualifedPlayer>[] = useMemo(() => {
    return [
      {
        accessorKey: 'name',
        id: 'name',
        header: 'Player',
        cell: ({ row }) => (
          <CellWrapper>
            <div className="flex items-center gap-4 font-medium">
              {getCountryFlag(row.original.Country)} {row.original.FirstName}{' '}
              {row.original.LastName}
            </div>
          </CellWrapper>
        ),
        meta: {
          link: row => {
            if (!row.original.competed) return;
            const name = buildPokeDataName(row.original);
            return `/tournaments/${tournamentId}/${division}/${formatPlayerNameToUrl(name)}`;
          },
        },
      },
      {
        accessorKey: 'record',
        id: 'standing.record',
        header: 'Record',
        meta: {
          columnWidth: '100px',
          link: row => {
            if (!row.original.competed) return;
            const name = buildPokeDataName(row.original);
            return `/tournaments/${tournamentId}/${division}/${formatPlayerNameToUrl(name)}`;
          },
        },
        cell: ({ row }) =>
          row.original.standing ? (
            <TextCell
              value={formatRecordToString(row.original.standing.record)}
            />
          ) : (
            <BlankCell />
          ),
      },
      {
        accessorKey: 'points',
        id: 'points',
        header: 'Points',
        meta: {
          columnWidth: '100px',
          link: row => {
            if (!row.original.competed) return;
            const name = buildPokeDataName(row.original);
            return `/tournaments/${tournamentId}/${division}/${formatPlayerNameToUrl(name)}`;
          },
        },
        cell: ({ row }) =>
          row.original.standing ? (
            <NumberCell
              value={calculatePoints(row.original.standing.record)}
              align="left"
            />
          ) : (
            <BlankCell />
          ),
      },
      {
        accessorKey: 'action',
        id: 'action',
        header: 'Competed',
        meta: {
          columnWidth: '100px',
          link: row => {
            if (!row.original.competed) return;
            const name = buildPokeDataName(row.original);
            return `/tournaments/${tournamentId}/${division}/${formatPlayerNameToUrl(name)}`;
          },
        },
        cell: ({ row }) => (
          <TextCell value={row.original.competed ? 'Yes' : 'No'} />
        ),
      },
      {
        accessorKey: 'archetype',
        id: 'archetype',
        header: 'Archetype',
        meta: {
          columnWidth: '100px',
          link: row => {
            if (!row.original.competed) return;
            const name = buildPokeDataName(row.original);
            if (row.original.standing && row.original.standing.archetype) {
              return `/tournaments/${tournamentId}/${division}/${formatPlayerNameToUrl(name)}/decklist`;
            }
            return `/tournaments/${tournamentId}/${division}/${formatPlayerNameToUrl(name)}`;
          },
        },
        cell: ({ row }) =>
          row.original.standing && row.original.standing.archetype ? (
            <div className="flex items-center px-4">
              <Archetypes
                size="small"
                archetype={row.original.standing.archetype}
              />
            </div>
          ) : (
            <BlankCell />
          ),
      },
    ];
  }, [division, tournamentId]);

  return (
    <DataTable<QualifedPlayer>
      tableId="qualified-players"
      data={data}
      columns={columns}
      estimatedRowSize={48.5}
      overscan={10}
      noDataMessage="No players found that match this criteria"
    />
  );
};
