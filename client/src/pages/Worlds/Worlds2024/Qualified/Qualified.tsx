import { useTournamentContext } from 'providers/TournamentProvider';

import qualifiedPlayers from '../data/qualifiedPlayers.json';

import { Paragraph } from 'components/Paragraph';
import { DivisionTabs } from 'components/DivisionTabs';

export const Qualified = () => {
  console.log(qualifiedPlayers);
  const { tournament } = useTournamentContext();
  return (
    <div className="flex flex-col gap-4">
      <Paragraph>
        Congratulations also to those who managed to qualify for the 2024 World
        Championships.
      </Paragraph>

      <DivisionTabs divisions={tournament.players} />
    </div>
  );
};
