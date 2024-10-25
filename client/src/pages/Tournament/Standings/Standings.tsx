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
      <Card>
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
      </Card>
      <StandingsCard division={division} standings={searchData} />
    </div>
  );
};
