import { describe, expect, test } from 'vitest';

import { recordColorMap } from './recordColorMap';

describe('recordColorMap', () => {
  test('returns the correct color class for W', () => {
    expect(recordColorMap['W']).toBe('text-green-500');
  });

  test('returns the correct color class for L', () => {
    expect(recordColorMap['L']).toBe('text-red-500');
  });

  test('returns the correct color class for T', () => {
    expect(recordColorMap['T']).toBe('text-yellow-500');
  });

  test('returns undefined for an unknown key', () => {
    expect(recordColorMap['unknown']).toBeUndefined();
  });
});
