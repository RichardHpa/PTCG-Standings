import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { formatRecord } from './formatRecord';

describe('formatRecord', () => {
  test('returns if all values are positive', () => {
    render(formatRecord({ wins: 5, losses: 4, ties: 2 }));
    expect(screen.getByLabelText('5-4-2')).toBeInTheDocument();
  });

  test('returns the formatted record', () => {
    render(formatRecord({ wins: 5, losses: 4, ties: 0 }));
    expect(screen.getByLabelText('5-4-0')).toBeInTheDocument();
  });

  test('returns null if wins is negative', () => {
    render(formatRecord({ wins: -1, losses: 4, ties: 2 }));
    expect(screen.queryByLabelText('5-4-2')).not.toBeInTheDocument();
  });

  test('returns null if losses is negative', () => {
    render(formatRecord({ wins: 5, losses: -1, ties: 2 }));
    expect(screen.queryByLabelText('5-4-2')).not.toBeInTheDocument();
  });

  test('returns null if ties is negative', () => {
    render(formatRecord({ wins: 5, losses: 4, ties: -1 }));
    expect(screen.queryByLabelText('5-4-2')).not.toBeInTheDocument();
  });

  test('returns if wins are 0', () => {
    render(formatRecord({ wins: 0, losses: 4, ties: 2 }));
    expect(screen.getByLabelText('0-4-2')).toBeInTheDocument();
  });

  test('returns if losses are 0', () => {
    render(formatRecord({ wins: 5, losses: 0, ties: 2 }));
    expect(screen.getByLabelText('5-0-2')).toBeInTheDocument();
  });

  test('returns if ties are 0', () => {
    render(formatRecord({ wins: 5, losses: 4, ties: 0 }));
    expect(screen.getByLabelText('5-4-0')).toBeInTheDocument();
  });

  test('returns null if wins is 0 and losses is negative', () => {
    render(formatRecord({ wins: 0, losses: -1, ties: 2 }));
    expect(screen.queryByLabelText('0-4-2')).not.toBeInTheDocument();
  });

  test('returns null if wins is 0 and ties is negative', () => {
    render(formatRecord({ wins: 0, losses: 4, ties: -1 }));
    expect(screen.queryByLabelText('0-4-2')).not.toBeInTheDocument();
  });

  test('returns null if losses is 0 and wins is negative', () => {
    render(formatRecord({ wins: -1, losses: 0, ties: 2 }));
    expect(screen.queryByLabelText('5-0-2')).not.toBeInTheDocument();
  });
});
