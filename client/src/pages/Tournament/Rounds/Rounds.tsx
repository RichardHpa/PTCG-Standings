import { useParams } from 'react-router-dom';

import type { Division } from 'types/divisions';

export const Rounds = () => {
  const { division = 'masters' } = useParams() as { division: Division };

  return <div>View {division} rounds</div>;
};
