import { parsePlayerUrl } from 'utils/parsePlayerUrl';

import type { LoaderFunctionArgs } from 'react-router-dom';

export const playerLoader = async ({ params }: LoaderFunctionArgs) => {
  const { tournamentId, playerName, division } = params;

  if (!tournamentId) {
    throw new Error('Tournament not found');
  }

  if (!playerName) {
    throw new Error('Player not found');
  }

  if (!division) {
    throw new Error('Division not found');
  }

  const parsedPlayerName = parsePlayerUrl(playerName);

  return {
    tournamentId,
    division,
    parsedPlayerName,
    playerName,
  };
};
