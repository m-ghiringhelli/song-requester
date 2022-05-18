import { Redirect, Route, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();
  const location = useLocation();

  return (
    <Route {...rest}>
      {auth.user ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      )}
    </Route>
  );
}