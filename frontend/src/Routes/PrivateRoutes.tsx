import { FC } from 'react';
import { Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

type TProps = {
  path: string;
  Layout?: FC<any>;
  Component: FC<any>;
};

export default function PrivateRoute({ Layout = MainLayout, Component, ...rest }: TProps) {
  // TODO: Verify token, if failed redirect to /login
  return (
    <Route
      {...rest}
      render={(matchProps: any) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
}
