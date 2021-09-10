import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';
import PublicRoute from './PublicRoutes';
import { DashboardView, UserView, LoginView } from '../views';
import BlankLayout from '../layouts/BlankLayout';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PublicRoute Layout={BlankLayout} path="/login" Component={LoginView} />
        <PrivateRoute path="/user" Component={UserView} />
        <PrivateRoute path="/" Component={DashboardView} />
      </Switch>
    </Router>
  );
}
