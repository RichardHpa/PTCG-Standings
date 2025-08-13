import { useParams, Link } from 'react-router-dom';
import { useGetExpansions } from 'queries/useGetExpansions';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { Card } from 'components/Card';
import { LoadingPokeball } from 'components/LoadingPokeball';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import { ExpansionCards } from './ExpansionCards';

import type { Expansion } from 'types/expansions';

export const ExpansionDetail = () => {
  const { expansionId } = useParams<{ expansionId: string }>();

  const { data, isLoading, error } = useGetExpansions<Expansion | null>({
    select: apiData => {
      if (!apiData?.data || !expansionId) return null;

      // Find the specific expansion
      const expansion = apiData.data.find(exp => exp.id === expansionId);
      return expansion || null;
    },
  });

  if (isLoading) {
    return (
      <div className="flex min-h-64 items-center justify-center">
        <LoadingPokeball />
      </div>
    );
  }

  if (error) {
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
            Unable to Load Expansion
          </Heading>
          <div className="mx-auto mb-4 max-w-md">
            <Paragraph size="sm" color="default" align="center">
              There is an issue with the external API that provides our
              expansion data. This is a known issue and hopefully will be
              resolved to become more stable in the future
            </Paragraph>
          </div>
        </div>
      </div>
    );
  }

  // Check if expansion was found
  if (!data) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <Heading
            level="1"
            className="mb-4 text-4xl font-bold text-gray-900 dark:text-white"
          >
            Expansion Not Found
          </Heading>
          <div className="mb-6">
            <Paragraph size="lg" color="default" align="center">
              The expansion you're looking for doesn't exist.
            </Paragraph>
          </div>
          <Link
            to="/expansions"
            className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Expansions
          </Link>
        </div>
      </div>
    );
  }

  const expansion = data;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/expansions"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Expansions
        </Link>
      </div>

      {/* Expansion Header */}
      <div className="mb-8 text-center">
        <div className="mb-6 flex justify-center">
          <img
            src={expansion.images.logo}
            alt={`${expansion.name} logo`}
            className="h-32 w-auto object-contain"
            onError={e => {
              const target = e.target as HTMLImageElement;
              target.src = '/cardBack.png';
            }}
          />
        </div>
        <Heading
          level="1"
          className="mb-2 text-4xl font-bold text-gray-900 dark:text-white"
        >
          {expansion.name}
        </Heading>
        <div className="mb-2">
          <Paragraph size="lg" color="default" align="center">
            {expansion.series}
          </Paragraph>
        </div>
        <Paragraph size="sm" color="default" align="center">
          Released: {new Date(expansion.releaseDate).toLocaleDateString()}
        </Paragraph>
      </div>

      {/* Expansion Details Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Card Information */}
        <Card>
          <div className="p-6">
            <Heading
              level="2"
              className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              Card Information
            </Heading>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Base Set:
                </span>
                <span className="text-gray-900 dark:text-white">
                  {expansion.printedTotal}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Total Cards:
                </span>
                <span className="text-gray-900 dark:text-white">
                  {expansion.total}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  PTCGO Code:
                </span>
                <span className="text-gray-900 dark:text-white">
                  {expansion.ptcgoCode}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Expansion Symbol:
                </span>
                <img
                  src={expansion.images.symbol}
                  alt={`${expansion.name} symbol`}
                  className="h-4 w-auto object-contain"
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/cardBack.png';
                  }}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Legality Information */}
        <Card>
          <div className="p-6">
            <Heading
              level="2"
              className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              Tournament Legality
            </Heading>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Unlimited Format:
                </span>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    expansion.legalities.unlimited === 'Legal'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                  }`}
                >
                  {expansion.legalities.unlimited || 'Not Legal'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Expanded Format:
                </span>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    expansion.legalities.expanded === 'Legal'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                  }`}
                >
                  {expansion.legalities.expanded || 'Not Legal'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Standard Format:
                </span>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    expansion.legalities.standard === 'Legal'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                  }`}
                >
                  {expansion.legalities.standard || 'Not Legal'}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Expansion Cards Section */}
      <ExpansionCards setId={expansion.id} expansionName={expansion.name} />
    </div>
  );
};
