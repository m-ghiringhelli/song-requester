import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Redirect
} from 'react-router-dom';
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import Auth from "./views/Auth/Auth";
import Requests from "./views/Requests/Requests";
import { getUser } from './services/user';
import RequestDetail from './components/Requests/RequestDetail';
import EditRequest from './views/Requests/EditRequest';

export default function App() {
  const user = getUser();

  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute exact path='/'>
            <Requests />
          </PrivateRoute>
          <PrivateRoute path='/requests/edit/:id'>
            <EditRequest />
          </PrivateRoute>
          <PrivateRoute path='/requests/:id'>
            <RequestDetail />
          </PrivateRoute>
          <Route path='/login'>
            {
              user?.email ?
              <Redirect to='/' /> : 
              <Auth />
            }
          </Route>
        </Switch>
      </Router>
    </>
  );
}
