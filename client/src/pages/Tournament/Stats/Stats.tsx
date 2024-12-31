import { useMemo } from 'react';
import { githubIssues } from 'constants/github';
import { useParams } from 'react-router-dom';

import { breakCamelCase } from 'utils/breakCamelCase';

import { Notice } from 'components/Notice';
import { Link } from 'components/Link';
import { Card } from 'components/Card';
import { Paragraph } from 'components/Paragraph';
import { PieChart } from 'components/Charts/PieChart';
import { SEO } from 'components/SEO';
import { Heading } from 'components/Heading';

import { getArchetypeCounts } from 'hooks/getArchetypeCounts';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { TournamentDeckAnalysis, Tournament } from 'types/tournament';
import type { Division } from 'types/divisions';

const OfficialDeckAnalysis = ({
  tournament,
  division,
}: {
  tournament: Tournament;
  division: Division;
}) => {
  if (!tournament.deckAnalysis?.[division]) return null;
  const deckAnalysisKeys = Object.keys(
    tournament.deckAnalysis[division],
  ) as Array<keyof TournamentDeckAnalysis>;

  return (
    <div className="flex flex-col gap-4">
      <Heading level="3">Official deck Analysis</Heading>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {deckAnalysisKeys.map((key, index) => {
          const imageUrl = tournament.deckAnalysis?.[division]?.[key];
          if (!imageUrl) return null; // If the URL is not available, return null
          return (
            <Card key={index} title={breakCamelCase(key)}>
              <img src={`/deckAnalysis/${tournament.id}/${imageUrl}`} />
            </Card>
          );
        })}
      </div>

      <Paragraph size="sm">
        <i>
          * Percentages may be different than the graph above as the official
          deck analysis may include players that we don't have decklists for, or
          use a different method to calculate the deck archetypes.
        </i>
      </Paragraph>
    </div>
  );
};

interface FormattedData {
  name: string;
  y: number;
  color: string | null;
}

export const Stats = () => {
  const { tournament, divisionObject } = useTournamentContext();
  const { division = 'masters' } = useParams() as { division: Division };

  const formattedData = useMemo(() => {
    const res = getArchetypeCounts({ standings: divisionObject[division] });
    if (!res) return undefined;
    if (Object.keys(res.archetypes).length === 0) {
      return undefined;
    }

    const sortedData = Object.entries(res.archetypes).sort(
      ([, a], [, b]) => b - a,
    );

    const unknownIndex = sortedData.findIndex(([key]) => key === 'Unknown');
    const unknown = sortedData.splice(unknownIndex, 1);
    sortedData.push(unknown[0]);

    const formattedData = sortedData.map(([key, value]) => ({
      name: key,
      y: value,
      color: null,
    })) as FormattedData[];

    formattedData[formattedData.length - 1].color = 'lightgrey';

    return {
      formattedData,
      totalCount: res.totalCount,
      noDecklist: res.noDecklist,
    };
  }, [division, divisionObject]);

  if (!formattedData) {
    return <>Loading</>;
  }

  const hasGraph = formattedData.totalCount - formattedData.noDecklist > 0;

  if (!hasGraph && !tournament.deckAnalysis) {
    return (
      <>
        <SEO title={`${tournament.name} ${division} statistics`} />{' '}
        <Notice>
          We currently don't have any of the deck analysis for the{' '}
          {tournament.name}. If you know of, or can get the official deck
          analysis, then please get in touch with us via our{' '}
          <Link href={githubIssues}>Github</Link> page as we would love to add
          it to the site.
        </Notice>
      </>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <SEO title={`${tournament.name} ${division} statistics`} />

      <PieChart data={formattedData.formattedData} chartName="Archetypes" />

      <Paragraph size="sm">
        <i>
          *We only have decklists for{' '}
          <b>
            {formattedData.totalCount - formattedData.noDecklist}/
            {tournament.players[division]}
          </b>{' '}
          players in the {division} division for this tournament. This graph
          only shows the breakdown of the players we have decklists for, so the
          percentages may be skewed.
        </i>
      </Paragraph>

      {
        // If we have deck analysis, show the official deck analysis
        tournament?.deckAnalysis?.[division] && (
          <>
            <hr />
            <OfficialDeckAnalysis tournament={tournament} division={division} />
          </>
        )
      }
    </div>
  );
};
