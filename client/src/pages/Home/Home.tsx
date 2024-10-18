import { Heading } from 'components/Heading';
import { LoadingPokeball } from 'components/LoadingPokeball';

import { TournamentsCard } from 'components/TournamentsCard';

import { useGetTournaments } from 'queries/useGetTournaments';

export const Home = () => {
  const { isLoading, data, isError } = useGetTournaments();

  if (isError) {
    // TODO: make error message more user friendly
    return <p>There was an error fetching the tournaments</p>;
  }

  if (isLoading || !data) {
    return (
      <div className="flex flex-col items-center justify-center">
        <LoadingPokeball size="100" alt="Loading tournament info...</p>" />
      </div>
    );
  }

  return (
    <div className="flex flex-grow flex-col gap-4">
      <Heading level="3">
        Keep up to date with the latest Pokemon TCG tournaments
      </Heading>

      <TournamentsCard
        tournaments={data.tournaments}
        title="Latest Tournaments"
      />
    </div>
  );
};
