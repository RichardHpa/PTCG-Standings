import { useMemo, useCallback, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import Fuse from 'fuse.js';

import { StandingsCard } from 'components/StandingsCard';
import { Input } from 'components/Forms/Input';
import { Card } from 'components/Card';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { ChangeEvent } from 'react';
import type { Division } from 'types/divisions';
import type { Standing } from 'types/standing';

export const Standings = () => {
  const { division = 'masters' } = useParams() as { division: Division };
  const { divisions } = useTournamentContext();
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

  return (
    <div className="flex flex-col gap-4">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Search players"
                  />
                </div>
              </form>
            </div>
          </div>

          <StandingsCard division={division} standings={searchData} />
        </div>
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
