import { useRef, useMemo } from 'react';
import * as Highcharts from 'highcharts';
import { HighchartsReact } from 'highcharts-react-official';

import { breakCamelCase } from 'utils/breakCamelCase';

import { useResponsive } from 'hooks/useResponsive';

import { chartColors } from '../chartColors';

import { useColorMode, Theme } from 'providers/ColorModeProvider';

import type { PieChartProps, FormattedData } from './types';
import type { FC } from 'react';

const getHighChartsOptions = (
  data: FormattedData[],
  theme: Theme,
  name: string,
  isMobile: boolean,
) => {
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
      headerFormat: '',
      pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    legend: {
      align: isMobile ? 'center' : 'right',
      verticalAlign: isMobile ? 'bottom' : 'middle',
      layout: isMobile ? 'horizontal' : 'vertical',
      floating: false,
      navigation: {
        activeColor: '#ea580c',
        style: {
          color: theme === Theme.DARK ? 'white' : 'black',
        },
      },
      itemStyle: {
        color: theme === Theme.DARK ? 'white' : 'black',
      },
      itemHoverStyle: {
        color: theme === Theme.DARK ? 'white' : 'black',
        textDecoration: 'underline',
      },
      // @ts-expect-error - TS doesn't like the this context
      labelFormatter: function () {
        // @ts-expect-error - TS doesn't like the this context
        const { name, y } = this;
        return `${breakCamelCase(name)} - ${y}`;
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: 'default',
        showInLegend: true,
        borderWidth: 0,
        borderRadius: 0,
      },
      series: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: [
          {
            enabled: isMobile ? false : true,
            distance: 20,
            useHtml: true,
            // @ts-expect-error - TS doesn't like the this context
            formatter: function () {
              // @ts-expect-error - TS doesn't like the this context
              const { name } = this;
              return `${breakCamelCase(name)}`;
            },
            style: {
              color: theme === Theme.DARK ? 'white' : 'black',
            },
          },
          {
            enabled: true,
            distance: -40,
            format: '{point.percentage:.1f}%',
            style: {
              fontSize: '1.2em',
              textOutline: 'none',
              opacity: 0.7,
            },
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
        name: name,
        type: 'pie',
        data: data,
      },
    ],
  };
};

export const PieChart: FC<PieChartProps> = ({ data, chartName }) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [mode] = useColorMode();
  const responsive = useResponsive();
  const isMobile = useMemo(() => responsive.md === false, [responsive]);

  const options = getHighChartsOptions(data, mode, chartName, isMobile);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
};
