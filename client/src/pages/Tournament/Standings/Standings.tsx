import { useMemo, useCallback, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Fuse from 'fuse.js';

import { Archetypes } from 'components/Archetypes';
import { Input } from 'components/Forms/Input';
import { Card } from 'components/Card';
import { PinPlayerButton } from 'components/PinPlayer/PinPlayerButton';
import { VirtualizedTable } from 'components/VirtualizedTable';
import { SEO } from 'components/SEO';
import {
  CountrySelect,
  firstCountryOption,
} from 'components/Forms/CountrySelect';
import {
  ArchetypeSelect,
  firstArchetypeOption,
} from 'components/Forms/ArchetypeSelect';

import { formatPlayerName, getCountryCode } from 'helpers/formatPlayerName';
import { formatRecord } from 'helpers/formatRecord';
import { formatPlayerNameToUrl } from 'utils/parsePlayerUrl';
import { calculatePoints } from 'helpers/calculatePoints';

import { getArchetypeCounts } from 'hooks/getArchetypeCounts';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { ChangeEvent } from 'react';
import type { Division } from 'types/divisions';
import type { Standing } from 'types/standing';
import type { ColumnProps } from 'components/VirtualizedTable/types';
import type { StyledOptionProps } from 'components/Forms/Select/types';

const formatToPercentage = (value: number) => {
  return `${(value * 100).toFixed(2)}%`;
};

export const Standings = () => {
  const navigate = useNavigate();
  const { division = 'masters' } = useParams() as { division: Division };
  const { divisions, tournament } = useTournamentContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [listRef, setListRef] = useState<HTMLElement | null>(null);
  const [selectedCountry, setSelectedCountry] = useState(
    firstCountryOption.value,
  );
  const [selectedArchetype, setSelectedArchetype] = useState(
    firstArchetypeOption.value,
  );

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
            {tournament.tournamentStatus === 'running' && (
              <PinPlayerButton
                player={row}
                division={division}
                tournamentId={tournament.id}
              />
            )}
          </div>
        ),
      },
    ];
  }, [division, tournament.id, tournament.tournamentStatus]);

  useEffect(() => {
    setSearchQuery('');
    setSelectedCountry(firstCountryOption.value);
  }, [division, divisions]);

  const standings = useMemo(() => {
    const divisionData = divisions.find(d => d.division === division);
    if (!divisionData) {
      throw new Error(`Division data for ${division} was not found`);
    }
    return divisionData.data;
  }, [division, divisions]);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  }, []);

  const handleRowClick = useCallback(
    (player: Standing) => {
      navigate(
        `/tournaments/${tournament.id}/${division}/${formatPlayerNameToUrl(player.name)}`,
      );
    },
    [division, navigate, tournament.id],
  );

  const filteredPlayers = useMemo(() => {
    if (
      !searchQuery &&
      selectedCountry === firstCountryOption.value &&
      selectedArchetype === firstArchetypeOption.value
    )
      return standings;

    const filteredByType =
      selectedCountry === firstCountryOption.value
        ? standings
        : standings.filter(player =>
            player.name.includes(`[${selectedCountry}]`),
          );

    const filteredByDecklist =
      selectedArchetype === firstArchetypeOption.value
        ? filteredByType
        : filteredByType.filter(player => {
            if (player.archetype === undefined && selectedArchetype === '') {
              return true;
            }

            return player.archetype === selectedArchetype;
          });

    if (!searchQuery) return filteredByDecklist;

    const fuse = new Fuse(filteredByType, {
      shouldSort: true,
      threshold: 0.1,
      location: 0,
      distance: 100,
      keys: ['name'],
      isCaseSensitive: false,
    });

    const result = fuse.search(searchQuery);
    const finalResult: Standing[] = [];
    if (result.length) {
      result.forEach(item => {
        finalResult.push(item.item);
      });
      return finalResult;
    }

    return [];
  }, [searchQuery, selectedArchetype, selectedCountry, standings]);

  const handleOnStyledCountryChange = useCallback((e: StyledOptionProps) => {
    const value = e.value;
    setSelectedCountry(value);
  }, []);

  const handleOnStyledArchetypeChange = useCallback((e: StyledOptionProps) => {
    const value = e.value;
    setSelectedArchetype(value);
  }, []);

  const countries = useMemo(() => {
    const countriesSet = new Set<string>();
    standings.forEach(player => {
      const countryCode = getCountryCode(player.name);
      if (countryCode) {
        countriesSet.add(countryCode);
      }
    });
    return Array.from(countriesSet);
  }, [standings]);

  const archetypes = useMemo(() => {
    const res = getArchetypeCounts({ standings });
    if (!res) return [];
    const arr = Object.keys(res.archetypes);

    arr.sort((a, b) => {
      if (a === 'unknown') return 1;
      if (b === 'unknown') return -1;
      return 0;
    });

    return arr;
  }, [standings]);

  return (
    <div className="flex flex-col gap-4">
      <SEO title={`${tournament.name} ${division} standing`} />

      <section className="bg-gray-50 dark:bg-gray-900" ref={setListRef}>
        <Card>
          <div className="flex flex-col items-center space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="w-full md:w-1/3">
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
            <div className="w-full md:w-1/4">
              <CountrySelect
                onChange={handleOnStyledCountryChange}
                value={selectedCountry}
                countries={countries}
              />
            </div>
            {archetypes.length > 0 && (
              <div className="w-full md:w-1/4">
                <ArchetypeSelect
                  archetypes={archetypes}
                  onChange={handleOnStyledArchetypeChange}
                  value={selectedArchetype}
                />
              </div>
            )}
          </div>

          <VirtualizedTable<Standing>
            tableId={`${tournament.id}-${division}-standings`}
            type="window"
            data={filteredPlayers}
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
