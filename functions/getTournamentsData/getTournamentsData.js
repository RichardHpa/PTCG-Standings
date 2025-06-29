// This function is responsible for fetching the tournaments data
import fs from 'fs';
import { format } from 'date-fns';

import { basePokeDataApiTournamentsUrl, baseFolder } from '../../constants/folders.js';
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

export const getTournamentsData = async () => {
  logInfo('🏆 Request for tournaments data');

  try {
    const data = await fetchWithRetry(basePokeDataApiTournamentsUrl);

    if (!data) {
      logInfo('📭 Empty data returned for tournaments');
      return null;
    }

    const date = format(new Date(), 'Pp');

    // hack as some of the tournaments (mainly the ones in south america that arent run by RK9) are not auto updating from not-started to finished
    forceFinishTournaments.forEach(tournamentId => {
      const tournament = data.tcg.data.find(tournament => tournament.id === tournamentId);
      if (tournament) {
        tournament.tournamentStatus = 'finished';
        logTournamentEvent('Force finished', tournamentId);
      }
    });

    // hack as some of the tournaments (mainly the ones in south america that arent run by RK9) are not auto updating from not-started to running
    forceRunningTournaments.forEach(tournamentId => {
      const tournament = data.tcg.data.find(tournament => tournament.id === tournamentId);
      if (tournament) {
        tournament.tournamentStatus = 'running';
        logTournamentEvent('Force running', tournamentId);
      }
    });

    const newData = {
      dataLastUpdated: date,
      ...data,
    };

    try {
      fs.writeFileSync(`${baseFolder}/tournaments.json`, JSON.stringify(newData));
      logFileOperation('write', `${baseFolder}/tournaments.json`, true, { date });
      logSuccess('Tournaments Data updated and file saved', { date });
    } catch (err) {
      logFileOperation('write', `${baseFolder}/tournaments.json`, false, { error: err.message });
    }

    return newData;
  } catch (error) {
    const isCritical = logErrorWithContext(error, 'getTournamentsData');

    if (isCritical) {
      logError('Critical error in getTournamentsData, application may need to be restarted');
      throw error; // Re-throw critical errors
    } else {
      logInfo('Non-critical error in getTournamentsData, continuing with cached data if available');
      return null;
    }
  }
};
