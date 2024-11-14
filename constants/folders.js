import path from 'path';

const __dirname = path.resolve();
export const baseFolder = `${__dirname}/data`;
export const tournamentsFolder = `${baseFolder}/tournaments`;
export const roundsFolder = `${baseFolder}/rounds`;

export const basePokeDataApiUrl = 'https://www.pokedata.ovh/apiv2/tcg';
export const basePokeDataApiFullTournamentUrl = `${basePokeDataApiUrl}/division/masters+juniors+seniors/id`;
export const basePokeDataApiTournamentsUrl = `${basePokeDataApiUrl}/tournaments`;
