import { describe, expect, test } from 'vitest';
import { render, screen } from 'tests/testingLibrary';

import { NavLink } from './NavLink';

describe('NavLink', () => {
  test('renders a link', () => {
    render(<NavLink to="/about">About</NavLink>);
    const link = screen.getByRole('link', { name: 'About' });
    expect(link).toBeInTheDocument();
  });

  test('renders a link with a custom color', () => {
    render(
      <NavLink to="/about" color="secondary">
        About
      </NavLink>,
    );
    const link = screen.getByRole('link', { name: 'About' });
    expect(link).toHaveClass('hover:text-secondary');
  });
});
