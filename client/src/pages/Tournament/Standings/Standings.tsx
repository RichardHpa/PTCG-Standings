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
import { StyledSelect } from 'components/Forms/Select';

import { formatPlayerName, getCountryCode } from 'helpers/formatPlayerName';
import { formatRecord } from 'helpers/formatRecord';
import { formatPlayerNameToUrl } from 'utils/parsePlayerUrl';
import { calculatePoints } from 'helpers/calculatePoints';
import { hasDecklist } from 'helpers/hasDecklist';
import { getCountryFromCode } from 'helpers/getCountryFromCode';
import { getCountryFlag } from 'helpers/getCountryFlag';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { ChangeEvent } from 'react';
import type { Division } from 'types/divisions';
import type { Standing } from 'types/standing';
import type { ColumnProps } from 'components/VirtualizedTable/types';
import type { StyledOptionProps } from 'components/Forms/Select/types';

const formatToPercentage = (value: number) => {
  return `${(value * 100).toFixed(2)}%`;
};

const firstOption: StyledOptionProps = {
  value: 'all',
  label: 'All countries',
  render: <>All countries</>,
};

export const Standings = () => {
  const navigate = useNavigate();
  const { division = 'masters' } = useParams() as { division: Division };
  const { divisions, tournament } = useTournamentContext();
  const [searchQuery, setSearchQuery] = useState('');
  const listRef = useRef<HTMLDivElement | null>(null);
  const [selectedCountry, setSelectedCountry] = useState(firstOption.value);

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
    setSelectedCountry(firstOption.value);
  }, [division, divisions]);

  const standings = useMemo(() => {
    const divisionData = divisions.find(d => d.division === division);
    if (!divisionData) {
      throw new Error(`Division data for ${division} was not found`);
    }
    return divisionData.data;
  }, [division, divisions]);

  const styledOptions: StyledOptionProps[] = useMemo(() => {
    const countries = new Set<string>();
    standings.forEach(player => {
      const countryCode = getCountryCode(player.name);
      if (countryCode) {
        countries.add(countryCode);
      }
    });
    const options: StyledOptionProps[] = [firstOption];
    countries.forEach(country => {
      options.push({
        label: getCountryFromCode(country.toUpperCase()),
        value: country,
        render: (
          <>
            <div className="flex items-center gap-2">
              <span>{getCountryFlag(country.toUpperCase())}</span>
              <span>{getCountryFromCode(country.toUpperCase())}</span>
            </div>
          </>
        ),
      });
    });
    return options;
  }, [standings]);

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

  const filteredTournaments = useMemo(() => {
    if (!searchQuery && selectedCountry === firstOption.value) return standings;

    const filteredByType =
      selectedCountry === firstOption.value
        ? standings
        : standings.filter(player =>
            player.name.includes(`[${selectedCountry}]`),
          );

    if (!searchQuery) return filteredByType;

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
  }, [searchQuery, selectedCountry, standings]);

  const handleOnStyledCountryChange = useCallback((e: StyledOptionProps) => {
    const value = e.value;
    setSelectedCountry(value);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <section className="bg-gray-50 dark:bg-gray-900" ref={listRef}>
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
              <StyledSelect
                name="country"
                label="Country"
                hideLabel
                options={styledOptions}
                onChange={handleOnStyledCountryChange}
                value={selectedCountry}
              />
            </div>
          </div>

          <VirtualizedTable<Standing>
            type="window"
            data={filteredTournaments}
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
