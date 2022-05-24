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
import RequestDetail from './views/Requests/RequestDetail';
import EditRequest from './views/Requests/EditRequest';
import AddRequest from './views/Requests/AddRequest';
import CopyRequest from './views/Requests/CopyRequest';

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
          <PrivateRoute path='/requests/copy/:id'>
            <CopyRequest />
          </PrivateRoute>
          <PrivateRoute path='/requests/:id'>
            <RequestDetail />
          </PrivateRoute>
          <PrivateRoute path='/add'>
            <AddRequest/>
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
