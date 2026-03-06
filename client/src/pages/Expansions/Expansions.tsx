import { useGetExpansions } from 'queries/useGetExpansions';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { Input } from 'components/Forms/Input';
import { Select } from 'components/Forms/Select';
import { Card } from 'components/Card';
import { LoadingPokeball } from 'components/LoadingPokeball';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useMemo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js';

import type { ChangeEvent } from 'react';
import type { Expansion } from 'types/expansions';
import React from 'react';

export interface GroupedExpansions {
  [series: string]: Expansion[];
}

export const Expansions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [showTimeoutNotice, setShowTimeoutNotice] = useState(false);

  const { data, isLoading, error, refetch } =
    useGetExpansions<GroupedExpansions>({
      select: data => {
        if (!data?.data) return {};

        // Group expansions by series while preserving original order
        const groupedExpansions = data.data.reduce(
          (groups: GroupedExpansions, expansion: Expansion) => {
            const series = expansion.series;
            if (!groups[series]) {
              groups[series] = [];
            }
            groups[series].push(expansion);
            return groups;
          },
          {},
        );

        console.log('Grouped expansions:', groupedExpansions);
        return groupedExpansions;
      },
    });

  // Show timeout notice after 20 seconds
  React.useEffect(() => {
    if (isLoading) {
      const timeoutTimer = setTimeout(() => {
        setShowTimeoutNotice(true);
      }, 20000);

      return () => clearTimeout(timeoutTimer);
    } else {
      setShowTimeoutNotice(false);
    }
  }, [isLoading]);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  }, []);

  const handleSortChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as 'newest' | 'oldest');
  }, []);

  const handleSeriesChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedSeries(e.target.value);
    },
    [],
  );

  // Get unique series for the filter dropdown, sorted by release date
  const availableSeries = useMemo(() => {
    if (!data) return [];

    // Sort series by release date of their first expansion
    const sortedSeries = Object.entries(data).sort(
      ([, expansionsA], [, expansionsB]) => {
        if (expansionsA.length === 0 || expansionsB.length === 0) return 0;

        const firstExpansionA = expansionsA[0];
        const firstExpansionB = expansionsB[0];

        const dateA = new Date(firstExpansionA.releaseDate).getTime();
        const dateB = new Date(firstExpansionB.releaseDate).getTime();

        // Default to newest first (oldest series first) for the dropdown
        return dateA - dateB;
      },
    );

    return sortedSeries.map(([series]) => series);
  }, [data]);

  const filteredBySeries = useMemo(() => {
    if (!data) return {};
    if (selectedSeries !== 'all') {
      return { [selectedSeries]: data[selectedSeries] };
    }
    return { ...data };
  }, [data, selectedSeries]);

  const expansionsFuse = useMemo(
    () =>
      new Fuse(Object.values(filteredBySeries).flat(), {
        shouldSort: true,
        threshold: 0.3,
        location: 0,
        distance: 100,
        keys: ['name', 'series'],
        isCaseSensitive: false,
      }),
    [filteredBySeries],
  );

  const filteredAndSortedData = useMemo(() => {
    let filteredData = filteredBySeries;

    if (searchQuery) {
      const matchedExpansions = expansionsFuse
        .search(searchQuery)
        .map(result => result.item);

      filteredData = matchedExpansions.reduce(
        (groups: GroupedExpansions, expansion: Expansion) => {
          const series = expansion.series;
          if (!groups[series]) {
            groups[series] = [];
          }
          groups[series].push(expansion);
          return groups;
        },
        {},
      );
    }

    const sortedData: GroupedExpansions = {};
    const sortedSeries = Object.entries(filteredData).sort(
      ([, expansionsA], [, expansionsB]) => {
        if (expansionsA.length === 0 || expansionsB.length === 0) return 0;
        const dateA = new Date(expansionsA[0].releaseDate).getTime();
        const dateB = new Date(expansionsB[0].releaseDate).getTime();
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
      },
    );

    sortedSeries.forEach(([series, expansions]) => {
      sortedData[series] = [...expansions].sort((a, b) => {
        const dateA = new Date(a.releaseDate).getTime();
        const dateB = new Date(b.releaseDate).getTime();
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
      });
    });

    return sortedData;
  }, [filteredBySeries, expansionsFuse, searchQuery, sortOrder]);

  if (isLoading)
    return (
      <div className="flex min-h-64 items-center justify-center">
        <LoadingPokeball />
      </div>
    );

  if (error)
    return (
      <div className="flex min-h-64 items-center justify-center">
        <div className="text-center text-red-600">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 p-3 dark:bg-red-900/20">
            <svg
              className="h-full w-full text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <Heading level="2" className="mb-2 text-xl font-semibold">
            Unable to Load Expansions
          </Heading>
          <div className="mx-auto mb-4 max-w-md">
            <Paragraph size="sm" color="default" align="center">
              There is an issue with the external API that provides our
              expansion data. This is a known issue and hopefully will be
              resolved to become more stable in the future
            </Paragraph>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => refetch()}
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Try Again
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              If the problem persists, please check back later or contact
              support.
            </p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
          Pokémon TCG Expansions
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore all available card expansions
        </p>
      </div>

      {/* Timeout Notice */}
      {showTimeoutNotice && (
        <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-amber-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-amber-800 dark:text-amber-200">
                External API Response Taking Longer Than Expected
              </h3>
              <div className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                <p>
                  We're experiencing slower response times from our external API
                  provider. This is a known issue with their service that
                  affects all users. Please be patient while the data loads, or
                  try refreshing the page.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filters Section */}
      <section className="mb-8 bg-gray-50 dark:bg-gray-900">
        <Card>
          <div className="flex flex-col flex-wrap justify-start gap-4 p-4 md:flex-row">
            <div className="w-full md:w-1/3">
              <Input
                name="search"
                label="Search expansions"
                placeholder="Search expansions by name or series"
                hideLabel
                onChange={handleSearch}
                icon={<MagnifyingGlassIcon />}
                value={searchQuery}
              />
            </div>
            <div className="w-full md:w-1/4">
              <Select
                name="sort"
                label="Sort by release date"
                hideLabel
                options={[
                  { value: 'newest', label: 'Newest First' },
                  { value: 'oldest', label: 'Oldest First' },
                ]}
                value={sortOrder}
                onChange={handleSortChange}
              />
            </div>
            <div className="w-full md:w-1/4">
              <Select
                name="series"
                label="Filter by series"
                hideLabel
                options={[
                  { value: 'all', label: 'All Series' },
                  ...availableSeries.map(series => ({
                    value: series,
                    label: series,
                  })),
                ]}
                value={selectedSeries}
                onChange={handleSeriesChange}
              />
            </div>
          </div>
        </Card>
      </section>

      <div className="space-y-8">
        {filteredAndSortedData &&
          Object.entries(filteredAndSortedData).map(([series, expansions]) => {
            console.log(
              'Processing series:',
              series,
              'expansions:',
              expansions,
            );

            // Additional safety check
            if (!expansions || !Array.isArray(expansions)) {
              console.warn(
                'Invalid expansions data for series:',
                series,
                expansions,
              );
              return null; // Skip this series if data is invalid
            }

            return (
              <div key={series} className="space-y-4">
                {/* Series Header */}
                <div className="border-b border-gray-200 pb-2 dark:border-gray-700">
                  <Heading
                    level="2"
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {series}
                  </Heading>
                  <Paragraph size="sm" color="default" align="left">
                    {expansions.length} expansion
                    {expansions.length !== 1 ? 's' : ''}
                  </Paragraph>
                </div>

                {/* Expansions Grid for this Series */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {expansions.map(expansion => (
                    <Link
                      key={expansion.id}
                      to={`/expansions/${expansion.id}`}
                      className="group cursor-pointer rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                    >
                      <div className="p-6 text-center">
                        {/* Expansion Logo */}
                        <div className="mb-4 flex justify-center">
                          <img
                            src={expansion.images.logo}
                            alt={`${expansion.name} logo`}
                            className="h-24 w-auto object-contain transition-transform duration-200 group-hover:scale-110"
                            onError={e => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/cardBack.png'; // Fallback image
                            }}
                          />
                        </div>

                        {/* Expansion Name */}
                        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 dark:text-white">
                          {expansion.name}
                        </h3>

                        {/* Series Info */}
                        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                          {expansion.series}
                        </p>

                        {/* Card Count */}
                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                            {expansion.printedTotal} cards
                          </span>
                          <span className="flex items-center">
                            <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                            {expansion.total} total
                          </span>
                        </div>

                        {/* Release Date */}
                        <div className="mt-4 border-t border-gray-200 pt-3 dark:border-gray-700">
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Released:{' '}
                            {new Date(
                              expansion.releaseDate,
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
      </div>

      {(!filteredAndSortedData ||
        Object.keys(filteredAndSortedData).length === 0) && (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            {searchQuery
              ? 'No expansions found matching your search'
              : 'No expansions found'}
          </p>
        </div>
      )}
    </div>
  );
};
