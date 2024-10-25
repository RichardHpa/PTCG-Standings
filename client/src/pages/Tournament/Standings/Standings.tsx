import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { StandingsCard } from 'components/StandingsCard';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { Division } from 'types/divisions';

export const Standings = () => {
  const { division = 'masters' } = useParams() as { division: Division };
  const { divisions } = useTournamentContext();

  const standings = useMemo(() => {
    const divisionData = divisions.find(d => d.division === division)!;
    return divisionData.data;
  }, [division, divisions]);

  return (
    <div>
      <StandingsCard division={division} standings={standings} />
    </div>
  );
};
