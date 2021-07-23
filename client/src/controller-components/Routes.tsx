import { useState } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../view-components/Header';
import BusinessList from './BusinessList';
import BusinessPage from './BusinessPage';

const Routes = () => {
  const [location, setLocation] = useState<number[] | string>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [id, setId] = useState<string>("");

  return(
    <Router>
      <Header setLocation={setLocation} setLoading={setLoading}/>
      <Switch>
        <Route exact path='/'>
          <BusinessList location={location} loading={loading} setLoading={setLoading} />
        </Route>
        <Route path='/business/:id'>
          <BusinessPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;