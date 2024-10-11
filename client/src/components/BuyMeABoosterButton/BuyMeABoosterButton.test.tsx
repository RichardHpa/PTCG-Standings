import { describe, expect, test } from 'vitest';
import { render, screen } from 'tests/testingLibrary';

import { BuyMeABoosterButton } from './BuyMeABoosterButton';

describe('BuyMeABoosterButton', () => {
  test('renders Buy Me a Booster button', () => {
    render(<BuyMeABoosterButton />);
    const button = screen.getByRole('link', { name: 'Buy me a booster pack' });
    expect(button).toBeInTheDocument();
  });

  test('renders the image', () => {
    render(<BuyMeABoosterButton />);
    const image = screen.getByRole('img', { name: 'Buy me a booster pack' });
    expect(image).toBeInTheDocument();
  });

  test('has the correct href', () => {
    render(<BuyMeABoosterButton />);
    const button = screen.getByRole('link', { name: 'Buy me a booster pack' });
    expect(button).toHaveAttribute(
      'href',
      'https://www.buymeacoffee.com/richardhpa',
    );
  });
});
