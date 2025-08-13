export const getEnergyTypeImage = (energyType: string): string => {
  const energyTypeMap: Record<string, string> = {
    Grass: '/energies/40px-Grass-attack.png',
    Fire: '/energies/40px-Fire-attack.png',
    Water: '/energies/40px-Water-attack.png',
    Lightning: '/energies/40px-Lightning-attack.png',
    Psychic: '/energies/40px-Psychic-attack.png',
    Fighting: '/energies/40px-Fighting-attack.png',
    Darkness: '/energies/40px-Darkness-attack.png',
    Metal: '/energies/40px-Metal-attack.png',
    Colorless: '/energies/40px-Colorless-attack.png',
    Fairy: '/energies/40px-Fairy-attack.png',
    Dragon: '/energies/40px-Dragon-attack.png',
  };

  return energyTypeMap[energyType] || '/energies/40px-Colorless-attack.png';
};
