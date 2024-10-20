import { describe, expect, test } from 'vitest';
import { render, screen } from 'tests/testingLibrary';

import { Card } from './Card';

describe('Card', () => {
  test('renders the component', () => {
    render(<Card title="card title">children</Card>);
    expect(
      screen.getByRole('heading', { level: 2, name: 'card title' }),
    ).toBeInTheDocument();

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  test('render an action', () => {
    render(
      <Card title="card title" action={<button>action</button>}>
        children
      </Card>,
    );
    expect(screen.getByRole('button', { name: 'action' })).toBeInTheDocument();
  });
});
