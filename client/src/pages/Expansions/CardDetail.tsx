import { useParams, Link } from 'react-router-dom';
import { useGetCards } from 'queries/useGetCards';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { LoadingPokeball } from 'components/LoadingPokeball';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import { useState, useEffect } from 'react';
import { getEnergyTypeImage } from 'helpers/getEnergyTypeImage';

export const CardDetail = () => {
  const { cardId } = useParams<{ cardId: string }>();
  const [showTimeoutNotice, setShowTimeoutNotice] = useState(false);

  const { data, isLoading, error } = useGetCards({
    query: `id:"${cardId}"`,
    pageSize: 1,
    orderBy: 'number',
  });

  // Show timeout notice after 20 seconds
  useEffect(() => {
    if (isLoading) {
      const timeoutTimer = setTimeout(() => {
        setShowTimeoutNotice(true);
      }, 20000);

      return () => clearTimeout(timeoutTimer);
    } else {
      setShowTimeoutNotice(false);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4">
          <Link
            to="/expansions"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Expansions
          </Link>
        </div>

        {/* Timeout Notice - Always takes up space */}
        <div className="mb-6">
          {showTimeoutNotice && (
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-amber-800 dark:text-amber-200">
                    External API Response Taking Longer Than Expected
                  </h3>
                  <div className="mt-2 text-sm text-amber-700 dark:text-amber-300">
                    <p>
                      We're experiencing slower response times from our external
                      API provider. This is a known issue with their service
                      that affects all users. Please be patient while the data
                      loads, or try refreshing the page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex min-h-64 items-center justify-center">
          <LoadingPokeball />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            to="/expansions"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Expansions
          </Link>
        </div>

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
              Unable to Load Card
            </Heading>
            <div className="mx-auto mb-4 max-w-md">
              <Paragraph size="sm" color="default" align="center">
                There was an issue loading the card details. This might be due
                to the external API being slow or the card not being found.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const card = data?.pages[0]?.data[0];

  if (!card) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            to="/expansions"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Expansions
          </Link>
        </div>

        <div className="flex min-h-64 items-center justify-center">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <Heading level="2" className="mb-2 text-xl font-semibold">
              Card Not Found
            </Heading>
            <Paragraph size="sm" color="default" align="center">
              The requested card could not be found. It may have been removed or
              the ID might be incorrect.
            </Paragraph>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Back Navigation */}
      <div className="mb-4">
        <Link
          to={`/expansions/${card.set.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to {card.set.name}
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Card Image */}
        <div>
          <div className="aspect-[2.5/3.5] overflow-hidden rounded-lg">
            <img
              src={card.images.large}
              alt={`${card.name} card`}
              className="h-full w-full object-cover"
              onError={e => {
                const target = e.target as HTMLImageElement;
                target.src = '/cardBack.png';
              }}
            />
          </div>
        </div>

        {/* Card Details */}
        <div className="space-y-4">
          <div>
            <Heading
              level="1"
              className="mb-2 text-2xl font-bold text-gray-900 dark:text-white"
            >
              {card.name}
            </Heading>
            <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400">
              <span>{card.set.name}</span>
              <span>•</span>
              <span>#{card.number}</span>
              {card.rarity && (
                <>
                  <span>•</span>
                  <span>{card.rarity}</span>
                </>
              )}
            </div>
          </div>

          {/* Card Information */}
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <Heading
              level="2"
              className="mb-3 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Card Information
            </Heading>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Type:
                </span>
                <span className="text-gray-900 dark:text-white">
                  {card.supertype}
                </span>
              </div>
              {card.subtypes && card.subtypes.length > 0 && (
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Subtypes:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {card.subtypes.join(', ')}
                  </span>
                </div>
              )}
              {card.types && card.types.length > 0 && (
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Energy Types:
                  </span>
                  <div className="flex space-x-2">
                    {card.types.map(type => (
                      <img
                        key={type}
                        src={getEnergyTypeImage(type)}
                        alt={type}
                        className="h-5 w-5"
                      />
                    ))}
                  </div>
                </div>
              )}
              {card.hp && (
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    HP:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {card.hp}
                  </span>
                </div>
              )}
              {card.level && (
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Level:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {card.level}
                  </span>
                </div>
              )}
              {card.evolvesFrom && (
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Evolves From:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {card.evolvesFrom}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Retreat Cost:
                </span>
                <div className="flex items-center space-x-1">
                  {card.retreatCost && card.retreatCost.length > 0 ? (
                    card.retreatCost.map((energyType, costIndex) => (
                      <img
                        key={costIndex}
                        src={getEnergyTypeImage(energyType)}
                        alt={energyType}
                        className="h-4 w-4"
                      />
                    ))
                  ) : (
                    <span className="text-gray-900 dark:text-white">
                      {card.convertedRetreatCost}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  Artist:
                </span>
                <span className="text-gray-900 dark:text-white">
                  {card.artist}
                </span>
              </div>
            </div>
          </div>

          {/* Abilities */}
          {card.abilities && card.abilities.length > 0 && (
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Heading
                level="2"
                className="mb-3 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Abilities
              </Heading>
              <div className="space-y-3">
                {card.abilities.map((ability, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-2 last:border-b-0 dark:border-gray-700"
                  >
                    <div className="mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {ability.name}
                      </span>
                    </div>
                    {ability.text && (
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {ability.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Attacks */}
          {card.attacks && card.attacks.length > 0 && (
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Heading
                level="2"
                className="mb-3 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Attacks
              </Heading>
              <div className="space-y-3">
                {card.attacks.map((attack, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-2 last:border-b-0 dark:border-gray-700"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {attack.name}
                      </span>
                      <div className="flex items-center space-x-1">
                        {attack.cost && attack.cost.length > 0 && (
                          <>
                            {attack.cost.map((energyType, costIndex) => (
                              <img
                                key={costIndex}
                                src={getEnergyTypeImage(energyType)}
                                alt={energyType}
                                className="h-4 w-4"
                              />
                            ))}
                          </>
                        )}
                        {attack.convertedEnergyCost > 0 &&
                          attack.cost &&
                          attack.cost.length === 0 && (
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {attack.convertedEnergyCost} Energy
                            </span>
                          )}
                      </div>
                    </div>
                    {attack.text && (
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {attack.text}
                      </p>
                    )}
                    {attack.damage && (
                      <div className="mt-2 text-right">
                        <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900/20 dark:text-red-400">
                          {attack.damage} Damage
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Weaknesses & Resistances */}
          {(card.weaknesses || card.resistances) && (
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Heading
                level="2"
                className="mb-3 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Battle Properties
              </Heading>
              <div className="space-y-2">
                {card.weaknesses && card.weaknesses.length > 0 && (
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Weaknesses:
                    </span>
                    <div className="flex space-x-2">
                      {card.weaknesses.map((weakness, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-1"
                        >
                          <img
                            src={getEnergyTypeImage(weakness.type)}
                            alt={weakness.type}
                            className="h-4 w-4"
                          />
                          <span className="text-sm text-gray-900 dark:text-white">
                            {weakness.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {card.resistances && card.resistances.length > 0 && (
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Resistances:
                    </span>
                    <div className="flex space-x-2">
                      {card.resistances.map((resistance, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-1"
                        >
                          <img
                            src={getEnergyTypeImage(resistance.type)}
                            alt={resistance.type}
                            className="h-4 w-4"
                          />
                          <span className="text-sm text-gray-900 dark:text-white">
                            {resistance.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Flavor Text */}
          {card.flavorText && (
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Heading
                level="2"
                className="mb-3 text-lg font-semibold text-gray-900 dark:text-white"
              >
                Flavor Text
              </Heading>
              <p className="italic text-gray-700 dark:text-gray-300">
                {card.flavorText}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Pricing Information */}
      {(card.tcgplayer || card.cardmarket) && (
        <div className="mt-8">
          <Heading
            level="2"
            className="mb-4 text-xl font-semibold text-gray-900 dark:text-white"
          >
            Market Prices
          </Heading>
          <div className="grid gap-4 md:grid-cols-2">
            {card.tcgplayer && (
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    TCGPlayer
                  </h3>
                  <a
                    href={card.tcgplayer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View on TCGPlayer →
                  </a>
                </div>
                <div className="space-y-2">
                  {Object.entries(card.tcgplayer.prices).map(
                    ([edition, prices]) => (
                      <div
                        key={edition}
                        className="flex justify-between border-b border-gray-100 pb-2 last:border-b-0 dark:border-gray-700"
                      >
                        <span className="text-sm capitalize text-gray-600 dark:text-gray-400">
                          {edition}
                        </span>
                        <div className="text-right text-sm">
                          {prices.low && (
                            <div className="text-gray-900 dark:text-white">
                              Low: ${prices.low.toFixed(2)}
                            </div>
                          )}
                          {prices.mid && (
                            <div className="text-gray-700 dark:text-gray-300">
                              Mid: ${prices.mid.toFixed(2)}
                            </div>
                          )}
                          {prices.high && (
                            <div className="text-gray-600 dark:text-gray-400">
                              High: ${prices.high.toFixed(2)}
                            </div>
                          )}
                          {prices.market && (
                            <div className="font-medium text-blue-600 dark:text-blue-400">
                              Market: ${prices.market.toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}

            {card.cardmarket && (
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    CardMarket
                  </h3>
                  <a
                    href={card.cardmarket.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View on CardMarket →
                  </a>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between border-b border-gray-100 pb-2 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Average Sell
                    </span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      €{card.cardmarket.prices.averageSellPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Low Price
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      €{card.cardmarket.prices.lowPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Trend Price
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      €{card.cardmarket.prices.trendPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Suggested
                    </span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      €{card.cardmarket.prices.suggestedPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
