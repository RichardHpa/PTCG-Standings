import { useCallback, useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Fuse from 'fuse.js';

import { useTournamentContext } from 'providers/TournamentProvider';

import qualifiedPlayers from '../data/qualifiedPlayers.json';

import { Card } from 'components/Card';
import { Paragraph } from 'components/Paragraph';
import { Input } from 'components/Forms/Input';

import { SEO } from 'components/SEO';
import {
  CountrySelect,
  firstCountryOption,
} from 'components/Forms/CountrySelect';

import { QualifedPlayersTable } from './components/QualifedPlayersTable';

import type { Division } from 'types/divisions';
import type { Standing } from 'types/standing';
import type { ChangeEvent } from 'react';
import type { StyledOptionProps } from 'components/Forms/Select/types';
import type { QualifedPlayer } from './components/QualifedPlayersTable/types';

const buildPokeDataName = (player: QualifedPlayer) => {
  const { FirstName, LastName, Country, AgeDivision } = player;
  const pokeDataName =
    AgeDivision === 'masters'
      ? `${FirstName} ${LastName} [${Country}]`
      : `${FirstName} ${LastName[0]}. [${Country}]`;
  return pokeDataName;
};

const useGetPlayers = () => {
  const { divisions } = useTournamentContext();
  const divisionMap = divisions.reduce(
    (acc, division) => {
      acc[division.division] = division.data;
      return acc;
    },
    {} as Record<string, Standing[]>,
  );

  const allPlayers = qualifiedPlayers as QualifedPlayer[];
  const players = allPlayers.reduce(
    (acc, player) => {
      const lowerDivision = player.AgeDivision.toLowerCase();
      player.AgeDivision = lowerDivision;
      player.FullName = `${player.FirstName} ${player.LastName}`;
      const pokeDataPlayers = divisionMap[lowerDivision];
      // check to see if that player did compete
      const pokeDataName = buildPokeDataName(player);

      const pokeDataStandings = pokeDataPlayers.find(
        pokeDataPlayer => pokeDataPlayer.name === pokeDataName,
      );

      player.competed = !!pokeDataStandings;
      player.standing = pokeDataStandings;

      if (!acc[player.AgeDivision]) {
        acc[player.AgeDivision] = [];
      }
      acc[player.AgeDivision].push(player);

      return acc;
    },
    {} as Record<string, QualifedPlayer[]>,
  );

  return players;
};

export const Qualified = () => {
  const { tournament } = useTournamentContext();
  const { division = 'masters' } = useParams() as { division: Division };
  const players = useGetPlayers();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(
    firstCountryOption.value,
  );

  useEffect(() => {
    setSearchQuery('');
    setSelectedCountry(firstCountryOption.value);
  }, [division]);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  }, []);

  const filteredPlayers = useMemo(() => {
    const standings = players[division];
    if (!searchQuery && selectedCountry === firstCountryOption.value)
      return standings;

    const filteredByType =
      selectedCountry === firstCountryOption.value
        ? standings
        : standings.filter(player => player.Country === selectedCountry);

    if (!searchQuery) return filteredByType;

    const fuse = new Fuse(filteredByType, {
      shouldSort: true,
      threshold: 0.1,
      location: 0,
      distance: 100,
      keys: ['FullName'],
      isCaseSensitive: false,
    });

    const result = fuse.search(searchQuery);
    const finalResult: QualifedPlayer[] = [];
    if (result.length) {
      result.forEach(item => {
        finalResult.push(item.item);
      });
      return finalResult;
    }

    return [];
  }, [division, players, searchQuery, selectedCountry]);

  const handleOnStyledCountryChange = useCallback((e: StyledOptionProps) => {
    const value = e.value;
    setSelectedCountry(value);
  }, []);

  const countries = useMemo(() => {
    const countriesSet = new Set<string>();
    players[division].forEach(player => {
      const countryCode = player.Country;
      if (countryCode) {
        countriesSet.add(countryCode);
      }
    });
    return Array.from(countriesSet);
  }, [division, players]);

  return (
    <div className="flex flex-col gap-4">
      <SEO title={`Worlds 2024 qualified ${division} players`} />

      <Paragraph>
        Congratulations also to those who managed to qualify for the 2024 World
        Championships.
      </Paragraph>

      <section className="bg-gray-50 dark:bg-gray-900">
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
          </div>

          <QualifedPlayersTable
            data={filteredPlayers}
            tournamentId={tournament.id}
            division={division}
          />
        </Card>
      </section>
    </div>
  );
};
