import type { FormattedData } from 'components/Charts/PieChart/types';

// TODO: this whole area needs to be reworked so it can be reusable for all stats
export interface FormattedDataObject {
  formattedData: FormattedData[];
  totalCount: number;
  noDecklist: number;
}

export interface DeckPercentageTableProps {
  data: FormattedDataObject;
}
