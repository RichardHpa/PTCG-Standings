import { describe, expect, test } from 'vitest';
import { render, screen } from 'tests/testingLibrary';

import { Indicator } from './Indicator';

describe('Indicator', () => {
  test('renders the component', () => {
    render(<Indicator />);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('matches the snapshot', () => {
    const { asFragment } = render(<Indicator />);
    expect(asFragment()).toMatchSnapshot();
  });
});
