import { Heading } from 'components/Heading';
import { LoadingPokeball } from 'components/LoadingPokeball';
import { TournamentsCard } from 'components/TournamentsCard';
import { SEO } from 'components/SEO';

import { useGetTournaments } from 'queries/useGetTournaments';

import { RUNNING, NOT_STARTED, CHECK_IN } from 'constants/tournamentStatus';

export const Home = () => {
  const { isPending, data, isError } = useGetTournaments({
    select: data => {
      const tournaments = data.tcg.data;
      const runningTournaments = tournaments.filter(
        tournament => tournament.tournamentStatus === RUNNING,
      );

      const upcomingTournaments = tournaments.filter(
        tournament =>
          tournament.tournamentStatus === NOT_STARTED ||
          tournament.tournamentStatus === CHECK_IN,
      );

      const latestTournaments = tournaments
        .filter(
          tournament =>
            tournament.tournamentStatus !== RUNNING &&
            tournament.tournamentStatus !== NOT_STARTED &&
            tournament.tournamentStatus !== CHECK_IN,
        )
        .slice(0, 5);

      return {
        upcomingTournaments,
        runningTournaments,
        latestTournaments,
      };
    },
  });

  if (isError) {
    // TODO: make error message more user friendly
    return <p>There was an error fetching the tournaments</p>;
  }

  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center">
        <LoadingPokeball size="100" alt="Loading tournament info...</p>" />
      </div>
    );
  }

  return (
    <>
      <SEO />

      <div className="flex flex-grow flex-col gap-8">
        <Heading level="3">
          Keep up to date with the latest Pokemon TCG tournaments
        </Heading>

        {data.runningTournaments.length > 0 && (
          <TournamentsCard
            tournaments={data.runningTournaments}
            title="Running Tournaments"
          />
        )}

        {data.upcomingTournaments.length > 0 && (
          <TournamentsCard
            tournaments={data.upcomingTournaments}
            title="Upcoming Tournaments"
          />
        )}

        <TournamentsCard
          tournaments={data.latestTournaments}
          title="Latest Tournaments"
        />
      </div>
    </>
  );
};
