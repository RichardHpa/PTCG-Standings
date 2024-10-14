import { describe, expect, test, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Button', () => {
  test('renders default button', () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole('button', { name: /Default/i });
    expect(button).toBeInTheDocument();
  });

  test('renders Button with onClick', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Test</Button>);
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => expect(onClick).toHaveBeenCalled());
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('renders Button with type', () => {
    render(<Button type="submit">Test</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  test.each([['contained'], ['outlined'], ['ghost']] as const)(
    'renders Button with variant %s',
    variant => {
      const { container } = render(
        <Button variant={variant}>{variant}</Button>,
      );
      expect(container).toMatchSnapshot();
    },
  );
});
