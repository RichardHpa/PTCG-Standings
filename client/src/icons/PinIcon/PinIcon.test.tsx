import { describe, expect, test } from 'vitest';
import { render } from 'tests/testingLibrary';

import { PinIcon } from './PinIcon';

describe('PinIcon', () => {
  test('matches snapshot', () => {
    const { asFragment } = render(<PinIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
