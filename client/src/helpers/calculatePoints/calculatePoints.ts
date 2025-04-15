import type { RecordProps } from 'types/standing';

const points: RecordProps = {
  wins: 3,
  losses: 0,
  ties: 1,
};

const objKeys: <Obj>(o: Obj) => (keyof Obj)[] = Object.keys;

export const calculatePoints = (record: RecordProps) => {
  const recordKeys = objKeys(record);

  let totalPoints = 0;
  recordKeys.forEach(key => {
    if (record[key] < 0) {
      throw new Error(`Points for ${key} cannot be negative`);
    }

    const totalPointsPerRecord = record[key] * points[key];
    return (totalPoints += totalPointsPerRecord);
  });

  return totalPoints;
};
