export const formatPlayerNameToUrl = (input: string): string => {
  // Convert to lowercase
  let result = input;
  // Replace whitespaces with -
  result = result.replace(/\s+/g, '_');
  return result;
};

export const parsePlayerUrl = (input: string): string => {
  let result = input;
  // Replace - with whitespaces
  result = result.replace(/_/g, ' ');
  return result;
};
