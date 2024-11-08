import { useMemo, useCallback, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Fuse from 'fuse.js';
import { useWindowVirtualizer } from '@tanstack/react-virtual';

import { tw } from 'utils/tailwindClassName';
import { PinIcon } from 'icons/PinIcon';
import { Archetypes } from 'components/Archetypes';
import { Input } from 'components/Forms/Input';
import { Card } from 'components/Card';

import { formatPlayerName } from 'helpers/formatPlayerName';
import { formatRecord } from 'helpers/formatRecord';
import { formatPlayerNameToUrl } from 'utils/parsePlayerUrl';
import { calculatePoints } from 'helpers/calculatePoints';
import { hasDecklist } from 'helpers/hasDecklist';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { ChangeEvent } from 'react';
import type { Division } from 'types/divisions';
import type { Standing } from 'types/standing';

interface Accessor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- this actually needs to be any
  (path: string, object: Record<string, any>): any;
}

const access: Accessor = (path, object) => {
  return path.split('.').reduce((o, i) => o[i], object);
};

const formatToPercentage = (value: number) => {
  return `${(value * 100).toFixed(2)}%`;
};

const columns = [
  {
    accessorKey: 'name',
    header: 'Player',
    render: (row: Standing) => (
      <div className="flex items-center gap-4">
        <span className="font-extrabold">{row.placing}</span>
        <span className="font-medium">{formatPlayerName(row.name)}</span>
      </div>
    ),
  },
  {
    accessorKey: 'record',
    header: 'Record',
    size: 'small',
    render: (row: Standing) => <span>{formatRecord(row.record)}</span>,
  },
  {
    accessorKey: 'points',
    header: 'Points',
    size: 'small',
    render: (row: Standing) => <span>{calculatePoints(row.record)}</span>,
  },
  {
    accessorKey: 'resistances.opp',
    header: 'Opponent Resistances',
    render: (row: Standing) => (
      <span>{formatToPercentage(row.resistances.opp)}</span>
    ),
  },
  {
    accessorKey: 'resistances.oppopp',
    header: "Opponent's Opponent Resistances",
    render: (row: Standing) => (
      <span>{formatToPercentage(row.resistances.oppopp)}</span>
    ),
  },
  {
    accessorKey: 'action',
    header: '',
    size: 'medium',
    align: 'right',
    render: (row: Standing) => (
      <div className="flex items-center justify-end gap-4">
        {hasDecklist(row.decklist) && (
          <Archetypes decklist={row.decklist} size="small" />
        )}
        <PinIcon className="h-4 w-4" />
      </div>
    ),
  },
];

export const Standings = () => {
  const navigate = useNavigate();
  const { division = 'masters' } = useParams() as { division: Division };
  const { divisions, tournament } = useTournamentContext();
  const [searchData, setSearchData] = useState<Standing[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  const listRef = useRef<HTMLDivElement | null>(null);

  const virtualizer = useWindowVirtualizer({
    count: searchData.length,
    estimateSize: () => 48.5,
    overscan: 5,
    scrollMargin: listRef.current?.offsetTop ?? 0,
    measureElement:
      typeof window !== 'undefined' &&
      navigator.userAgent.indexOf('Firefox') === -1
        ? element => element?.getBoundingClientRect().height
        : undefined,
  });

  const handleRowClick = useCallback(
    (player: string) => {
      navigate(
        `/tournaments/${tournament.id}/${division}/${formatPlayerNameToUrl(player)}`,
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

          {/* <StandingsCard division={division} standings={searchData} /> */}

          <div className="">
            <div
              className={tw`sticky top-14 z-10 w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right`}
            >
              <div
                className={tw`flex bg-gray-50 text-xs font-bold uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400`}
              >
                {columns.map(column => (
                  <div
                    key={column.accessorKey}
                    className={clsx(
                      'flex-1 border-gray-600 px-4 py-3',
                      column.size === 'small' && 'max-w-24',
                      column.size === 'medium' && 'max-w-32',
                      column.align === 'right' && 'justify-end',
                    )}
                  >
                    {column.header}
                  </div>
                ))}
              </div>
            </div>

            {searchData.length === 0 ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                No players found with the name <strong>{searchQuery}</strong>
              </div>
            ) : (
              <div
                style={{
                  height: `${virtualizer.getTotalSize()}px`,
                  width: '100%',
                  position: 'relative',
                }}
              >
                {virtualizer.getVirtualItems().map(item => {
                  const row = searchData[item.index];
                  return (
                    <div
                      data-index={item.index} //needed for dynamic row height measurement
                      ref={node => virtualizer.measureElement(node)}
                      onClick={() => handleRowClick(row.name)}
                      key={item.key}
                      className="flex cursor-pointer border-b hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        transform: `translateY(${
                          item.start - virtualizer.options.scrollMargin
                        }px)`,
                      }}
                    >
                      {columns.map(column => (
                        <div
                          key={column.accessorKey}
                          className={clsx(
                            'flex flex-1 items-center px-4 py-3',
                            column.size === 'small' && 'max-w-24',
                            column.size === 'medium' && 'max-w-32',
                            column.align === 'right' && 'justify-end',
                          )}
                        >
                          {column.render
                            ? column.render(row)
                            : access(column.accessorKey, row)}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Card>
      </section>
      {/* <Card>
        <div className="flex gap-4 p-4">
          <div className="sm:w-48 md:w-64 lg:w-96">
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
      </Card> */}
      {/* <StandingsCard division={division} standings={searchData} /> */}
    </div>
  );
};
