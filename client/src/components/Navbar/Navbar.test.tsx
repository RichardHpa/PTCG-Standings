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

  test('renders the Buy Me a Booster button', () => {
    render(<Navbar />);
    const button = screen.getByRole('link', { name: 'Buy me a booster pack' });
    expect(button).toBeInTheDocument();
  });

  test('renders Navigation links', () => {
    render(<Navbar />);
    const worlds2024 = screen.getByRole('button', { name: 'Worlds 2024' });
    expect(worlds2024).toBeInTheDocument();
    const about = screen.getByRole('link', { name: 'About' });
    expect(about).toBeInTheDocument();
    const tournaments = screen.getByRole('link', { name: 'Tournaments' });
    expect(tournaments).toBeInTheDocument();
  });
});
