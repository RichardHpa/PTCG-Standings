import { describe, expect, test } from 'vitest';

import { formatDateFromTimezone } from './formatDateFromTimezone';

// NOTE: Default timezone is 'Europe/Amsterdam'
describe('formatDateFromTimezone', () => {
  test('returns the formatted date', () => {
    const date = '2022-01-01';
    expect(formatDateFromTimezone(date, 'MMMM d, yyyy')).toBe(
      'January 2, 2022',
    );
  });

  test('returns the formatted date with a different format', () => {
    const date = '2022-01-01';
    expect(formatDateFromTimezone(date, 'dd/MM/yyyy')).toBe('02/01/2022');
  });

  test('returns the formatted date with a different timezone', () => {
    const date = '2022-01-01';
    expect(
      formatDateFromTimezone(date, 'MMMM d, yyyy', 'Pacific/Auckland'),
    ).toBe('January 1, 2022');
  });
});
