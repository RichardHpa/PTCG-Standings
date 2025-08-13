import { useGetCards } from 'queries/useGetCards';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { Input } from 'components/Forms/Input';
import { Select } from 'components/Forms/Select';
import { Card } from 'components/Card';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useEffect, useRef, useMemo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import type { ChangeEvent } from 'react';

interface ExpansionCardsProps {
  setId: string;
  expansionName: string;
}

export const ExpansionCards = ({
  setId,
  expansionName,
}: ExpansionCardsProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [showTimeoutNotice, setShowTimeoutNotice] = useState(false);

  // Simple debounce implementation
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetCards({
    query: `set.id:"${setId}"${debouncedSearchQuery ? ` name:"${debouncedSearchQuery}"` : ''}${selectedType !== 'all' ? ` types:"${selectedType}"` : ''}`,
    pageSize: 30,
    orderBy: 'number',
  });

  // Show timeout notice after 20 seconds
  useEffect(() => {
    if (isLoading) {
      const timeoutTimer = setTimeout(() => {
        setShowTimeoutNotice(true);
      }, 20000);

      return () => clearTimeout(timeoutTimer);
    } else {
      setShowTimeoutNotice(false);
    }
  }, [isLoading]);

  // Auto-fetch when scrolling near bottom
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
  }, []);

  const handleTypeChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  }, []);

  // Get unique energy types from the cards
  const availableTypes = useMemo(() => {
    return [
      'Grass',
      'Fire',
      'Water',
      'Lightning',
      'Psychic',
      'Fighting',
      'Darkness',
      'Metal',
      'Colorless',
      'Fairy',
      'Dragon',
    ];
  }, []);

  // Filter cards by type only (search is now handled by API)
  const filteredCards = useMemo(() => {
    if (!data) return [];

    // API now handles both search and type filtering, so just return all loaded cards
    return data.pages.flatMap(page => page.data);
  }, [data]);

  if (isLoading) {
    return (
      <section className="mt-12">
        <div className="mb-6">
          <Heading
            level="2"
            className="mb-2 text-3xl font-bold text-gray-900 dark:text-white"
          >
            Cards in {expansionName}
          </Heading>
          <Paragraph size="sm" color="default" align="left">
            Loading cards...
          </Paragraph>
        </div>

        <div className="space-y-6">
          {showTimeoutNotice && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
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
                      We're experiencing slower response times from our external
                      API provider. This is a known issue with their service
                      that affects all users. Please be patient while the data
                      loads, or try refreshing the page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {Array.from({ length: 30 }).map((_, index) => (
              <div
                key={index}
                className="aspect-[2.5/3.5] animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            ))}
          </div>

          {showTimeoutNotice && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
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
                      We're experiencing slower response times from our external
                      API provider. This is a known issue with their service
                      that affects all users. Please be patient while the data
                      loads, or try refreshing the page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="mt-6 text-center text-red-600">
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
          Unable to Load Cards
        </Heading>
        <div className="mx-auto mb-4 max-w-md">
          <Paragraph size="sm" color="default" align="center">
            There is an issue with the external API that provides our card data.
            This is a known issue and hopefully will be resolved to become more
            stable in the future
          </Paragraph>
        </div>
      </div>
    );
  }

  // Get total count from API response
  const totalCount = data?.pages[0]?.totalCount || 0;

  if (filteredCards.length === 0) {
    return (
      <section className="mt-12">
        <div className="mb-6">
          <Heading
            level="2"
            className="mb-2 text-3xl font-bold text-gray-900 dark:text-white"
          >
            Cards in {expansionName}
          </Heading>
          <Paragraph size="sm" color="default" align="left">
            {totalCount} total cards
          </Paragraph>
        </div>

        {/* Filters Section */}
        <section className="mb-8 bg-gray-50 dark:bg-gray-900">
          <Card>
            <div className="flex flex-col flex-wrap justify-start gap-4 p-4 md:flex-row">
              <div className="w-full md:w-1/3">
                <Input
                  name="search"
                  label="Search cards"
                  placeholder="Search cards by name (API search)"
                  hideLabel
                  onChange={handleSearch}
                  icon={<MagnifyingGlassIcon />}
                  value={searchQuery}
                />
              </div>
              <div className="w-full md:w-1/4">
                <Select
                  name="type"
                  label="Filter by type"
                  hideLabel
                  options={[
                    { value: 'all', label: 'All Types' },
                    ...availableTypes.map(type => ({
                      value: type,
                      label: type,
                    })),
                  ]}
                  value={selectedType}
                  onChange={handleTypeChange}
                />
              </div>
            </div>
          </Card>
        </section>

        <div className="py-8 text-center">
          <Paragraph size="lg" color="default" align="center">
            {searchQuery || selectedType !== 'all'
              ? 'No cards found matching your filters.'
              : 'No cards found for this expansion.'}
          </Paragraph>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12">
      <div className="mb-6">
        <Heading
          level="2"
          className="mb-2 text-3xl font-bold text-gray-900 dark:text-white"
        >
          Cards in {expansionName}
        </Heading>
        <Paragraph size="sm" color="default" align="left">
          {totalCount} total cards • Showing {filteredCards.length} cards
        </Paragraph>
      </div>

      {/* Filters Section */}
      <section className="mb-8 bg-gray-50 dark:bg-gray-900">
        <Card>
          <div className="flex flex-col flex-wrap justify-start gap-4 p-4 md:flex-row">
            <div className="w-full md:w-1/3">
              <Input
                name="search"
                label="Search cards"
                placeholder="Search cards by name (API search)"
                hideLabel
                onChange={handleSearch}
                icon={<MagnifyingGlassIcon />}
                value={searchQuery}
              />
            </div>
            <div className="w-full md:w-1/4">
              <Select
                name="type"
                label="Filter by type"
                hideLabel
                options={[
                  { value: 'all', label: 'All Types' },
                  ...availableTypes.map(type => ({
                    value: type,
                    label: type,
                  })),
                ]}
                value={selectedType}
                onChange={handleTypeChange}
              />
            </div>
          </div>
        </Card>
      </section>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {filteredCards.map(card => (
          <Link
            key={card.id}
            to={`/expansions/${setId}/cards/${card.id}`}
            className="group cursor-pointer rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="aspect-[2.5/3.5] overflow-hidden rounded-t-lg">
              <img
                src={card.images.small}
                alt={`${card.name} card`}
                className="h-full w-full object-cover transition-transform duration-200"
                onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/cardBack.png';
                }}
              />
            </div>
            <div className="p-3">
              <h3 className="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                {card.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  #{card.number}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {card.rarity}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Intersection observer target for auto-loading */}
      {hasNextPage && (
        <div ref={loadMoreRef} className="mt-8 text-center">
          {isFetchingNextPage && (
            <div className="flex items-center justify-center">
              <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-blue-600"></div>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                Loading more cards...
              </span>
            </div>
          )}
          <div className="mt-2">
            <Paragraph size="sm" color="default" align="center">
              Showing {filteredCards.length} of {totalCount} cards
            </Paragraph>
          </div>
        </div>
      )}
    </section>
  );
};
