import { useMemo } from 'react';
import { useRouteError } from 'react-router-dom';

import { Notice } from 'components/Notice';

import { errorMessages } from 'errors/errorMessages';

export const StandingsError = () => {
  const error = useRouteError() as Error;
  const errorMessage = useMemo(() => {
    if (error.message) {
      return error.message;
    }
    return 'It seems there was an error loading the standings.';
  }, [error]);

  return (
    <Notice status="error">
      {errorMessages[Math.floor(Math.random() * errorMessages.length)]}
      <br />
      <br />
      {errorMessage}
    </Notice>
  );
};
