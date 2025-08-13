import { useMemo, useState, useCallback } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

import { setMap } from 'constants/sets';

import { CardImage } from 'components/CardImage';
import { Button } from 'components/Button';

import type { FC } from 'react';
import type { DecklistGridProps } from './types';
import type { DeckList, PokemonCard } from 'types/standing';

const getImageUrl = (card: PokemonCard) => {
  let setCode = setMap[card.set] || card.set.toLowerCase();
  let number = card.number;

  // Special case for Crown Zenith Galarian Gallery cards
  if (setCode === setMap['CRZ'] && card.number.includes('GG')) {
    setCode += 'gg';
  }

  if (setCode === setMap['PR-SW']) {
    number = `SWSH${number}`;
  }
  // NOTE: there is an issue with the Sword and Shield Promo cards where the set code is 'basep' instead of 'swshp', hopefully pokedata will fix this soonx
  if (setCode === 'basep') {
    setCode = 'swshp';
  }

  return `https://images.pokemontcg.io/${setCode}/${number}.png`;
};

const useGetDecklist = (deckList: DeckList) => {
  const pokemon = deckList.pokemon;
  const formattedPokemon = pokemon.map(card => {
    return { ...card, image: getImageUrl(card) };
  });

  const formattedTrainers = deckList.trainer.map(card => {
    return { ...card, image: getImageUrl(card) };
  });

  const formattedEnergy = deckList.energy.map(card => {
    return { ...card, image: getImageUrl(card) };
  });

  const formattedCards = [
    ...formattedPokemon,
    ...formattedTrainers,
    ...formattedEnergy,
  ];

  const listAsString = useMemo(() => {
    let string = '';
    const pokemonCount = formattedPokemon.reduce(
      (acc, card) => acc + card.count,
      0,
    );
    const trainerCount = formattedTrainers.reduce(
      (acc, card) => acc + card.count,
      0,
    );
    const energyCount = formattedEnergy.reduce(
      (acc, card) => acc + card.count,
      0,
    );
    string += `Pokémon: ${pokemonCount}\n`;
    formattedPokemon.map(card => {
      string += `${card.count} ${card.name} ${card.set} ${card.number}\n`;
    });

    string += `\nTrainers: ${trainerCount}\n`;
    formattedTrainers.map(card => {
      string += `${card.count} ${card.name} ${card.set} ${card.number}\n`;
    });

    string += `\nEnergy: ${energyCount}\n`;
    formattedEnergy.map(card => {
      string += `${card.count} ${card.name} ${card.set} ${card.number}\n`;
    });
    return string;
  }, [formattedEnergy, formattedPokemon, formattedTrainers]);

  return { list: deckList, formattedCards, listAsString };
};

export const DecklistGrid: FC<DecklistGridProps> = ({ decklist }) => {
  const [copied, setCopied] = useState(false);

  const { formattedCards, listAsString } = useGetDecklist(decklist);
  console.log(formattedCards);
  const handleOnCopy = useCallback(() => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Decklist ({formattedCards.length} cards)
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Click on any card to view details
          </p>
        </div>
        <CopyToClipboard text={listAsString} onCopy={handleOnCopy}>
          <Button>{copied ? 'Copied!' : 'Copy Decklist'}</Button>
        </CopyToClipboard>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {formattedCards.map(card => (
          <Link
            key={`${card.name}-${card.set}-${card.number}`}
            to={`/expansions/${setMap[card.set] || card.set.toLowerCase()}/cards/${setMap[card.set]}-${card.number}`}
            className="group relative aspect-[2.5/3.5] w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <CardImage src={card.image} alt={card.name} />

            {/* Card count badge */}
            <div className="absolute bottom-1 right-1 inline-flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white/90 shadow-sm dark:bg-gray-800/90">
              <span className="text-xs font-semibold text-gray-900 dark:text-white">
                {card.count}
              </span>
            </div>

            {/* Hover overlay with card name */}
            <div className="absolute inset-0 bg-black/0 transition-all duration-200 group-hover:bg-black/60">
              <div className="flex h-full items-end p-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="text-center">
                  <p className="text-xs font-medium text-white drop-shadow-lg">
                    {card.name}
                  </p>
                  <p className="text-xs text-gray-200 drop-shadow-lg">
                    {card.set} #{card.number}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
