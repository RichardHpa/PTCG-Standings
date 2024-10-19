import type { Tournament } from 'types/tournament';

export interface TournamentsCardProps {
  title: string;
  tournaments: Tournament[];
}

export interface TournamentRowProps {
  tournament: Tournament;
}
