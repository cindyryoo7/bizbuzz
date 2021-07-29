import { useState } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import BusinessPageController from '../controller-components/BusinessPageController';
import Header from './Header';
import HomepageController from '../controller-components/HomepageController';


const Routes = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return(
    <Router>
      <Header setLoading={setLoading}/>
      <Switch>
        <Route exact path='/'>
          <HomepageController loading={loading} setLoading={setLoading}/>
        </Route>
        <Route path='/business/:id'>
          <BusinessPageController setLoading={setLoading}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;