import { forceFinishTournaments } from '../../constants/forceFinishTournaments.js';

export const checkRunningTournaments = async data => {
  const tournaments = data.tcg.data;

  const filterRunningTournaments = tournaments.filter(tournament => {
    return (
      tournament.tournamentStatus !== 'finished' && !forceFinishTournaments.includes(tournament.id)
    );
  });
  return filterRunningTournaments;
};
