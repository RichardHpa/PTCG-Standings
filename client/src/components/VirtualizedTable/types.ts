import type { ColumnDef } from '@tanstack/react-table';

export interface VirtualizedTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  overscan?: number;
  showHeader?: boolean;
}

export { ColumnDef };
