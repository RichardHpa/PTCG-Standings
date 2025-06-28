import { getTournamentsData } from './functions/getTournamentsData/index.js';
import { getTournamentData } from './functions/getTournamentData/index.js';
import { logInfo, logServerEvent, logSuccess } from './utils/logger.js';

logServerEvent('Development script started');
logInfo('🏆 Getting tournaments');

const getTourneys = async () => {
  const res = await getTournamentsData();
  if (res && res.tcg && res.tcg.data) {
    const tournaments = res.tcg.data;
    logInfo('📋 Processing tournaments', { count: tournaments.length });
    for (const tournament of tournaments) {
      await getTournamentData(tournament.id);
    }
    logSuccess('All tournaments processed');
  } else {
    logInfo('⚠️ No tournaments data available');
  }
};

getTourneys();
