import { tw } from 'utils/tailwindClassName';

export const columnClasses = {
  base: tw`flex flex-1 px-4 py-3`,
  size: {
    small: tw`max-w-24`,
    medium: tw`max-w-32`,
  },
  align: {
    right: tw`justify-end`,
    left: tw`justify-start`,
    center: tw`justify-center`,
  },
};
