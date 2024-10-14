import { describe, expect, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IconButton } from './IconButton';
import { SunIcon } from '@heroicons/react/16/solid';

describe('IconButton', () => {
  test('renders default IconButton', () => {
    render(<IconButton alt="test" icon={<SunIcon />} />);
    const button = screen.getByRole('button', { name: /test/i });
    expect(button).toBeInTheDocument();
  });

  test('renders IconButton with onClick', async () => {
    const onClick = vi.fn();
    render(<IconButton alt="test" icon={<SunIcon />} onClick={onClick} />);
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(onClick).toHaveBeenCalled());
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('renders IconButton with type', () => {
    render(<IconButton alt="test" icon={<SunIcon />} type="submit" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  test.each([['contained'], ['outlined'], ['ghost']] as const)(
    'renders IconButton with variant %s',
    variant => {
      const { container } = render(
        <IconButton alt="test" icon={<SunIcon />} variant={variant} />,
      );
      expect(container).toMatchSnapshot();
    },
  );
});
