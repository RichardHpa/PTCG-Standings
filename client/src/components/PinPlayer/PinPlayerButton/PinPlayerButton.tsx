import { PinIcon } from 'icons/PinIcon';

import type { PinPlayerButtonProps } from './types';
import type { FC } from 'react';

// TODO: Though I think we need to refactor the IconButton abit as the sizing isnt working
export const PinPlayerButton: FC<PinPlayerButtonProps> = () => {
  return <PinIcon className="h-4 w-4" />;
};
