import { useMemo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { Archetypes } from 'components/Archetypes';
import { Card } from 'components/Card';
import { VirtualizedTable } from 'components/VirtualizedTable';

import { formatPlayerName } from 'helpers/formatPlayerName';
import { formatRecord } from 'helpers/formatRecord';
import { calculatePoints } from 'helpers/calculatePoints';
import { formatPlayerNameToUrl } from 'utils/parsePlayerUrl';

import {
  TournamentContextProvider,
  useTournamentContext,
} from 'providers/TournamentProvider';

import { RawTournamentOutlet } from 'pages/Tournament/TournamentOutlet';

import type { Standing } from 'types/standing';
import type { ColumnProps } from 'components/VirtualizedTable/types';

const tournamentId = '0000160';
const playerNames = [
  'Kenny Potter [NZ]',
  'Francis Vega [NZ]',
  'George Glover [NZ]',
  'Jared Lim [NZ]',
  'Paul Strk [AU]',
  'Jessica Downham [AU]',
];

const formatToPercentage = (value: number) => {
  return `${(value * 100).toFixed(2)}%`;
};

export const RawO3DropInner = () => {
  const { divisions } = useTournamentContext();
  const navigate = useNavigate();
  const [listRef, setListRef] = useState<HTMLElement | null>(null);

  const columns: ColumnProps<Standing>[] = useMemo(() => {
    return [
      {
        key: 'name',
        header: 'Player',
        render: row => (
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-4">
              <span className="font-extrabold">{row.placing}</span>
              <span className="font-medium">{formatPlayerName(row.name)}</span>
            </div>
            <span className="md:hidden">{formatRecord(row.record)}</span>
          </div>
        ),
      },
      {
        key: 'record',
        header: 'Record',
        size: 'small',
        render: row => <span>{formatRecord(row.record)}</span>,
        hiddenXs: true,
      },
      {
        key: 'points',
        header: 'Points',
        size: 'small',
        render: row => <span>{calculatePoints(row.record)}</span>,
        hiddenXs: true,
      },
      {
        key: 'resistances.opp',
        header: 'Opponent Resistances',
        render: row => <span>{formatToPercentage(row.resistances.opp)}</span>,
        hiddenXs: true,
      },
      {
        key: 'resistances.oppopp',
        header: "Opponent's Opponent Resistances",
        render: row => (
          <span>{formatToPercentage(row.resistances.oppopp)}</span>
        ),
        hiddenXs: true,
      },
      {
        key: 'action',
        header: '',
        size: 'medium',
        align: 'right',
        render: row => (
          <div className="flex items-center justify-end gap-4">
            {row.archetype && (
              <Archetypes size="small" archetype={row.archetype} />
            )}
          </div>
        ),
      },
    ];
  }, []);

  const handleRowClick = useCallback(
    (player: Standing) => {
      navigate(
        `/tournaments/${tournamentId}/masters/${formatPlayerNameToUrl(player.name)}`,
      );
    },
    [navigate],
  );

  const standings = useMemo(() => {
    const divisionData = divisions.find(d => d.division === 'masters');
    if (!divisionData) {
      throw new Error(`Division data for masters was not found`);
    }
    const mastersData = divisionData.data;
    const filteredData = mastersData.filter(player =>
      playerNames.some(name => player.name.includes(name)),
    );

    return filteredData;
  }, [divisions]);

  return (
    <div className="flex flex-col gap-4">
      <Heading level="3">0 3 Drop</Heading>
      <Paragraph>Special standings page to follow the 0-3 drop team</Paragraph>

      <section className="bg-gray-50 dark:bg-gray-900" ref={setListRef}>
        <Card>
          <VirtualizedTable<Standing>
            tableId={`0-3-drop-standings`}
            type="window"
            data={standings}
            columns={columns}
            containerRef={listRef}
            onRowClick={handleRowClick}
            estimateSize={48.5}
            noDataMessage={<>No players found that match this criteria</>}
          />
        </Card>
      </section>
    </div>
  );
};

export const O3Drop = () => {
  return (
    <TournamentContextProvider tournamentId={tournamentId}>
      <RawTournamentOutlet />
    </TournamentContextProvider>
  );
};
