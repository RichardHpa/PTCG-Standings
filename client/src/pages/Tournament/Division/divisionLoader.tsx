import { orderedDivisions } from 'constants/divisions';

import type { LoaderFunctionArgs } from 'react-router-dom';

export const divisionLoader = async ({ params }: LoaderFunctionArgs) => {
  const { tournamentId, division } = params;

  if (!tournamentId) {
    return {
      status: 404,
      error: new Error('Tournament not found'),
    };
  }

  if (!division) {
    return {
      status: 404,
      error: new Error('Division not found'),
    };
  }

  if (!orderedDivisions.includes(division)) {
    throw new Error('Invalid Division');
  }

  return {
    tournamentId,
    division,
  };
};
