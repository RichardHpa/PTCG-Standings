import {
  createContext,
  useState,
  useMemo,
  useContext,
  useCallback,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { BASE_KEY } from 'constants/localStorageKeys';

import { LoadingPokeball } from 'components/LoadingPokeball';
import { Heading } from 'components/Heading';

import {
  sendRequest,
  ApiMethod,
  sendProtectedRequest,
  sendAuthGuardedRequest,
} from 'helpers/sendRequest';

import type { FC, ReactNode } from 'react';

interface AuthContextProps {
  token?: string;
  user?: User;
  loginAction: (values: UserLogin) => void;
  logoutAction: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export interface UserLogin {
  email: string;
  password: string;
  remember: boolean;
}

export interface User {
  emails: string;
  id: number;
  updated_at: string;
  created_at: string;
}

const AuthContext = createContext<AuthContextProps>({
  token: '',
  user: undefined,
  loginAction: () => {},
  logoutAction: () => {},
});

const tokenInfoUrl = `https://ptcg-api.fly.dev/api/tokens/info`;
const tokenInfoApi = async () => {
  return sendAuthGuardedRequest(ApiMethod.GET, tokenInfoUrl);
};

const loginUrl = `https://ptcg-api.fly.dev/api/tokens/login`;
const loginApi = async (values: UserLogin) => {
  return sendRequest(ApiMethod.POST, loginUrl, values);
};

const logoutUrl = `https://ptcg-api.fly.dev/api/tokens/revoke`;
const logoutApi = async () => {
  return sendProtectedRequest(ApiMethod.POST, logoutUrl);
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState(
    localStorage.getItem(`${BASE_KEY}:token`) || '',
  );
  const navigate = useNavigate();

  const loginAction = useCallback(
    async (values: UserLogin) => {
      try {
        loginApi(values).then(res => {
          if (res) {
            localStorage.setItem(`${BASE_KEY}:token`, res.data.token);
            localStorage.setItem(
              `${BASE_KEY}:refreshToken`,
              res.data.refresh_token,
            );
            setToken(res.data.token);
            setUser(res.data.resource_owner);
            navigate('/admin/dashboard');
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
    [navigate],
  );

  const logoutAction = useCallback(async () => {
    try {
      await logoutApi();
      localStorage.removeItem(`${BASE_KEY}:token`);
      localStorage.removeItem(`${BASE_KEY}:refreshToken`);
      setToken('');
      setUser(undefined);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }, [navigate]);

  useEffect(() => {
    if (token !== '') {
      tokenInfoApi()
        .then(res => {
          setUser(res.data);
        })
        .catch(err => {
          console.error(err);
          logoutAction();
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({ token, user, loginAction, logoutAction }),
    [loginAction, logoutAction, token, user],
  );

  if (token && !user) {
    return (
      <div className="flex h-full w-full flex-1 flex-col items-center justify-center">
        <LoadingPokeball alt="Loading app" size="100" />
        <Heading level="2" className="mt-4">
          Loading PTCG Standings...
        </Heading>
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
