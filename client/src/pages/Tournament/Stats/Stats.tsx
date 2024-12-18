import { useEffect, useMemo, useRef } from 'react';
import { githubIssues } from 'constants/github';
import { archetypes } from 'constants/archetypes';
import Chart from 'react-apexcharts';

import { Notice } from 'components/Notice';
import { Link } from 'components/Link';
import { Card } from 'components/Card';
import { getArchetypes } from 'components/Archetypes/Archetypes';

import { breakCamelCase } from 'utils/breakCamelCase';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { TournamentDeckAnalysis } from 'types/tournament';
import type { Division } from 'types/divisions';

import * as Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';

const chartColors = [
  '#4F46E5', // Indigo 600
  '#22C55E', // Green 500
  '#FACC15', // Yellow 400
  '#EF4444', // Red 500
  '#3B82F6', // Blue 500
  '#A855F7', // Purple 500
  '#14B8A6', // Teal 500
  '#F97316', // Orange 500
  '#6B7280', // Gray 500
  '#1D4ED8', // Blue 700
  '#16A34A', // Green 600
  '#D97706', // Amber 600
  '#DC2626', // Red 600
  '#9333EA', // Purple 600
  '#0EA5E9', // Sky 500
  '#10B981', // Emerald 500
  '#7C3AED', // Violet 600
  '#F43F5E', // Rose 500
  '#15803D', // Green 700
  '#EA580C', // Orange 600
];

// const highChartsOptions: Highcharts.Options =
const getHighChartsOptions = data => {
  const sortedData = Object.entries(data.archetypes).sort(
    // @ts-expect-error - TS doesn't like the sort function
    (a, b) => b[1] - a[1],
  );
  // move unknown to the end
  const unknownIndex = sortedData.findIndex(([key]) => key === 'unknown');
  const unknown = sortedData.splice(unknownIndex, 1);
  sortedData.push(unknown[0]);

  const formattedData = sortedData.map(([key, value]) => ({
    name: key,
    y: value,
  }));

  formattedData[formattedData.length - 1].color = 'pink';

  return {
    colors: chartColors,
    chart: {
      backgroundColor: undefined,
      plotBackgroundColor: undefined,
      plotBorderWidth: undefined,
      plotShadow: false,
      type: 'pie',
      height: 600,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: undefined,
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    legend: {
      align: 'right',
      verticalAlign: 'middle',
      layout: 'vertical',
      floating: false,
      itemStyle: {
        color: 'white',
      },
      labelFormat: '{name} - {y}',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
        borderWidth: 0,
        borderRadius: 0,
      },
      series: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: [
          {
            enabled: true,
            format: '{point.percentage:.1f}%',
            filter: {
              operator: '>',
              property: 'percentage',
              value: 5,
            },
          },
        ],
      },
    },
    series: [
      {
        name: 'Archetypes',
        type: 'pie',
        data: formattedData,
      },
    ],
  };
};

const useGetArchetypeCounts = (division: Division) => {
  const { divisions } = useTournamentContext();

  const divisionData = useMemo(() => {
    return divisions.find(x => x.division === division);
  }, [divisions, division]);
  // console.log('divisionData', divisionData);

  const archetypeCounts = useMemo(() => {
    if (!divisionData) return undefined;
    const archetypeCounts = {
      totalCount: divisionData.data.length,
      archetypes: {},
      noDecklist: 0,
    };
    const standings = divisionData.data;
    standings.forEach(standing => {
      if (standing.decklist) {
        const archetype = getArchetypes(standing.decklist);
        // console.log(archetype);
        const archetypeName = archetype[0];
        if (!archetypeName) {
          archetypeCounts.noDecklist += 1;
        } else {
          if (!archetypeCounts.archetypes[archetypeName]) {
            archetypeCounts.archetypes[archetypeName] = 1;
          } else {
            archetypeCounts.archetypes[archetypeName] += 1;
          }
        }
      } else {
        archetypeCounts.noDecklist += 1;
      }
    });

    // console.log('archetypeCounts', archetypeCounts);
    return archetypeCounts;

    // if (!division.standings) return archetypeCounts;

    // tournament.standings.forEach(standing => {
    //   if (standing.division !== division) return;

    //   archetypeCounts.totalCount += 1;

    //   const archetype = archetypes[standing.archetype];
    //   if (!archetypeCounts.archetypes[archetype]) {
    //     archetypeCounts.archetypes[archetype] = 1;
    //   } else {
    //     archetypeCounts.archetypes[archetype] += 1;
    //   }
    // });

    // return archetypeCounts;
  }, [divisionData]);
  console.log(archetypeCounts);

  return { ...archetypeCounts };
};

export const Stats = () => {
  const { tournament } = useTournamentContext();
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  const res = useGetArchetypeCounts('masters');

  // const options = getChartConfig(res);

  // if (!tournament.deckAnalysis) {
  //   return (
  //     <Notice>
  //       we currently don't have any of the deck analysis for the{' '}
  //       {tournament.name}. If you know of, or can get the offical deck analysis,
  //       then please get in touch with us via our{' '}
  //       <Link href={githubIssues}>Github</Link> page as we would love to add it
  //       to the site.
  //     </Notice>
  //   );
  // }

  // const deckAnalysisKeys = Object.keys(tournament.deckAnalysis) as Array<
  //   keyof TournamentDeckAnalysis
  // >;

  if (!res) return null;

  return (
    <div className="w-full">
      <HighchartsReact
        highcharts={Highcharts}
        options={getHighChartsOptions(res)}
        ref={chartComponentRef}
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* {deckAnalysisKeys.map((day, index) => {
        const imageUrl = tournament?.deckAnalysis?.[day];
        if (!imageUrl) return null; // If the URL is not available, return null
        return (
          <Card key={index} title={breakCamelCase(day)}>
            <img src={`/deckAnalysis/${tournament.id}/${imageUrl}`} />
          </Card>
        );
      })} */}
    </div>
  );
};
