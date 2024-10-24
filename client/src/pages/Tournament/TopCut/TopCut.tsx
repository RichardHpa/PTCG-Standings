import { useParams } from 'react-router-dom';

import type { Division } from 'types/divisions';

export const TopCut = () => {
  const { division = 'masters' } = useParams() as { division: Division };

  return <div>View {division} top cut</div>;
};
