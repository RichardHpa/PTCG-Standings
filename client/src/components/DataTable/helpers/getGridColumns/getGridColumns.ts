import type { Column } from '@tanstack/react-table';

export function getGridColumns<T>(
  visibleColumns: Column<T, unknown>[],
): string {
  return visibleColumns
    .map(column => {
      return column.columnDef.meta?.columnWidth ?? 'minmax(200px, 1fr)';
    })
    .join(' ');
}
