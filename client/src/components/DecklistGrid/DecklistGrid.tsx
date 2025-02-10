import { useMemo, useState, useCallback } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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

  const handleOnCopy = useCallback(() => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <CopyToClipboard text={listAsString} onCopy={handleOnCopy}>
          <Button>{copied ? 'Copied!' : 'Copy Decklist'}</Button>
        </CopyToClipboard>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-8">
        {formattedCards.map(card => (
          <div
            key={`${card.name}-${card.set}-${card.number}`}
            className="relative aspect-[2.5/3.5] w-full"
          >
            <CardImage src={card.image} alt={card.name} />

            <div className="absolute bottom-0 right-0 m-2 inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {card.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
