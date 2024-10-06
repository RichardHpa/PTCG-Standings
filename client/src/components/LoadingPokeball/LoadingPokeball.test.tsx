import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { LoadingPokeball } from './LoadingPokeball';

describe('LoadingPokeball', () => {
  test('renders loading pokeball', () => {
    render(<LoadingPokeball />);
    const pokeball = screen.getByRole('progress', { name: /loading/i });
    expect(pokeball).toBeInTheDocument();
  });

  test('can renders alt text', () => {
    render(<LoadingPokeball alt="Loading..." showAlt />);
    const altText = screen.getByText('Loading...');
    expect(altText).toBeInTheDocument();
  });
});
