import { useParams } from 'react-router-dom';

import type { Division } from 'types/divisions';

export const Parings = () => {
  const { division = 'masters' } = useParams() as { division: Division };

  return <div>View {division} parings</div>;
};
