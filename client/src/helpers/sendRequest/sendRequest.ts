import { axios } from 'helpers/axios';

import { BASE_KEY } from 'constants/localStorageKeys';

import { ApiMethod } from './types';

export const sendRequest = async (
  method: ApiMethod,
  path: string,
  body?: unknown,
  authToken?: string | null,
) => {
  const response = await axios({
    method,
    url: path,
    data: body,
    headers: {
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
  });
  if (response.status >= 400) {
    throw response;
  }
  return response;
};

export const sendProtectedRequest = async (
  method: ApiMethod,
  path: string,
  body?: unknown,
  useRefreshToken: boolean = false,
) => {
  const authToken = useRefreshToken
    ? localStorage.getItem(`${BASE_KEY}:refreshToken`)
    : localStorage.getItem(`${BASE_KEY}:token`);

  if (!authToken) {
    throw new Error('No auth token found');
  }

  return sendRequest(method, path, body, authToken);
};

const refreshTokenUrl = `https://ptcg-api.fly.dev/api/tokens/refresh`;
const refreshTokens = async () => {
  const refreshToken = localStorage.getItem(`${BASE_KEY}:refreshToken`);
  if (!refreshToken) {
    throw new Error('No refresh token found');
  }

  try {
    const response = await sendProtectedRequest(
      ApiMethod.POST,
      refreshTokenUrl,
      undefined,
      true,
    );
    const { token, refresh_token } = response.data;
    localStorage.setItem(`${BASE_KEY}:token`, token);
    localStorage.setItem(`${BASE_KEY}:refreshToken`, refresh_token);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const sendAuthGuardedRequest = async (
  method: ApiMethod,
  path: string,
  body?: unknown,
  userIsNotAuthenticatedCallback: () => void = () => {},
) => {
  try {
    return await sendProtectedRequest(method, path, body, undefined);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    if (e?.status === 401) {
      try {
        await refreshTokens();
      } catch (e) {
        userIsNotAuthenticatedCallback();
        throw e;
      }
      return await sendProtectedRequest(method, path, body, undefined);
    }

    throw e;
  }
};
