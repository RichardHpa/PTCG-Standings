import { useCallback } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import { useAuth } from 'providers/AuthProvider';

import { Button } from 'components/Button';
import { Heading } from 'components/Heading';

export const DashboardOutlet = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { logoutAction } = useAuth();

  const handleLogout = useCallback(async () => {
    logoutAction();
    queryClient.clear();
    navigate('/login');
  }, [logoutAction, navigate, queryClient]);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex justify-between gap-2">
        <Heading level="3">
          <Link to="/admin/dashboard">Dashboard</Link>
        </Heading>
        <Button size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};
