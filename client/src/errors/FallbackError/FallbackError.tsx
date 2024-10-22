import { Link } from 'react-router-dom';

import { RawBaseLayout } from 'layouts/BaseLayout';

import { Heading } from 'components/Heading';
import { Button } from 'components/Button';
import { Paragraph } from 'components/Paragraph';

const errorMessage = [
  'Uh-oh! It looks like we used Fly and ended up in the wrong place. This page is missing, but your next adventure is just a click away!',
  'Oops, this page fainted! Maybe it needs a Revive? Try heading back and we’ll get you back on your journey!',
  "Charmander accidentally used Flamethrower on this page. Looks like it's burned to a crisp! Let’s head back before it spreads!",
  'Looks like Abra used Teleport! This page has vanished. Try searching again or return to the homepage!',
  "We couldn't find that page—it's like it never existed, just like a MissingNo! But don’t worry, no glitches here. Let's find the right path!",
];

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
              <Paragraph size="xxl">Something's missing.</Paragraph>
              <Paragraph size="lg">
                {errorMessage[Math.floor(Math.random() * errorMessage.length)]}
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
