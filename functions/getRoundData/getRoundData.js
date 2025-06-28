// This function is responsible for fetching the round data
import { basePokeDataApiUrl } from '../../constants/folders.js';
import { fetchWithRetry, logErrorWithContext } from '../../utils/apiHelpers.js';
import { logInfo, logError, logSuccess } from '../../utils/logger.js';

export const getRoundData = async ({ tournamentId, division, round }) => {
  logInfo('🎯 Request for round data', { tournamentId, division, round });

  const url = `${basePokeDataApiUrl}/id/${tournamentId}/division/${division}/round/${round}`;

  try {
    const data = await fetchWithRetry(url);

    if (!data) {
      logInfo('📭 Empty data returned for tournament', { tournamentId, division, round });
      return null;
    }

    const checkRound = parseInt(data.tournament_data[0].data.round);
    const parsedRound = parseInt(round);
    if (parsedRound > checkRound) {
      throw new Error(
        `Round ${round} is less than the current round ${checkRound} for tournament ${tournamentId}`
      );
    }

    logSuccess('Round data fetched successfully', { tournamentId, division, round });
    return data;
  } catch (error) {
    const isCritical = logErrorWithContext(
      error,
      `getRoundData(${tournamentId}/${division}/${round})`
    );

    if (isCritical) {
      logError(
        '💥 Critical error fetching round data, application may need to be restarted',
        null,
        {
          tournamentId,
          division,
          round,
        }
      );
      throw error; // Re-throw critical errors
    } else {
      logInfo(
        '⚠️ Non-critical error fetching round data, continuing with cached data if available',
        {
          tournamentId,
          division,
          round,
        }
      );
      return null;
    }
  }
};
