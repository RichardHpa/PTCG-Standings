import { describe, expect, test } from 'vitest';
import { render, screen } from 'tests/testingLibrary';
import userEvent from '@testing-library/user-event';

import { ThemeToggle } from './ThemeToggle';

describe('ThemeToggle', () => {
  test('renders ThemeToggleButton', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('renders sun icon in light mode', () => {
    render(<ThemeToggle />);

    expect(screen.getByText('Switch to dark mode'));
  });

  test('clicking button toggles theme', async () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');

    expect(screen.getByText('Switch to dark mode'));
    expect(screen.queryByText('Switch to light mode')).not.toBeInTheDocument();
    await userEvent.click(button);

    expect(screen.getByText('Switch to light mode'));
    expect(screen.queryByText('Switch to dark mode')).not.toBeInTheDocument();
  });
});
