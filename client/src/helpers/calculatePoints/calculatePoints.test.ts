import { describe, expect, test } from 'vitest';

import { calculatePoints } from './calculatePoints';

describe('calculatePoints', () => {
  test('returns 0 when all values are 0', () => {
    const result = calculatePoints({ wins: 0, losses: 0, ties: 0 });
    expect(result).toBe(0);
  });

  test('returns the correct points for a given record', () => {
    const result = calculatePoints({ wins: 10, losses: 5, ties: 2 });
    expect(result).toBe(32);
  });

  test('returns the correct points for a record with only wins', () => {
    const result = calculatePoints({ wins: 5, losses: 0, ties: 0 });
    expect(result).toBe(15);
  });

  test('returns the correct points for a record with only losses', () => {
    const result = calculatePoints({ wins: 0, losses: 5, ties: 0 });
    expect(result).toBe(0);
  });

  test('returns the correct points for a record with only ties', () => {
    const result = calculatePoints({ wins: 0, losses: 0, ties: 5 });
    expect(result).toBe(5);
  });

  test('returns the correct points for a record with mixed values', () => {
    const result = calculatePoints({ wins: 3, losses: 2, ties: 1 });
    expect(result).toBe(10);
  });

  test('returns the correct points for a record with large values', () => {
    const result = calculatePoints({ wins: 1000, losses: 500, ties: 200 });
    expect(result).toBe(3200);
  });

  test('throws an error when points for a record are negative', () => {
    expect(() => {
      calculatePoints({ wins: -1, losses: 0, ties: 0 });
    }).toThrow('Points for wins cannot be negative');
  });
});
