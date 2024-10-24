import { Outlet } from 'react-router-dom';

import { useTournamentContext } from 'providers/TournamentProvider';

import { DivisionTabs } from 'components/DivisionTabs';

export const DivisionOutlet = () => {
  const { tournament } = useTournamentContext();

  return (
    <div className="flex flex-col gap-4">
      <DivisionTabs divisions={tournament.players} />

      <div>
        <Outlet />
      </div>
    </div>
  );
};
