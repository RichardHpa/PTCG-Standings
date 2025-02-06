import { useMemo } from 'react';

import { usePlayerContext } from 'providers/PlayerProvider';
import { useTournamentContext } from 'providers/TournamentProvider';

import { DecklistGrid } from 'components/DecklistGrid';
import { Archetypes } from 'components/Archetypes';
import { SEO } from 'components/SEO';
import { Accordion } from 'components/Accordion';
import { Paragraph } from 'components/Paragraph';

import { formatPlayerName } from 'helpers/formatPlayerName';

import { githubIssues } from 'constants/github';

import type { DeckList as DecklistType, Standing } from 'types/standing';
import type { FC } from 'react';

const hasDecklist = (player: Standing) => {
  return Boolean(player.decklist && typeof player.decklist === 'object');
};

const DecklistInner: FC<{ decklist: DecklistType }> = ({ decklist }) => {
  return <DecklistGrid decklist={decklist} />;
};

export const Decklist = () => {
  const { players } = usePlayerContext();
  const { tournament } = useTournamentContext();

  const items = useMemo(() => {
    return players.map(player => {
      const playerHasDecklist = hasDecklist(player);
      return {
        title: playerHasDecklist
          ? `${player.name} - currently at ${player.placing} place`
          : `${player.name} - Decklist not found`,
        action: player.archetype ? (
          <Archetypes archetype={player.archetype} size="small" />
        ) : undefined,
        content: playerHasDecklist ? (
          <DecklistInner decklist={player.decklist as DecklistType} />
        ) : (
          <div>Decklist not found</div>
        ),
        disabled: !playerHasDecklist,
      };
    });
  }, [players]);

  if (players.length > 1) {
    return (
      <div className="flex flex-col gap-4">
        <SEO
          title={`${formatPlayerName(players[0].name, false)} decklist's from ${tournament.name}`}
        />
        <Accordion items={items} />
      </div>
    );
  }
  const player = players[0];

  if (!hasDecklist(player)) {
    return <div>Decklist not found</div>;
  }

  return (
    <>
      <SEO
        title={`${formatPlayerName(player.name, false)} decklist from ${tournament.name}`}
      />

      <div className="flex flex-col gap-4">
        <DecklistInner decklist={player.decklist as DecklistType} />
        <Paragraph size="sm">
          <i>
            If you believe there is an error in the decklist, please raise an
            issue with us on{' '}
            <a
              href={githubIssues}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline dark:text-blue-400"
            >
              github
            </a>{' '}
            and we will fix it.
          </i>
        </Paragraph>
      </div>
    </>
  );
};
