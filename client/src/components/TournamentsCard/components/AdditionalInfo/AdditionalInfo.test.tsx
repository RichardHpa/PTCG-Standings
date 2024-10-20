import { describe, expect, test } from 'vitest';
import { render, screen } from 'tests/testingLibrary';

import { AdditionalInfo } from './AdditionalInfo';

import {
  runningTournament,
  notStartedTournament,
  finishedTournament,
} from 'mocks/fixtures/tournaments';

describe('TournamentsCard/AdditionalInfo', () => {
  test('renders round info', () => {
    render(
      <AdditionalInfo
        winners={runningTournament.winners}
        roundNumbers={runningTournament.roundNumbers}
      />,
    );
    expect(
      screen.getByText('Masters currently on round 17'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Seniors currently on round 10'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Juniors currently on round 9'),
    ).toBeInTheDocument();
  });

  test('renders nothing if no round or winner info', () => {
    render(
      <AdditionalInfo
        winners={notStartedTournament.winners}
        roundNumbers={notStartedTournament.roundNumbers}
      />,
    );
    expect(
      screen.queryByText('Masters currently on round 17'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('Seniors currently on round 10'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText('Juniors currently on round 9'),
    ).not.toBeInTheDocument();

    expect(screen.queryByText('Masters winner:')).not.toBeInTheDocument();
    expect(screen.queryByText('Masters winner:')).not.toBeInTheDocument();
    expect(screen.queryByText('Masters winner:')).not.toBeInTheDocument();
  });

  test('renders winner info', () => {
    render(
      <AdditionalInfo
        winners={finishedTournament.winners}
        roundNumbers={finishedTournament.roundNumbers}
      />,
    );
    expect(screen.getByText('Masters winner Ian R.')).toBeInTheDocument();
    expect(screen.getByText('Seniors winner Regan R.')).toBeInTheDocument();
    // This tournament is fixed to not have a juniors division
    expect(screen.queryByText('Juniors winner:')).not.toBeInTheDocument();
  });
});
