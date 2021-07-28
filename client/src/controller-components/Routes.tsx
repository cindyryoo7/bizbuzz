import { useState } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import BusinessPage from './BusinessPage';
import Header from '../view-components/Header';
import Homepage from './Homepage';


const Routes = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return(
    <Router>
      <Header setLoading={setLoading}/>
      <Switch>
        <Route exact path='/'>
          <Homepage loading={loading} setLoading={setLoading}/>
        </Route>
        <Route path='/business/:id'>
          <BusinessPage setLoading={setLoading}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;