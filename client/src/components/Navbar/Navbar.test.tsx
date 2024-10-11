import { describe, expect, test } from 'vitest';
import { render, screen } from 'tests/testingLibrary';

import { Navbar } from './Navbar';

describe('Navbar', () => {
  test('renders navbar', () => {
    render(<Navbar />);
    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();
  });

  test('renders the Logo and site name', () => {
    render(<Navbar />);
    const logo = screen.getByRole('img', { name: 'PTCG Standings.live' });
    expect(logo).toBeInTheDocument();
    const siteName = screen.getByRole('heading', { name: 'PTCG Standings' });
    expect(siteName).toBeInTheDocument();
  });
});
