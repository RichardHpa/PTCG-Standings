import clsx from 'clsx';

import { recordColorMap } from 'utils/recordColorMap';

import type { RecordProps } from 'types/standing';

// NOTE: We need to check the value and return a boolean as 0 is a value value but is falsy
const checkValue = (value: number) => {
  return value >= 0 ? true : false;
};

export const formatRecord = (record: RecordProps, color: boolean = false) => {
  if (!record) return null;
  if (
    !checkValue(record.wins) ||
    !checkValue(record.losses) ||
    !checkValue(record.ties)
  )
    return null;

  return (
    <span aria-label={`${record.wins}-${record.losses}-${record.ties}`}>
      <span
        className={clsx({
          [recordColorMap.W]: color && record.wins,
        })}
      >
        {record.wins}
      </span>
      -
      <span
        className={clsx({
          [recordColorMap.L]: color && record.losses,
        })}
      >
        {record.losses}
      </span>
      -
      <span
        className={clsx({
          [recordColorMap.T]: color && record.ties,
        })}
      >
        {record.ties}
      </span>
    </span>
  );
};
