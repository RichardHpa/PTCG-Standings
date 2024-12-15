import { tw } from 'utils/tailwindClassName';

export const iconButtonClasses = {
  base: tw`inline-flex items-center justify-center rounded-lg text-center text-sm font-medium`,
  size: {
    xs: tw`p-1.5`,
    sm: tw`p-2`,
    base: tw`p-2.5`,
    lg: tw`p-3`,
    xl: tw`p-4`,
  },
  icon: {
    size: {
      xs: tw`h-4 w-4`,
      sm: tw`h-4 w-4`,
      base: tw`h-4 w-4`,
      lg: tw`h-5 w-5`,
      xl: tw`h-5 w-5`,
    },
  },
};
