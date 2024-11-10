import { githubIssues } from 'constants/github';

import { Notice } from 'components/Notice';
import { Link } from 'components/Link';
import { Card } from 'components/Card';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { TournamentDeckAnalysis } from 'types/tournament';

const breakCamelCase = (camelCase: string) => {
  // break the camelCase into words and then uppercase the first letter of the sentence
  const words = camelCase.match(/([A-Z]?[^A-Z]*)/g) || [];
  return words
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

export const Stats = () => {
  const { tournament, divisions } = useTournamentContext();
  console.log(divisions);
  if (!tournament.deckAnalysis) {
    return (
      <Notice>
        we currently don't have any of the deck analysis for the{' '}
        {tournament.name}. If you know of, or can get the offical deck analysis,
        then please get in touch with us via our{' '}
        <Link href={githubIssues}>Github</Link> page as we would love to add it
        to the site.
      </Notice>
    );
  }

  const deckAnalysisKeys = Object.keys(tournament.deckAnalysis) as Array<
    keyof TournamentDeckAnalysis
  >;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {deckAnalysisKeys.map((day, index) => {
        const imageUrl = tournament?.deckAnalysis?.[day];
        if (!imageUrl) return null; // If the URL is not available, return null
        return (
          <Card key={index} title={breakCamelCase(day)}>
            <img src={`/deckAnalysis/${tournament.id}/${imageUrl}`} />
          </Card>
        );
      })}
    </div>
  );
};
