import { useMemo, useState, useEffect } from 'react';
import { githubIssues } from 'constants/github';
import { useParams } from 'react-router-dom';

import { getArchetype } from 'helpers/getArchetype';
import { breakCamelCase } from 'utils/breakCamelCase';

import { Notice } from 'components/Notice';
import { Link } from 'components/Link';
import { Card } from 'components/Card';
import { Paragraph } from 'components/Paragraph';
import { PieChart } from 'components/Charts/PieChart';
import { SEO } from 'components/SEO';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { TournamentDeckAnalysis, Tournament } from 'types/tournament';
import type { Division } from 'types/divisions';
import type { Sprites } from 'constants/archetypes';

const OfficialDeckAnalysis = ({ tournament }: { tournament: Tournament }) => {
  if (!tournament.deckAnalysis) return null;
  const deckAnalysisKeys = Object.keys(tournament.deckAnalysis) as Array<
    keyof TournamentDeckAnalysis
  >;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {deckAnalysisKeys.map((day, index) => {
        const imageUrl = tournament?.deckAnalysis?.[day];
        if (!imageUrl) return null; // If the URL is not available, return null
        return (
          <Card key={index} title={breakCamelCase(day)}>
            <img src={`/deckAnalysis/${tournament.id}/${imageUrl}`} />
          </Card>
        );
      })}
    </div>
  );
};

interface x {
  count: number;
  sprites: Sprites[];
}

type ArchetypeCount = {
  [key in string]: x;
};

interface ArchetypesCounts {
  totalCount: number;
  archetypes: ArchetypeCount;
  noDecklist: number;
}

const useGetArchetypeCounts = (division: Division) => {
  const { divisions } = useTournamentContext();

  const divisionData = useMemo(() => {
    return divisions.find(x => x.division === division);
  }, [divisions, division]);

  const counts = useMemo(() => {
    if (!divisionData) return undefined;

    const archetypeCounts: ArchetypesCounts = {
      totalCount: divisionData.data.length,
      archetypes: {},
      noDecklist: 0,
    };

    const standings = divisionData.data;
    standings.forEach(standing => {
      const archetype = getArchetype(standing.decklist);
      if (archetype) {
        if (!archetypeCounts.archetypes[archetype.name]) {
          archetypeCounts.archetypes[archetype.name] = {
            count: 1,
            sprites: archetype.sprites,
          };
        } else {
          archetypeCounts.archetypes[archetype.name].count += 1;
        }
      } else {
        archetypeCounts.noDecklist += 1;
      }
    });

    return archetypeCounts;
  }, [divisionData]);

  return { ...counts };
};

interface FormattedData {
  name: string;
  y: number;
  color: string | null;
}

interface UseGetFormattedDataNotReady {
  formattedData: undefined;
  ready: false;
  data: ArchetypesCounts;
}

interface UseGetFormattedDataReady {
  formattedData: FormattedData[];
  ready: true;
  data: ArchetypesCounts;
}

const useGetFormattedData = (division: Division) => {
  const [ready, setReady] = useState(false);
  const [formattedData, setFormattedData] = useState<FormattedData[]>();
  const data = useGetArchetypeCounts(division);

  useEffect(() => {
    if (data.archetypes) {
      if (Object.keys(data.archetypes).length === 0) {
        setReady(true);
        return;
      }

      const sortedData = Object.entries(data.archetypes).sort(
        ([, a], [, b]) => b.count - a.count,
      );

      // move unknown to the end
      const unknownIndex = sortedData.findIndex(([key]) => key === 'Unknown');
      const unknown = sortedData.splice(unknownIndex, 1);
      sortedData.push(unknown[0]);

      const formattedData = sortedData.map(([key, value]) => ({
        name: key,
        y: value.count,
        color: null,
      })) as FormattedData[];

      formattedData[formattedData.length - 1].color = 'lightgrey';

      setFormattedData(formattedData);
      setReady(true);
    }
  }, [data.archetypes]);

  if (!ready) {
    return {
      formattedData: undefined,
      ready: false,
      data,
    } as UseGetFormattedDataNotReady;
  }

  return {
    formattedData,
    ready,
    data,
  } as UseGetFormattedDataReady;
};

export const Stats = () => {
  const { tournament } = useTournamentContext();
  const { division = 'masters' } = useParams() as { division: Division };
  const res = useGetFormattedData(division);

  if (!res.ready) {
    return <>Loading</>;
  }

  const hasGraph = res.data.totalCount - res.data.noDecklist > 0;

  if (!hasGraph && !tournament.deckAnalysis) {
    return (
      <Notice>
        We currently don't have any of the deck analysis for the{' '}
        {tournament.name}. If you know of, or can get the official deck
        analysis, then please get in touch with us via our{' '}
        <Link href={githubIssues}>Github</Link> page as we would love to add it
        to the site.
      </Notice>
    );
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <SEO title={`${tournament.name} ${division} statistics`} />

      <PieChart data={res.formattedData} chartName="Archetypes" />

      <Paragraph size="sm">
        <i>
          *We only have decklists for{' '}
          <b>
            {res.data.totalCount - res.data.noDecklist}/
            {tournament.players[division]}
          </b>{' '}
          players in the {division} division for this tournament. This graph
          only shows the breakdown of the players we have decklists for, so the
          percentages may be skewed.
        </i>
      </Paragraph>

      {
        // If we have deck analysis, show the official deck analysis
        tournament.deckAnalysis && (
          <OfficialDeckAnalysis tournament={tournament} />
        )
      }
    </div>
  );
};
