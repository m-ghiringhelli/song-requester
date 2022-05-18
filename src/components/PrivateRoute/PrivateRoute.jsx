import { Redirect, Route, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { getUser } from '../../services/user';

export function PrivateRoute({ children, ...rest }) {
  const auth = getUser();
  const location = useLocation();

  console.log('auth', auth);

  return (
    <Route {...rest}>
      {auth ? (
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