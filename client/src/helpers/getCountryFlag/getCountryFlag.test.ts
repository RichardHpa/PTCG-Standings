import { describe, expect, test } from 'vitest';

import { getCountryFlag } from './getCountryFlag';

describe('getCountryFlag', () => {
  // NOTE: this test is really important to make sure that the UK country code is resolved to the correct flag as the countries-list package does not recognize the UK country code
  test('should return the correct flag for the UK country code', () => {
    const flag = getCountryFlag('UK');
    expect(flag).toBe('🇬🇧');
  });

  test('should return the correct flag for a valid country code', () => {
    const flag = getCountryFlag('US');
    expect(flag).toBe('🇺🇸');
  });

  test('should return the correct flag for a string country code', () => {
    const flag = getCountryFlag('GB');
    expect(flag).toBe('🇬🇧');
  });

  test('should return undefined for an invalid country code', () => {
    const flag = getCountryFlag('INVALID_CODE');
    expect(flag).toBe('');
  });
});
