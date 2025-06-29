// This function fetches the data for a single tournament and saves it to a file
import fs from 'fs';
import { format } from 'date-fns';

import { basePokeDataApiFullTournamentUrl, tournamentsFolder } from '../../constants/folders.js';
import { forceFinishTournaments } from '../../constants/forceFinishTournaments.js';
import { forceRunningTournaments } from '../../constants/forceRunningTournaments.js';
import { fetchWithRetry, logErrorWithContext } from '../../utils/apiHelpers.js';
import {
  logInfo,
  logTournamentEvent,
  logFileOperation,
  logError,
  logSuccess,
} from '../../utils/logger.js';

export const getTournamentData = async tournamentId => {
  logTournamentEvent('Request for data', tournamentId);
  const url = `${basePokeDataApiFullTournamentUrl}/${tournamentId}`;

  try {
    const data = await fetchWithRetry(url);

    if (!data) {
      logInfo('📭 Empty data returned for tournament', { tournamentId });
      return null;
    }

    const date = format(new Date(), 'Pp');

    // hack as some of the tournaments (mainly the ones in south america that aren't run by RK9) are not auto updating from not-started to finished
    if (forceFinishTournaments.includes(tournamentId)) {
      data.tournament.tournamentStatus = 'finished';
      logTournamentEvent('Force finished', tournamentId);
    }

    // hack as some of the tournaments (mainly the ones in south america that aren't run by RK9) are not auto updating from not-started to running
    if (forceRunningTournaments.includes(tournamentId)) {
      data.tournament.tournamentStatus = 'running';
      logTournamentEvent('Force running', tournamentId);
    }

    const newData = {
      dataLastUpdated: date,
      ...data,
    };

    try {
      const filePath = `${tournamentsFolder}/${tournamentId}.json`;
      fs.writeFileSync(filePath, JSON.stringify(newData));
      logFileOperation('write', filePath, true, { tournamentId, date });
      logSuccess('Tournament data updated and file saved', { tournamentId, date });
    } catch (err) {
      logFileOperation('write', `${tournamentsFolder}/${tournamentId}.json`, false, {
        tournamentId,
        error: err.message,
      });
    }

    return newData;
  } catch (error) {
    const isCritical = logErrorWithContext(error, `getTournamentData(${tournamentId})`);

    if (isCritical) {
      logError(
        '💥 Critical error fetching tournament, application may need to be restarted',
        null,
        { tournamentId }
      );
      throw error; // Re-throw critical errors
    } else {
      logInfo(
        '⚠️ Non-critical error fetching tournament, continuing with cached data if available',
        { tournamentId }
      );
      return null;
    }
  }
};
