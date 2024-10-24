import { useParams } from 'react-router-dom';

import type { Division } from 'types/divisions';

export const Standings = () => {
  const { division = 'masters' } = useParams() as { division: Division };

  return <div>View {division} standings</div>;
};
