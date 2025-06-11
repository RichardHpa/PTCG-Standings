import type { Table } from '@tanstack/react-table';

export function getGridColumns<T>(table: Table<T>): string {
  return table
    .getVisibleFlatColumns()
    .map(column => {
      return column.columnDef.meta?.columnWidth ?? 'minmax(200px, 1fr)';
    })
    .join(' ');
}
