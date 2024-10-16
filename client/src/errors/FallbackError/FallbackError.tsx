import { Link } from 'react-router-dom';

import { RawBaseLayout } from 'layouts/BaseLayout';

import { Heading } from 'components/Heading';
import { Button } from 'components/Button';

export const FallbackError = () => {
  return (
    <RawBaseLayout>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto max-w-screen-sm text-center">
            <Heading level="1" className="lg:text-9x text-7xl font-extrabold">
              404
            </Heading>
            <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Something's missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.{' '}
            </p>
            <Link to="/">
              <Button> Back to Homepage</Button>
            </Link>
          </div>
        </div>
      </section>
    </RawBaseLayout>
  );
};
