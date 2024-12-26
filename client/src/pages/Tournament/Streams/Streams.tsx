import ReactPlayer from 'react-player';
import { Navigate } from 'react-router-dom';

import { githubIssues } from 'constants/github';

import { useTournamentContext } from 'providers/TournamentProvider';
import { Paragraph } from 'components/Paragraph';
import { Card } from 'components/Card';
import { Link } from 'components/Link';
import { SEO } from 'components/SEO';

import { breakCamelCase } from 'utils/breakCamelCase';

import type { StreamsMap } from 'types/tournament';

export const Streams = () => {
  const { tournament } = useTournamentContext();

  if (!tournament.streams) {
    return <Navigate to={`/tournaments/${tournament.id}`} replace />;
  }

  const streamKeys = Object.keys(tournament.streams) as Array<keyof StreamsMap>;

  return (
    <div className="flex flex-col gap-4">
      <SEO title={`${tournament.name} streams`} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {streamKeys.map((day, index) => {
          const streamUrl = tournament?.streams?.[day];
          if (!streamUrl) return null; // If the URL is not available, return null
          return (
            <Card key={index} title={breakCamelCase(day)}>
              <div className="youtube-container">
                <ReactPlayer
                  className="yt-video"
                  url={streamUrl}
                  width="100%"
                  height="100%"
                />
              </div>
            </Card>
          );
        })}
      </div>
      <Paragraph>
        <i>
          * Since Pokemon (or the event organizers) own the streams, they might
          remove these in the future. If one of the streams links has broken,
          please submit a issue via <Link href={githubIssues}>Github</Link> and
          we can either fix or remove it.
        </i>
      </Paragraph>
    </div>
  );
};
