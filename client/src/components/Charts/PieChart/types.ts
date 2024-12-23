export interface FormattedData {
  name: string;
  y: number;
  color: string | null;
}
export interface PieChartProps {
  chartName: string;
  data: FormattedData[];
}
