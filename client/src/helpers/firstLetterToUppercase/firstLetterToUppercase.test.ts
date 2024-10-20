import { describe, expect, test } from 'vitest';

import { firstLetterToUppercase } from './firstLetterToUppercase';

describe('firstLetterToUppercase', () => {
  test('returns the string with the first letter capitalized', () => {
    expect(firstLetterToUppercase('hello')).toBe('Hello');
  });

  test('if sentence is passed, only the first letter of the first word is capitalized', () => {
    expect(firstLetterToUppercase('hello world')).toBe('Hello world');
  });
});
