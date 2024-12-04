import { Link } from 'react-router-dom';

import { RawBaseLayout } from 'layouts/BaseLayout';

import { Heading } from 'components/Heading';
import { Button } from 'components/Button';
import { Paragraph } from 'components/Paragraph';

import { errorMessages } from 'errors/errorMessages';

export const FallbackError = () => {
  return (
    <RawBaseLayout>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto flex max-w-screen-sm flex-col gap-4 text-center">
            <Heading level="1" className="lg:text-9x text-7xl font-extrabold">
              404
            </Heading>
            <div className="flex flex-col gap-2">
              <Paragraph size="xxl" align="center">
                Something's missing.
              </Paragraph>
              <Paragraph size="lg" align="center">
                {
                  errorMessages[
                    Math.floor(Math.random() * errorMessages.length)
                  ]
                }
              </Paragraph>
            </div>
            <Link to="/">
              <Button> Back to Homepage</Button>
            </Link>
          </div>
        </div>
      </section>
    </RawBaseLayout>
  );
};
