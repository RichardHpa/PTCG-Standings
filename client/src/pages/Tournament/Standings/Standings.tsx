import { useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';

import { StandingsCard } from 'components/StandingsCard';
import { Input } from 'components/Forms/Input';
import { Card } from 'components/Card';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { Division } from 'types/divisions';
import type { ChangeEvent } from 'react';

export const Standings = () => {
  const { division = 'masters' } = useParams() as { division: Division };
  const { divisions } = useTournamentContext();

  const standings = useMemo(() => {
    const divisionData = divisions.find(d => d.division === division)!;
    return divisionData.data;
  }, [division, divisions]);

  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }, []);

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
            />
          </div>
        </div>
      </Card>
      <StandingsCard division={division} standings={standings} />
    </div>
  );
};
