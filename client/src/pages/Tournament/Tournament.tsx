import { useTournamentContext } from 'providers/TournamentProvider';

export const Tournament = () => {
  const { tournament } = useTournamentContext();
  return (
    <div>
      <pre>{JSON.stringify(tournament, null, 2)}</pre>
    </div>
  );
};
