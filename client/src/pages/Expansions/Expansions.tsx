import { useGetExpansions } from 'queries/useGetExpansions';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import type { Expansion } from 'types/expansions';

interface GroupedExpansions {
  [series: string]: Expansion[];
}

export const Expansions = () => {
  const { data, isLoading, error, refetch } =
    useGetExpansions<GroupedExpansions>({
      select: data => {
        if (!data?.data) return {};

        // Group expansions by series while preserving original order
        const groupedExpansions = data.data.reduce(
          (groups: GroupedExpansions, expansion: Expansion) => {
            const series = expansion.series;
            if (!groups[series]) {
              groups[series] = [];
            }
            groups[series].push(expansion);
            return groups;
          },
          {},
        );

        console.log('Grouped expansions:', groupedExpansions);
        return groupedExpansions;
      },
    });

  if (isLoading)
    return (
      <div className="flex min-h-64 items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex min-h-64 items-center justify-center">
        <div className="text-center text-red-600">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 p-3 dark:bg-red-900/20">
            <svg
              className="h-full w-full text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <Heading level="2" className="mb-2 text-xl font-semibold">
            Unable to Load Expansions
          </Heading>
          <div className="mx-auto mb-4 max-w-md">
            <Paragraph size="sm" color="default" align="center">
              There is an issue with the external API that provides our
              expansion data. This is a known issue and hopefully will be
              resolved to become more stable in the future
            </Paragraph>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => refetch()}
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Try Again
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              If the problem persists, please check back later or contact
              support.
            </p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
          Pokémon TCG Expansions
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore all available card expansions
        </p>
      </div>

      <div className="space-y-8">
        {data &&
          Object.entries(data).map(([series, expansions]) => {
            console.log(
              'Processing series:',
              series,
              'expansions:',
              expansions,
            );

            // Additional safety check
            if (!expansions || !Array.isArray(expansions)) {
              console.warn(
                'Invalid expansions data for series:',
                series,
                expansions,
              );
              return null; // Skip this series if data is invalid
            }

            return (
              <div key={series} className="space-y-4">
                {/* Series Header */}
                <div className="border-b border-gray-200 pb-2 dark:border-gray-700">
                  <Heading
                    level="2"
                    className="text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    {series}
                  </Heading>
                  <Paragraph size="sm" color="default" align="left">
                    {expansions.length} expansion
                    {expansions.length !== 1 ? 's' : ''}
                  </Paragraph>
                </div>

                {/* Expansions Grid for this Series */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {expansions.map(expansion => (
                    <div
                      key={expansion.id}
                      className="group cursor-pointer rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                    >
                      <div className="p-6 text-center">
                        {/* Expansion Logo */}
                        <div className="mb-4 flex justify-center">
                          <img
                            src={expansion.images.logo}
                            alt={`${expansion.name} logo`}
                            className="h-24 w-auto object-contain transition-transform duration-200 group-hover:scale-110"
                            onError={e => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/cardBack.png'; // Fallback image
                            }}
                          />
                        </div>

                        {/* Expansion Name */}
                        <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 dark:text-white">
                          {expansion.name}
                        </h3>

                        {/* Series Info */}
                        <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                          {expansion.series}
                        </p>

                        {/* Card Count */}
                        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                            {expansion.printedTotal} cards
                          </span>
                          <span className="flex items-center">
                            <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                            {expansion.total} total
                          </span>
                        </div>

                        {/* Release Date */}
                        <div className="mt-4 border-t border-gray-200 pt-3 dark:border-gray-700">
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Released:{' '}
                            {new Date(
                              expansion.releaseDate,
                            ).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>

      {(!data || Object.keys(data).length === 0) && (
        <div className="py-12 text-center">
          <p className="text-lg text-gray-500 dark:text-gray-400">
            No expansions found
          </p>
        </div>
      )}
    </div>
  );
};
