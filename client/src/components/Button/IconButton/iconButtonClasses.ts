import { tw } from 'utils/tailwindClassName';

export const iconButtonClasses = {
  base: tw`inline-flex items-center justify-center rounded-lg p-2.5 text-center text-sm font-medium`,
  noPadding: tw`!p-0`,
  icon: {
    base: tw`inline-flex`,
    size: {
      xs: tw`h-4 w-4`,
      sm: tw`h-4 w-4`,
      base: tw`h-10 w-10`,
      lg: tw`h-6 w-6`,
      xl: tw`h-6 w-6`,
    },
  },
};
