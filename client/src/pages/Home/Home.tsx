import { Heading } from 'components/Heading';
import { LoadingPokeball } from 'components/LoadingPokeball';
import { TournamentsCard } from 'components/TournamentsCard';
import { SEO } from 'components/SEO';

import {
  useGetTournaments,
  selectTournamentsByStatus,
} from 'queries/useGetTournaments';

export const Home = () => {
  const { isPending, data, isError } = useGetTournaments({
    select: selectTournamentsByStatus,
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

        {data.checkingInTournaments.length > 0 && (
          <TournamentsCard
            tournaments={data.checkingInTournaments}
            title="Tournaments checking in"
          />
        )}

        {data.upcomingTournaments.length > 0 && (
          <TournamentsCard
            tournaments={data.upcomingTournaments}
            title="Upcoming tournaments"
          />
        )}

        <TournamentsCard
          tournaments={data.otherTournaments.slice(0, 5)}
          title="Latest Tournaments"
        />
      </div>
    </>
  );
};
