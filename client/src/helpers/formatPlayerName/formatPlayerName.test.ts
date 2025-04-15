import { describe, expect, test } from 'vitest';

import {
  formatPlayerName,
  removeCountryFromName,
  getCountryCode,
} from './formatPlayerName';

describe('removeCountryFromName', () => {
  test('returns the same string when input is an empty string', () => {
    expect(removeCountryFromName('')).toBe('');
  });

  test('returns the same string when input is a single word', () => {
    expect(removeCountryFromName('hello')).toBe('hello');
  });

  test('removes country codes from names', () => {
    expect(removeCountryFromName('Brent Tonisson [AU]')).toBe('Brent Tonisson');
  });
});

describe('getCountryCode', () => {
  test('returns the same string when input is an empty string', () => {
    expect(getCountryCode('')).toBe('');
  });

  test('returns empty string if there is no country code', () => {
    expect(getCountryCode('hello')).toBe('');
  });

  test('extracts country codes from names', () => {
    expect(getCountryCode('Brent Tonisson [AU]')).toBe('AU');
  });
});

describe('formatPlayerName', () => {
  test('returns the same string when input is an empty string', () => {
    expect(formatPlayerName('')).toBe('');
  });

  test('returns the same string when input is a single word', () => {
    expect(formatPlayerName('hello')).toBe('hello');
  });

  test('formats player names correctly with country flag', () => {
    expect(formatPlayerName('Brent Tonisson [AU]')).toBe('🇦🇺 Brent Tonisson');
    expect(formatPlayerName('John Doe [US]')).toBe('🇺🇸 John Doe');
  });

  test('formats player names correctly without country flag if showFlag is false', () => {
    expect(formatPlayerName('Brent Tonisson', false)).toBe('Brent Tonisson');
    expect(formatPlayerName('John Doe', false)).toBe('John Doe');
  });
});
