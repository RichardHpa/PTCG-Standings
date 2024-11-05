import { tw } from 'utils/tailwindClassName';

export const virtualizedTableClasses = {
  tableClasses: tw`w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right`,
  theadClasses: tw`bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400`,
  thtrClasses: tw`border-b-2 border-gray-600 last-of-type:border-b-0`,
  thClasses: tw`border-r-2 border-gray-600 px-6 py-3 last-of-type:border-r-0`,
  tbodytrClasses: tw`border-b bg-white dark:border-gray-700 dark:bg-gray-800`,
  tbodytdClasses: tw`px-6 py-4`,
};
