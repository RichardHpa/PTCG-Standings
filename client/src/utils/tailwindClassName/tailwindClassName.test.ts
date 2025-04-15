import { describe, expect, test } from 'vitest';

import { tw } from './tailwindClassName';

describe('tailwindClassName', () => {
  test('returns the correct class name for a given key', () => {
    expect(tw`text-red-500`).toBe('text-red-500');
  });

  test('returns the correct class name for a given key with multiple classes', () => {
    expect(tw`bg-blue-500 text-red-500`).toBe('bg-blue-500 text-red-500');
  });

  test('returns the correct class name for a given key with dynamic values', () => {
    const color = 'green';
    expect(tw`bg-${color}-500`).toBe('bg-green-500');
  });

  test('returns the correct class name for a given key with multiple dynamic values', () => {
    const color1 = 'blue';
    const color2 = 'red';
    expect(tw`bg-${color1}-500 text-${color2}-500`).toBe(
      'bg-blue-500 text-red-500',
    );
  });
  test('returns the correct class name for a given key with template literals', () => {
    const color = 'yellow';
    expect(tw`bg-${color}-500`).toBe('bg-yellow-500');
  });

  test('returns the correct class name for a given key with multiple template literals', () => {
    const color1 = 'purple';
    const color2 = 'orange';
    expect(tw`bg-${color1}-500 text-${color2}-500`).toBe(
      'bg-purple-500 text-orange-500',
    );
  });
});
