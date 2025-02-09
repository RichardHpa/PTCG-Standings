import type { ReactElement } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- this is a new issue with react 19 "The props of React elements now default to unknown instead of any if the element is typed as ReactElement."
export type Icon = ReactElement<any>;
