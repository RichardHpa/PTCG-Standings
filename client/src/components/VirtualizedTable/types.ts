import { ColumnProps as RawColumnProps } from './Column/types';

import type { ReactNode, RefObject } from 'react';

export interface ColumnProps<T>
  extends Omit<RawColumnProps, 'children' | 'classes'> {
  header: string;
  render: (row: T) => JSX.Element;
  classes?: (row: T) => string;
}

export interface VirtualizedTableProps<T> {
  tableId: string;
  type?: 'window' | 'container';
  columns: ColumnProps<T>[];
  data: T[];
  header?: 'sticky' | 'static' | 'none';
  noDataMessage?: ReactNode;
  containerRef: RefObject<HTMLElement>;
  onRowClick?: (row: T) => void;
  scrollToIndex?: number;
  estimateSize: number;
}
