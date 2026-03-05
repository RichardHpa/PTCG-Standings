import { useMemo, useCallback, useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Fuse from 'fuse.js';

import { Input } from 'components/Forms/Input';
import { Checkbox } from 'components/Forms/Checkbox';
import { Card } from 'components/Card';
import { SEO } from 'components/SEO';
import {
  CountrySelect,
  firstCountryOption,
} from 'components/Forms/CountrySelect';
import {
  ArchetypeSelect,
  firstArchetypeOption,
} from 'components/Forms/ArchetypeSelect';
import { StandingsTable } from './components/StandingsTable';

import { getCountryCode } from 'helpers/formatPlayerName';

import { getArchetypeCounts } from 'hooks/getArchetypeCounts';
import { useResponsive } from 'hooks/useResponsive';

import { useTournamentContext } from 'providers/TournamentProvider';
import { useSettings, showTableCompactKey } from 'providers/SettingsProvider';

import type { ChangeEvent } from 'react';
import type { Division } from 'types/divisions';

import type { StyledOptionProps } from 'components/Forms/Select/types';

export const Standings = () => {
  const { division = 'masters' } = useParams() as { division: Division };
  const [searchParams, setSearchParams] = useSearchParams();

  const { settings, saveSetting } = useSettings();

  const { divisions, tournament } = useTournamentContext();
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedCountry, setSelectedCountry] = useState(
    firstCountryOption.value,
  );
  const [selectedArchetype, setSelectedArchetype] = useState(
    firstArchetypeOption.value,
  );

  const responsive = useResponsive();
  const isMobile = responsive.md === false;

  useEffect(() => {
    setSearchQuery('');
    const country = searchParams.get('country');
    const deck = searchParams.get('deck');
    setSelectedCountry(country || firstCountryOption.value);
    setSelectedArchetype(deck || firstArchetypeOption.value);
  }, [division, searchParams]);

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

  const filteredByDecklist = useMemo(() => {
    const filteredByType =
      selectedCountry === firstCountryOption.value
        ? standings
        : standings.filter(player =>
            player.name.includes(`[${selectedCountry}]`),
          );

    if (selectedArchetype === firstArchetypeOption.value) return filteredByType;

    return filteredByType.filter(player => {
      if (player.archetype === undefined && selectedArchetype === '') {
        return true;
      }
      return player.archetype === selectedArchetype;
    });
  }, [standings, selectedCountry, selectedArchetype]);

  const standingsFuse = useMemo(
    () =>
      new Fuse(filteredByDecklist, {
        shouldSort: true,
        threshold: 0.1,
        location: 0,
        distance: 100,
        keys: ['name'],
        isCaseSensitive: false,
      }),
    [filteredByDecklist],
  );

  const filteredPlayers = useMemo(() => {
    if (!searchQuery) return filteredByDecklist;
    const result = standingsFuse.search(searchQuery);
    return result.map(item => item.item);
  }, [searchQuery, filteredByDecklist, standingsFuse]);

  const handleOnStyledCountryChange = useCallback(
    (e: StyledOptionProps) => {
      const value = e.value;
      setSearchParams(searchParams => {
        searchParams.set('country', value);
        return searchParams;
      });
      setSelectedCountry(value);
    },
    [setSearchParams],
  );

  const handleOnStyledArchetypeChange = useCallback(
    (e: StyledOptionProps) => {
      const value = e.value;
      setSearchParams(searchParams => {
        searchParams.set('deck', value);
        return searchParams;
      });
      setSelectedArchetype(value);
    },
    [setSearchParams],
  );

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

  const handleShowAllChange = useCallback(() => {
    saveSetting(showTableCompactKey, !settings.standingsTableCompact);
  }, [saveSetting, settings.standingsTableCompact]);

  return (
    <div className="flex flex-col gap-4">
      <SEO title={`${tournament.name} ${division} standing`} />

      <section className="bg-gray-50 dark:bg-gray-900">
        <Card>
          <div className="flex flex-col flex-wrap justify-start gap-4 p-4 md:flex-row">
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

            {isMobile && (
              <div>
                <Checkbox
                  name="showAll"
                  checked={settings.standingsTableCompact ? false : true}
                  label="Show all information"
                  onChange={handleShowAllChange}
                  value={settings.standingsTableCompact ? 'false' : 'true'}
                />
              </div>
            )}
          </div>

          <StandingsTable
            tableId={`${tournament.id}-${division}-standings`}
            data={filteredPlayers}
            division={division}
            tournamentId={tournament.id}
            tournamentStatus={tournament.tournamentStatus}
          />
        </Card>
      </section>
    </div>
  );
};
