import { describe, expect, test } from 'vitest';

import { selectTournamentsByStatus } from './useGetTournaments';

import type { Tournament, TournamentsApiResponse } from 'types/tournament';

// --- helpers ---

const makeTournament = (
  overrides: Partial<Tournament> &
    Pick<Tournament, 'id' | 'tournamentStatus' | 'date'>,
): Tournament => ({
  name: 'Test Tournament',
  decklists: 0,
  players: {},
  winners: {},
  roundNumbers: {},
  lastUpdated: '',
  rk9link: '',
  ...overrides,
});

const makeResponse = (tournaments: Tournament[]): TournamentsApiResponse => ({
  tcg: { type: 'tcg', data: tournaments },
});

// Dates relative to today so tests never become stale
const getOffset = (days: number) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
};

const past = getOffset(-1);
const future = getOffset(1);

// --- tests ---

describe('selectTournamentsByStatus', () => {
  describe('empty input', () => {
    test('returns empty buckets for an empty tournament list', () => {
      const result = selectTournamentsByStatus(makeResponse([]));
      expect(result.runningTournaments).toHaveLength(0);
      expect(result.upcomingTournaments).toHaveLength(0);
      expect(result.checkingInTournaments).toHaveLength(0);
      expect(result.otherTournaments).toHaveLength(0);
    });
  });

  describe('runningTournaments', () => {
    test('includes a running tournament whose end date is in the future', () => {
      const t = makeTournament({
        id: '1',
        tournamentStatus: 'running',
        date: { start: '2025-01-01', end: future },
      });
      const { runningTournaments } = selectTournamentsByStatus(
        makeResponse([t]),
      );
      expect(runningTournaments).toHaveLength(1);
      expect(runningTournaments[0].id).toBe('1');
    });

    test('excludes a running tournament whose end date is in the past (stale API status)', () => {
      const t = makeTournament({
        id: '1',
        tournamentStatus: 'running',
        date: { start: '2020-01-01', end: past },
      });
      const { runningTournaments } = selectTournamentsByStatus(
        makeResponse([t]),
      );
      expect(runningTournaments).toHaveLength(0);
    });
  });

  describe('upcomingTournaments', () => {
    test('includes a not-started tournament whose end date is in the future', () => {
      const t = makeTournament({
        id: '1',
        tournamentStatus: 'not-started',
        date: { start: '2025-01-01', end: future },
      });
      const { upcomingTournaments } = selectTournamentsByStatus(
        makeResponse([t]),
      );
      expect(upcomingTournaments).toHaveLength(1);
    });

    test('excludes a not-started tournament whose end date is in the past (stale API status)', () => {
      const t = makeTournament({
        id: '1',
        tournamentStatus: 'not-started',
        date: { start: '2020-01-01', end: past },
      });
      const { upcomingTournaments } = selectTournamentsByStatus(
        makeResponse([t]),
      );
      expect(upcomingTournaments).toHaveLength(0);
    });
  });

  describe('checkingInTournaments', () => {
    test('includes a check-in tournament with a future end date', () => {
      const t = makeTournament({
        id: '1',
        tournamentStatus: 'check-in',
        date: { start: '2025-01-01', end: future },
      });
      const { checkingInTournaments } = selectTournamentsByStatus(
        makeResponse([t]),
      );
      expect(checkingInTournaments).toHaveLength(1);
    });

    test('includes a check-in tournament even when end date is in the past', () => {
      const t = makeTournament({
        id: '1',
        tournamentStatus: 'check-in',
        date: { start: '2020-01-01', end: past },
      });
      const { checkingInTournaments } = selectTournamentsByStatus(
        makeResponse([t]),
      );
      expect(checkingInTournaments).toHaveLength(1);
    });
  });

  describe('otherTournaments', () => {
    test('includes a finished tournament', () => {
      const t = makeTournament({
        id: '1',
        tournamentStatus: 'finished',
        date: { start: '2020-01-01', end: past },
      });
      const { otherTournaments } = selectTournamentsByStatus(makeResponse([t]));
      expect(otherTournaments).toHaveLength(1);
    });

    test('moves a stale running tournament (past end date) to otherTournaments', () => {
      const t = makeTournament({
        id: '1',
        tournamentStatus: 'running',
        date: { start: '2020-01-01', end: past },
      });
      const { otherTournaments } = selectTournamentsByStatus(makeResponse([t]));
      expect(otherTournaments).toHaveLength(1);
      expect(otherTournaments[0].id).toBe('1');
    });

    test('moves a stale not-started tournament (past end date) to otherTournaments', () => {
      const t = makeTournament({
        id: '1',
        tournamentStatus: 'not-started',
        date: { start: '2020-01-01', end: past },
      });
      const { otherTournaments } = selectTournamentsByStatus(makeResponse([t]));
      expect(otherTournaments).toHaveLength(1);
    });
  });

  describe('mutual exclusivity', () => {
    test('every tournament appears in exactly one bucket', () => {
      const tournaments: Tournament[] = [
        makeTournament({
          id: 'running-future',
          tournamentStatus: 'running',
          date: { start: '2025-01-01', end: future },
        }),
        makeTournament({
          id: 'running-stale',
          tournamentStatus: 'running',
          date: { start: '2020-01-01', end: past },
        }),
        makeTournament({
          id: 'upcoming-future',
          tournamentStatus: 'not-started',
          date: { start: '2025-01-01', end: future },
        }),
        makeTournament({
          id: 'upcoming-stale',
          tournamentStatus: 'not-started',
          date: { start: '2020-01-01', end: past },
        }),
        makeTournament({
          id: 'check-in',
          tournamentStatus: 'check-in',
          date: { start: '2025-01-01', end: future },
        }),
        makeTournament({
          id: 'finished',
          tournamentStatus: 'finished',
          date: { start: '2020-01-01', end: past },
        }),
      ];

      const result = selectTournamentsByStatus(makeResponse(tournaments));
      const allBuckets = [
        ...result.runningTournaments,
        ...result.upcomingTournaments,
        ...result.checkingInTournaments,
        ...result.otherTournaments,
      ];

      // Every tournament is accounted for
      expect(allBuckets).toHaveLength(tournaments.length);
      // No duplicates
      const ids = allBuckets.map(t => t.id);
      expect(new Set(ids).size).toBe(tournaments.length);
    });
  });
});
