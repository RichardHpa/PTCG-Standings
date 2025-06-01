import type { FC } from 'react';

export interface NumberCellProps {
  /**
   * Provide the value to render in the cell
   */
  value?: number;
  /**
   * Provide the number of fraction digits to show.
   * The displayed number will be rounded or zeroes will be attached if needed.
   */
  fractionDigits?: number;
}

/**
 * Provide a string with a BCP 47 language tag or an Intl.Locale instance,
 * or an array of such locale identifiers.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales
 */
const LOCALE = 'en-US';

export const NumberCell: FC<NumberCellProps> = ({
  value,
  fractionDigits = 0,
}) => {
  /**
   * Intl.NumberFormat is a standard browser built-in object
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   */
  const formattedValue =
    value !== undefined
      ? new Intl.NumberFormat(LOCALE, {
          style: 'decimal',
          minimumFractionDigits: fractionDigits,
          maximumFractionDigits: fractionDigits,
        }).format(value)
      : '';

  return (
    <div
      className="w-full truncate px-4 py-3 text-right tabular-nums"
      title={formattedValue}
    >
      {formattedValue}
    </div>
  );
};
