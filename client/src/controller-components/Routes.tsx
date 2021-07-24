import { useState } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../view-components/Header';
import BusinessList from './BusinessList';
import BusinessPage from './BusinessPage';
import { Coordinates } from '../models/coordinates';

const Routes = () => {
  const [location, setLocation] = useState<Coordinates | string>({} as Coordinates);
  const [loading, setLoading] = useState<boolean>(true);

  return(
    <Router>
      <Header setLoading={setLoading}/>
      <Switch>
        <Route exact path='/'>
          <BusinessList location={location} loading={loading} setLoading={setLoading} setLocation={setLocation}/>
        </Route>
        <Route path='/business/:id'>
          <BusinessPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;