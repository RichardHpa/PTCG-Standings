import { Heading } from 'components/Heading';
import { LoadingPokeball } from 'components/LoadingPokeball';

import { useGetTournaments } from 'queries/useGetTournaments';

export const Home = () => {
  const { isLoading } = useGetTournaments();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center">
        <LoadingPokeball size="100" alt="Loading tournament info...</p>" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <Heading level="3">
        Keep up to date with the latest Pokemon TCG tournaments
      </Heading>
    </div>
  );
};
