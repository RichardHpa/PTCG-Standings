import { describe, expect, test } from 'vitest';

import { getCountryFromCode } from './getCountryFromCode';

describe('getCountryFromCode', () => {
  // NOTE: this test is really important to make sure that the UK country code is resolved to the correct flag as the countries-list package does not recognize the UK country code
  test('should return the correct country name for the UK country code', () => {
    const country = getCountryFromCode('UK');
    expect(country).toBe('United Kingdom');
  });

  test('should return the correct country name for a valid country code', () => {
    const country = getCountryFromCode('US');
    expect(country).toBe('United States');
  });

  test('should return the correct country name for a string country code', () => {
    const country = getCountryFromCode('GB');
    expect(country).toBe('United Kingdom');
  });

  test('should return undefined for an invalid country code', () => {
    const country = getCountryFromCode('INVALID_CODE');
    expect(country).toBeUndefined();
  });
});
