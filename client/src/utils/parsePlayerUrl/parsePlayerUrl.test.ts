import { describe, expect, test } from 'vitest';

import { parsePlayerUrl, formatPlayerNameToUrl } from './parsePlayerUrl';

describe('parsePlayerUrl', () => {
  test('returns the same string when input is an empty string', () => {
    expect(parsePlayerUrl('')).toBe('');
  });

  test('returns the same string when input is a single word', () => {
    expect(parsePlayerUrl('hello')).toBe('hello');
  });

  test('replaces underscores with spaces', () => {
    expect(parsePlayerUrl('hello_world')).toBe('hello world');
    expect(parsePlayerUrl('my_variable_name')).toBe('my variable name');
  });
});

describe('formatPlayerNameToUrl', () => {
  test('returns the same string when input is an empty string', () => {
    expect(formatPlayerNameToUrl('')).toBe('');
  });

  test('returns the same string when input is a single word', () => {
    expect(formatPlayerNameToUrl('hello')).toBe('hello');
  });

  test('replaces spaces with underscores', () => {
    expect(formatPlayerNameToUrl('hello world')).toBe('hello_world');
    expect(formatPlayerNameToUrl('my variable name')).toBe('my_variable_name');
  });
});
