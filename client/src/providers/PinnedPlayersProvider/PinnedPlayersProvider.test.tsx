import { describe, expect, test, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import {
  PinnedPlayersProvider,
  usePinnedPlayersContext,
} from './PinnedPlayersProvider';

import type { ReactNode } from 'react';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <PinnedPlayersProvider>{children}</PinnedPlayersProvider>
    </QueryClientProvider>
  );
};

beforeEach(() => {
  localStorage.clear();
});

describe('PinnedPlayersProvider', () => {
  describe('initial state', () => {
    test('starts with no pinned players', () => {
      const { result } = renderHook(() => usePinnedPlayersContext(), {
        wrapper: createWrapper(),
      });

      expect(result.current.hasPinnedPlayers).toBe(false);
      expect(result.current.localStorageValue).toEqual({});
    });
  });

  describe('isPlayerPinned', () => {
    test('returns false for an unpinned player', () => {
      const { result } = renderHook(() => usePinnedPlayersContext(), {
        wrapper: createWrapper(),
      });

      expect(result.current.isPlayerPinned('t1', 'masters', 'Alice A.')).toBe(
        false,
      );
    });

    test('returns true for a pinned player', () => {
      const { result } = renderHook(() => usePinnedPlayersContext(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.pinPlayer('t1', 'masters', 'Alice A.');
      });

      expect(result.current.isPlayerPinned('t1', 'masters', 'Alice A.')).toBe(
        true,
      );
    });
  });

  describe('pinPlayer', () => {
    test('adds a player to the pinned list', () => {
      const { result } = renderHook(() => usePinnedPlayersContext(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.pinPlayer('t1', 'masters', 'Alice A.');
      });

      expect(result.current.localStorageValue['t1']['masters']).toContain(
        'Alice A.',
      );
    });

    test('can pin multiple players in the same division', () => {
      const { result } = renderHook(() => usePinnedPlayersContext(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.pinPlayer('t1', 'masters', 'Alice A.');
      });
      act(() => {
        result.current.pinPlayer('t1', 'masters', 'Bob B.');
      });

      const pinned = result.current.localStorageValue['t1']['masters'];
      expect(pinned).toContain('Alice A.');
      expect(pinned).toContain('Bob B.');
    });

    test('can pin players in different divisions independently', () => {
      const { result } = renderHook(() => usePinnedPlayersContext(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.pinPlayer('t1', 'masters', 'Alice A.');
      });
      act(() => {
        result.current.pinPlayer('t1', 'seniors', 'Bob B.');
      });

      expect(result.current.localStorageValue['t1']['masters']).toContain(
        'Alice A.',
      );
      expect(result.current.localStorageValue['t1']['seniors']).toContain(
        'Bob B.',
      );
    });
  });

  describe('unpinPlayer', () => {
    test('removes a pinned player from the list', () => {
      const { result } = renderHook(() => usePinnedPlayersContext(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.pinPlayer('t1', 'masters', 'Alice A.');
      });
      act(() => {
        result.current.unpinPlayer('t1', 'masters', 'Alice A.');
      });

      expect(result.current.isPlayerPinned('t1', 'masters', 'Alice A.')).toBe(
        false,
      );
    });

    test('removes the tournament entry when the last player is unpinned', () => {
      const { result } = renderHook(() => usePinnedPlayersContext(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.pinPlayer('t1', 'masters', 'Alice A.');
      });
      act(() => {
        result.current.unpinPlayer('t1', 'masters', 'Alice A.');
      });

      expect(result.current.localStorageValue['t1']).toBeUndefined();
    });

    test('only removes the specified player, leaving others intact', () => {
      const { result } = renderHook(() => usePinnedPlayersContext(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.pinPlayer('t1', 'masters', 'Alice A.');
      });
      act(() => {
        result.current.pinPlayer('t1', 'masters', 'Bob B.');
      });
      act(() => {
        result.current.unpinPlayer('t1', 'masters', 'Alice A.');
      });

      expect(result.current.isPlayerPinned('t1', 'masters', 'Alice A.')).toBe(
        false,
      );
      expect(result.current.isPlayerPinned('t1', 'masters', 'Bob B.')).toBe(
        true,
      );
    });
  });

  describe('togglePlayer', () => {
    test('pins an unpinned player', () => {
      const { result } = renderHook(() => usePinnedPlayersContext(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.togglePlayer('t1', 'masters', 'Alice A.');
      });

      expect(result.current.isPlayerPinned('t1', 'masters', 'Alice A.')).toBe(
        true,
      );
    });

    test('unpins an already-pinned player', () => {
      const { result } = renderHook(() => usePinnedPlayersContext(), {
        wrapper: createWrapper(),
      });

      act(() => {
        result.current.pinPlayer('t1', 'masters', 'Alice A.');
      });
      act(() => {
        result.current.togglePlayer('t1', 'masters', 'Alice A.');
      });

      expect(result.current.isPlayerPinned('t1', 'masters', 'Alice A.')).toBe(
        false,
      );
    });
  });
});
