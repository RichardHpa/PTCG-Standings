import { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';

import { BuyMeABoosterButton } from 'components/BuyMeABoosterButton';
import { SEO } from 'components/SEO';

import { Heading } from 'components/Heading';
import { Link } from 'components/Link';
import { Paragraph } from 'components/Paragraph';

import type { ReactNode } from 'react';

const UlList = ({ children }: { children: ReactNode }) => (
  <ul className="mb-3 list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400">
    {children}
  </ul>
);

const OlList = ({ children }: { children: ReactNode }) => (
  <ol className="mb-3 list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400">
    {children}
  </ol>
);

const HR = () => (
  <hr className="my-2 h-px border-0 bg-gray-200 dark:bg-gray-700" />
);

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col gap-4">{children}</div>
);

export const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // @ts-expect-error - TS doesn't know about the import.meta object
    import('./about.md')
      .then(res =>
        fetch(res.default)
          .then(res => res.text())
          .then(res => setMarkdown(res))
          .catch(err => console.log(err)),
      )
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <SEO title="About" />

      <Markdown
        options={{
          wrapper: Wrapper,
          overrides: {
            h1: {
              component: Heading,
              props: {
                level: 1,
              },
            },
            h2: {
              component: Heading,
              props: {
                level: 2,
              },
            },
            h3: {
              component: Heading,
              props: {
                level: 3,
              },
            },
            h4: {
              component: Heading,
              props: {
                level: 4,
              },
            },
            h5: {
              component: Heading,
              props: {
                level: 5,
              },
            },
            h6: {
              component: Heading,
              props: {
                level: 6,
              },
            },
            p: {
              component: Paragraph,
            },
            ul: {
              component: UlList,
            },
            ol: {
              component: OlList,
            },
            a: {
              component: Link,
            },
            Coffee: {
              component: BuyMeABoosterButton,
            },
            hr: {
              component: HR,
            },
          },
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
};
