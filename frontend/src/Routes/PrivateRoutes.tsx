import { FC } from 'react';
import { Route, useHistory } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { verifyTokenAsync, logout } from '../app/auth/authSlice';
import { useAppSelector, useAppDispatch } from '../app/hooks';

type TProps = {
  path: string;
  Layout?: FC<any>;
  Component: FC<any>;
};

export default function PrivateRoute({ Layout = MainLayout, Component, ...rest }: TProps) {
  // TODO: Verify token, if failed redirect to /login
  const auth = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  };

  if (auth.status === 'loading') {
    return <div>Verifying...</div>;
  }

  if (auth.status === 'failed') {
    handleLogout();
  }

  if (auth.status === 'idle' && (!auth.token || !auth.user)) {
    const storagedToken = localStorage.getItem('token');
    if (storagedToken) {
      dispatch(verifyTokenAsync());
    } else {
      history.push('/login');
    }
  }

  return (
    <Route
      {...rest}
      render={(matchProps: any) => (
        <Layout handleLogout={() => handleLogout()}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
}
