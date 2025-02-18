import { useState, useCallback, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Fuse from 'fuse.js';

import { Heading } from 'components/Heading';
import { LoadingPokeball } from 'components/LoadingPokeball';
import { TournamentsCard } from 'components/TournamentsCard';
import { Input } from 'components/Forms/Input';
import { Select } from 'components/Forms/Select';
import { Card } from 'components/Card';
import { VirtualizedTable } from 'components/VirtualizedTable';
import { TournamentLogo } from 'components/TournamentLogo';
import { SEO } from 'components/SEO';

import { AdditionalInfo } from 'components/TournamentsCard/components/AdditionalInfo';

import { useGetTournaments } from 'queries/useGetTournaments';

import { RUNNING, NOT_STARTED, CHECK_IN } from 'constants/tournamentStatus';

import { formatDateFromTimezone } from 'helpers/formatDateFromTimezone';
import { tw } from 'utils/tailwindClassName';
import { useResponsive } from 'hooks/useResponsive';

import type { ChangeEvent } from 'react';
import type { Tournament } from 'types/tournament';
import type { ColumnProps } from 'components/VirtualizedTable/types';

const notRunningTournaments = [CHECK_IN, NOT_STARTED];

const tournamentTypeOptions = [
  { value: 'all', label: 'All events' },
  { value: 'world', label: 'Worlds' },
  { value: 'international', label: 'Internationals' },
  { value: 'regional', label: 'Regionals' },
  { value: 'cup', label: 'League Cup' },
  { value: 'challenge', label: 'League Challenge' },
  { value: 'special event', label: 'Special Event' },
];

export const Tournaments = () => {
  const [listRef, setListRef] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const responsive = useResponsive();
  const isMobile = useMemo(() => responsive.md === false, [responsive]);

  const [selectedTournamentType, setSelectedTournamentType] = useState(
    tournamentTypeOptions[0].value,
  );
  const [allTournaments, setAllTournaments] = useState<Tournament[]>([]);

  const { isPending, data, isError } = useGetTournaments({
    select: data => {
      const tournaments = data.tcg.data;
      const runningTournaments = tournaments.filter(
        tournament => tournament.tournamentStatus === RUNNING,
      );

      const upcomingTournaments = tournaments.filter(
        tournament =>
          tournament.tournamentStatus === NOT_STARTED ||
          tournament.tournamentStatus === CHECK_IN,
      );

      const otherTournaments = tournaments.filter(
        tournament =>
          tournament.tournamentStatus !== RUNNING &&
          tournament.tournamentStatus !== NOT_STARTED &&
          tournament.tournamentStatus !== CHECK_IN,
      );
      return {
        upcomingTournaments,
        runningTournaments,
        otherTournaments,
      };
    },
  });

  useEffect(() => {
    setAllTournaments(data?.otherTournaments ?? []);
  }, [data?.otherTournaments]);

  const columns: ColumnProps<Tournament>[] = useMemo(() => {
    return [
      {
        key: 'name',
        header: 'Tournament',
        render: row => (
          <div className="flex gap-4">
            <TournamentLogo tournamentName={row.name} />

            <div className="flex flex-col gap-2">
              <div className="text-base font-semibold text-gray-900 dark:text-white">
                {row.name}
              </div>

              {!notRunningTournaments.includes(row.tournamentStatus) && (
                <AdditionalInfo
                  tournamentStatus={row.tournamentStatus}
                  winners={row.winners}
                  roundNumbers={row.roundNumbers}
                />
              )}
            </div>
          </div>
        ),
      },
      {
        key: 'dates',
        header: 'Dates',
        align: 'right',
        render: row => (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {formatDateFromTimezone(row.date.start, 'MMMM d, yyyy')} -{' '}
            {formatDateFromTimezone(row.date.end, 'MMMM d, yyyy')}
          </div>
        ),
      },
    ];
  }, []);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  }, []);

  const handleRowClick = useCallback(
    (tournament: Tournament) => {
      navigate(`/tournaments/${tournament.id}`);
    },
    [navigate],
  );

  const handleOnTournamentTypeChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setSelectedTournamentType(value);
    },
    [],
  );

  const filteredTournaments = useMemo(() => {
    if (!searchQuery && selectedTournamentType === 'all') return allTournaments;

    const filteredByType =
      selectedTournamentType === 'all'
        ? allTournaments
        : allTournaments.filter(tournament =>
            tournament.name.toLowerCase().includes(selectedTournamentType),
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
    const finalResult: Tournament[] = [];
    if (result.length) {
      result.forEach(item => {
        finalResult.push(item.item);
      });
      return finalResult;
    }

    return [];
  }, [searchQuery, allTournaments, selectedTournamentType]);

  if (isError) {
    // TODO: make error message more user friendly
    return <p>There was an error fetching the tournaments</p>;
  }

  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center">
        <LoadingPokeball size="100" alt="Loading tournament info...</p>" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <SEO title="Tournaments" />

      {data.runningTournaments.length > 0 && (
        <TournamentsCard
          tournaments={data.runningTournaments}
          title="Tournaments currently in progress"
        />
      )}

      {data.upcomingTournaments.length > 0 && (
        <TournamentsCard
          tournaments={data.upcomingTournaments}
          title="Tournaments Checking in"
        />
      )}

      <Heading level="3">View all the latest Pokemon TCG tournaments</Heading>

      <section className="bg-gray-50 dark:bg-gray-900" ref={setListRef}>
        <Card>
          <div className="flex flex-col items-center space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="w-full md:w-1/3">
              <Input
                name="search"
                label="Search tournaments"
                placeholder="Search tournaments"
                hideLabel
                onChange={handleSearch}
                icon={<MagnifyingGlassIcon />}
                value={searchQuery}
              />
            </div>
            <div className="w-full md:w-1/4">
              <Select
                name="tournamentType"
                label="Tournament type"
                hideLabel
                options={tournamentTypeOptions}
                onChange={handleOnTournamentTypeChange}
                value={selectedTournamentType}
              />
            </div>
          </div>

          <VirtualizedTable<Tournament>
            tableId="tournaments"
            type="window"
            data={filteredTournaments}
            columns={columns}
            containerRef={listRef}
            onRowClick={handleRowClick}
            estimateSize={48.5}
            noDataMessage={<>No tournaments found that match this criteria</>}
            rowClasses={tw`flex-col-reverse items-start md:flex-row`}
            header={isMobile ? 'none' : 'static'}
          />
        </Card>
      </section>
    </div>
  );
};
