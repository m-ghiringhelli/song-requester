import Auth from "./views/Auth/Auth";
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  PrivateRoute
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          
          <Route path='/login'>
            <Auth />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
