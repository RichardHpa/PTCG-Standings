import { useTournamentContext } from 'providers/TournamentProvider';

import { Heading } from 'components/Heading';
import { Input } from 'components/Forms/Input';
import { Select } from 'components/Forms/Select';
import { Button } from 'components/Button';

import type { FormEvent } from 'react';

const selectOptions = [
  { value: 'finished', label: 'Finished' },
  { value: 'running', label: 'Running' },
  { value: 'not_started', label: 'Not Started' },
  { value: 'check_in', label: 'Check In' },
];

export const Tournament = () => {
  const { tournament } = useTournamentContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <Heading level="4">{tournament.name}</Heading>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-4">
          <div className="sm:col-span-2">
            <Input
              label="Tournament Name"
              type="text"
              name="name"
              value={tournament.name}
              disabled
              onChange={() => {}}
            />
          </div>

          <div className="w-full">
            <Select
              label="Status"
              name="status"
              options={selectOptions}
              value={tournament.tournamentStatus}
              onChange={() => {}}
            />
          </div>

          <div className="w-full">
            <Input
              name="rk9link"
              label="RK9 Link"
              value={tournament.rk9link}
              onChange={() => {}}
            />
          </div>
        </div>
        <div className="mt-4">
          <Button type="submit">Update Tournament</Button>
        </div>
      </form>
      <pre>{JSON.stringify(tournament, null, 2)}</pre>
    </div>
  );
};
