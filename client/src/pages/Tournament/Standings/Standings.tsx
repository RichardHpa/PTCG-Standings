import { useMemo, useCallback, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Fuse from 'fuse.js';

import { Archetypes } from 'components/Archetypes';
import { Input } from 'components/Forms/Input';
import { Card } from 'components/Card';
import { PinPlayerButton } from 'components/PinPlayer/PinPlayerButton';
import { VirtualizedTable } from 'components/VirtualizedTable';

import { formatPlayerName } from 'helpers/formatPlayerName';
import { formatRecord } from 'helpers/formatRecord';
import { formatPlayerNameToUrl } from 'utils/parsePlayerUrl';
import { calculatePoints } from 'helpers/calculatePoints';
import { hasDecklist } from 'helpers/hasDecklist';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { ChangeEvent } from 'react';
import type { Division } from 'types/divisions';
import type { Standing } from 'types/standing';
import type { ColumnProps } from 'components/VirtualizedTable/types';

const formatToPercentage = (value: number) => {
  return `${(value * 100).toFixed(2)}%`;
};

export const Standings = () => {
  const navigate = useNavigate();
  const { division = 'masters' } = useParams() as { division: Division };
  const { divisions, tournament } = useTournamentContext();
  const [searchData, setSearchData] = useState<Standing[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const listRef = useRef<HTMLDivElement | null>(null);

  const columns: ColumnProps<Standing>[] = useMemo(() => {
    return [
      {
        key: 'name',
        header: 'Player',
        render: row => (
          <div className="flex items-center gap-4">
            <span className="font-extrabold">{row.placing}</span>
            <span className="font-medium">{formatPlayerName(row.name)}</span>
          </div>
        ),
      },
      {
        key: 'record',
        header: 'Record',
        size: 'small',
        render: row => <span>{formatRecord(row.record)}</span>,
      },
      {
        key: 'points',
        header: 'Points',
        size: 'small',
        render: row => <span>{calculatePoints(row.record)}</span>,
      },
      {
        key: 'resistances.opp',
        header: 'Opponent Resistances',
        render: row => <span>{formatToPercentage(row.resistances.opp)}</span>,
      },
      {
        key: 'resistances.oppopp',
        header: "Opponent's Opponent Resistances",
        render: row => (
          <span>{formatToPercentage(row.resistances.oppopp)}</span>
        ),
      },
      {
        key: 'action',
        header: '',
        size: 'medium',
        align: 'right',
        render: row => (
          <div className="flex items-center justify-end gap-4">
            {hasDecklist(row.decklist) && (
              <Archetypes decklist={row.decklist} size="small" />
            )}
            <PinPlayerButton
              player={row}
              division={division}
              tournamentId={tournament.id}
            />
          </div>
        ),
      },
    ];
  }, [division, tournament.id]);

  useEffect(() => {
    setSearchQuery('');
  }, [division, divisions]);

  const standings = useMemo(() => {
    const divisionData = divisions.find(d => d.division === division)!;
    setSearchData(divisionData.data);
    return divisionData.data;
  }, [division, divisions]);

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);
      if (!query) {
        setSearchData(standings);
        return;
      }
      const fuse = new Fuse(standings, {
        shouldSort: true,
        threshold: 0.1,
        location: 0,
        distance: 100,
        keys: ['name'],
      });
      const result = fuse.search(query);
      const finalResult: Standing[] = [];
      if (result.length) {
        result.forEach(item => {
          finalResult.push(item.item);
        });
        setSearchData(finalResult);
      } else {
        setSearchData([]);
      }
    },
    [standings],
  );

  const handleRowClick = useCallback(
    (player: Standing) => {
      navigate(
        `/tournaments/${tournament.id}/${division}/${formatPlayerNameToUrl(player.name)}`,
      );
    },
    [division, navigate, tournament.id],
  );

  return (
    <div className="flex flex-col gap-4">
      <section className="bg-gray-50 dark:bg-gray-900" ref={listRef}>
        <Card>
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <Input
                name="search"
                label="Search players"
                placeholder="Search players"
                hideLabel
                onChange={handleSearch}
                icon={<MagnifyingGlassIcon />}
                value={searchQuery}
              />
            </div>
          </div>

          <VirtualizedTable<Standing>
            type="window"
            data={searchData}
            columns={columns}
            containerRef={listRef}
            onRowClick={handleRowClick}
            estimateSize={48.5}
            noDataMessage={
              <>
                No players found with the name <strong>{searchQuery}</strong>
              </>
            }
          />
        </Card>
      </section>
    </div>
  );
};
