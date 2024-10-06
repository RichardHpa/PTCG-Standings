import { Link } from 'react-router-dom';

import { Heading } from 'components/Heading';

export const FallbackError = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <Heading level="1" className="lg:text-9x text-7xl font-extrabold">
            404
          </Heading>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{' '}
          </p>
          <Link
            to="/"
            className="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
