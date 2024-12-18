import { createContext, useState, useMemo, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import type { FC, ReactNode } from 'react';

const AuthContext = createContext({});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user] = useState(null);
  const [loggedIn] = useState(true);

  const value = useMemo(() => ({ user, loggedIn }), [user, loggedIn]);

  if (loggedIn === false) {
    return <Navigate to="/login" replace />;
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
