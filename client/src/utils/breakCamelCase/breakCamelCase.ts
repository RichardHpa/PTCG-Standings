const regex = /(?=[A-Z])|(?<=[a-z])(?=\d)/g;
export const breakCamelCase = (camelCase: string) => {
  camelCase = camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  return camelCase.split(regex).join(' ');
};
