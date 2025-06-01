import type { FC } from 'react';

interface TextCellProps {
  /**
   * Provide the value to render in the cell
   */
  value?: string;
}

export const TextCell: FC<TextCellProps> = ({ value }) => {
  return (
    <div className="w-full truncate px-6 py-3" title={value}>
      {value}
    </div>
  );
};
