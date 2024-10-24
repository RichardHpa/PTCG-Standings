import { describe, test, expect } from 'vitest';

import { formatDivisionName } from './formatDivisionName';

describe('formatDivisionName', () => {
  test('should format division name', () => {
    expect(formatDivisionName('juniorsseniors')).toBe('Juniors & Seniors');
    expect(formatDivisionName('masters')).toBe('Masters');
    expect(formatDivisionName('seniors')).toBe('Seniors');
    expect(formatDivisionName('juniors')).toBe('Juniors');
  });
});
