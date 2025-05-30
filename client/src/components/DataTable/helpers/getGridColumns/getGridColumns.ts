import type { Table } from '@tanstack/react-table';

export function getGridColumns<T>(table: Table<T>): string {
  return table
    .getAllLeafColumns()
    .map(column => {
      return column.columnDef.meta?.columnWidth ?? 'minmax(0, 1fr)';
    })
    .join(' ');
}
