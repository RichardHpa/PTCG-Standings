import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Button';
import { Input } from 'components/Forms/Input';

import type { FormEvent } from 'react';

export const Login = () => {
  const navigate = useNavigate();
  const [_email, setEmail] = useState('');
  const [_password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const payload = {
    //   email,
    //   password,
    //   remember,
    // };
    navigate('/admin/dashboard', { replace: true });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 lg:py-0">
        <a
          href="#"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="mr-2 h-8 w-8" src="/logo512.png" alt="logo" />
          PTCG Standings
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <div>
                <Input
                  label="Your email"
                  type="email"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  placeholder="ash@pokemon.com"
                  required
                />
              </div>
              <div>
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                      checked={remember}
                      onChange={e => setRemember(e.target.checked)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>

              <Button full type="submit" size="lg">
                Sign in
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
