import { http, HttpResponse } from 'msw';

import { tournaments } from './fixtures/tournaments';

export const handlers = [
  http.get('/api/tournaments', () => {
    return HttpResponse.json(tournaments);
  }),
];
