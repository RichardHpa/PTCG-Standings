import { useQuery } from '@tanstack/react-query';

import { getTournaments } from 'api/getTournaments';
import { RUNNING, NOT_STARTED, CHECK_IN } from 'constants/tournamentStatus';

import type { useGetTournamentsProps } from './types';
import type { TournamentsApiResponse } from 'types/tournament';

const hasEnded = (endDate: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(endDate) < today;
};

export const selectTournamentsByStatus = (data: TournamentsApiResponse) => {
  const tournaments = data.tcg.data;
  return {
    runningTournaments: tournaments.filter(
      t => t.tournamentStatus === RUNNING && !hasEnded(t.date.end),
    ),
    upcomingTournaments: tournaments.filter(
      t => t.tournamentStatus === NOT_STARTED && !hasEnded(t.date.end),
    ),
    checkingInTournaments: tournaments.filter(
      t => t.tournamentStatus === CHECK_IN,
    ),
    otherTournaments: tournaments.filter(
      t =>
        (t.tournamentStatus !== RUNNING &&
          t.tournamentStatus !== NOT_STARTED &&
          t.tournamentStatus !== CHECK_IN) ||
        hasEnded(t.date.end),
    ),
  };
};

export const useGetTournamentsKey = () => ['tournaments'];

export function useGetTournaments<TData = TournamentsApiResponse>({
  select,
}: useGetTournamentsProps<TData>) {
  return useQuery({
    queryKey: useGetTournamentsKey(),
    queryFn: getTournaments,
    select: select,
  });
}
