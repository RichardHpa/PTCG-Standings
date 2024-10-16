import type { Standing } from './standing';

export type Division = 'juniors' | 'seniors' | 'masters' | 'juniorsseniors';

export interface DivisionObjects {
  division: Division;
  data: Standing[];
}
