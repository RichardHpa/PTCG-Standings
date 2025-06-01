import type { FC, ReactNode } from 'react';

interface TextCellProps {
  /**
   * Provide the value to render in the cell
   */
  children: ReactNode;
}

export const CellWrapper: FC<TextCellProps> = ({ children }) => {
  return <div className="w-full px-4 py-3">{children}</div>;
};
