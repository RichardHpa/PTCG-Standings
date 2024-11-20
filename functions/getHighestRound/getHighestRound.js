// NOTE: since the API returns the last round for a division if another division is at a higher round, we can just get the highest round number and it 'should' be alright. This works mainly for when all divisions are at the same round so we only have to call the api once rather than multiple times
export const getHighestRound = roundObject => {
  const roundNumbers = Object.values(roundObject);
  return Math.max(...roundNumbers);
};
