import { describe, expect, test } from 'vitest';

import { breakCamelCase } from './breakCamelCase';

describe('breakCamelCase', () => {
  test('returns an empty string when input is an empty string', () => {
    expect(breakCamelCase('')).toBe('');
  });

  test('returns the same string when input is a single word', () => {
    expect(breakCamelCase('hello')).toBe('Hello');
  });

  test('inserts spaces before uppercase letters in camelCase strings', () => {
    expect(breakCamelCase('helloWorld')).toBe('Hello World');
    expect(breakCamelCase('myVariableName')).toBe('My Variable Name');
  });
});
