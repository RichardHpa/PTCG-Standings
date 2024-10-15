import { describe, expect, test } from 'vitest';
import { render, screen, renderHook, act } from '@testing-library/react';

import { ColorModeProvider, useColorMode, Theme } from './ColorModeProvider';

const TestComponent = () => {
  const [mode] = useColorMode();
  return <div>{mode}</div>;
};

describe('ColorModeProvider', () => {
  describe('Provider', () => {
    test('returns light mode by default', () => {
      render(<TestComponent />, { wrapper: ColorModeProvider });

      expect(screen.getByText('light')).toBeInTheDocument();
    });
  });

  describe('useColorMode', () => {
    test('returns light mode by default', () => {
      const { result } = renderHook(() => useColorMode(), {
        wrapper: ColorModeProvider,
      });

      expect(result.current[0]).toBe('light');
    });

    test('can change to dark mode', () => {
      const { result } = renderHook(() => useColorMode(), {
        wrapper: ColorModeProvider,
      });

      expect(result.current[0]).toBe('light');

      const [, setColorMode] = result.current;

      act(() => {
        setColorMode(Theme.DARK);
      });

      expect(result.current[0]).toBe('dark');
    });
  });
});
