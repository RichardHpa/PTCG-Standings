import { useParams } from 'react-router-dom';

import { SEO } from 'components/SEO';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { Division } from 'types/divisions';

export const TopCut = () => {
  const { division = 'masters' } = useParams() as { division: Division };
  const { tournament } = useTournamentContext();

  return (
    <div>
      <SEO title={`${tournament.name} ${division} top cup`} />
      <div>View {division} top cut</div>
    </div>
  );
};
