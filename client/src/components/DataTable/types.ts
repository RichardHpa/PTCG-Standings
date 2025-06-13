import type { TableOptions } from '@tanstack/react-table';

export interface TableProps<TData>
  extends Pick<TableOptions<TData>, 'columns' | 'data'>,
    Partial<Omit<TableOptions<TData>, 'columns' | 'data'>> {
  tableId: string;
  estimatedRowSize?: number;
  overscan?: number;
  globalScrollSync?: boolean;
  noDataMessage?: string;
  onRowClick?: (row: TData) => void;
}
