import { ColumnProps as RawColumnProps } from './Column/types';

import type { ReactNode } from 'react';

export interface ColumnProps<T>
  extends Omit<RawColumnProps, 'children' | 'classes'> {
  header: string;
  render: (row: T) => JSX.Element;
  classes?: (row: T) => string;
  hiddenXs?: boolean;
}

export interface VirtualizedTableProps<T> {
  tableId: string;
  type?: 'window' | 'container';
  columns: ColumnProps<T>[];
  data: T[];
  header?: 'sticky' | 'static' | 'none';
  noDataMessage?: ReactNode;
  containerRef: HTMLElement | null;
  onRowClick?: (row: T) => void;
  scrollToIndex?: number;
  estimateSize: number;
}
