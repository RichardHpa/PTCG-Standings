import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';

export const AdminOutlet = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
