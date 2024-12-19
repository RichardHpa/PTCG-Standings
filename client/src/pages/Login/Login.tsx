import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useAuth } from 'providers/AuthProvider';

import { Button } from 'components/Button';
import { Input } from 'components/Forms/Input';
import { Notice } from 'components/Notice';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const Login = () => {
  const { loginAction, user } = useAuth();
  const [error] = useState('');

  const formik = useFormik({
    initialValues: {
      email: 'richard.m.hpa@gmail.com',
      password: '2FB9G@a46eMshny',
      remember: false,
    },
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      loginAction(values);
    },
  });

  if (user) {
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center gap-8 px-6 sm:max-w-md">
        <a
          href="#"
          className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="mr-2 h-8 w-8" src="/logo512.png" alt="logo" />
          PTCG Standings
        </a>

        {error && <Notice status="error">{error}</Notice>}

        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              autoComplete="off"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <Input
                  label="Your email"
                  type="email"
                  name="email"
                  placeholder="ash@pokemon.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.errors.email}
                />
              </div>
              <div>
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.errors.password}
                />
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
