import { getTournamentsData } from './functions/getTournamentsData/index.js';
import { getTournamentData } from './functions/getTournamentData/index.js';

const getTourneys = async () => {
  console.log('Getting tournaments');
  const res = await getTournamentsData();
  const tournaments = res.tcg.data;
  for (const tournament of tournaments) {
    await getTournamentData(tournament.id);
  }
};

getTourneys();
