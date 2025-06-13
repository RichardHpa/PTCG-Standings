import '@tanstack/react-table'; //or vue, svelte, solid, qwik, etc.

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    columnWidth?: string;
    align?: 'left' | 'right' | 'center';
    // we use link as a meta prop so we can render a link in the cell to allow users to use the browsers link functionality
    link?: (row: Row<TData>) => string | undefined;
  }
}
