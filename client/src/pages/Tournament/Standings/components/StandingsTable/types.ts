import type { Standing } from 'types/standing';

export interface StandingsTableProps {
  tableId: string;
  data: Standing[];
  tournamentId: string;
  division: string;
}
