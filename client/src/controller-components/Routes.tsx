import { useState } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../view-components/Header';
import BusinessList from './BusinessList';
import BusinessPage from './BusinessPage';
import { Coordinates } from '../models/coordinates';
import Homepage from './Homepage';

const Routes = () => {
  const [currentLocationCoords, setCurrentLocationCoords] = useState<Coordinates>({
    latitude: 37.79118339155342,
    longitude: -122.40330988014378
  }); //Twitch SF Office Location
  const [currentLocationPhysical, setCurrentLocationPhysical] = useState<string>("for San Francisco, CA");
  const [loading, setLoading] = useState<boolean>(true);

  return(
    <Router>
      <Header setLoading={setLoading}/>
      <Switch>
        <Route exact path='/'>
          <Homepage
            loading={loading}
            currentLocationCoords={currentLocationCoords}
            currentLocationPhysical={currentLocationPhysical}
            setLoading={setLoading}
            setCurrentLocationCoords={setCurrentLocationCoords}
            setCurrentLocationPhysical={setCurrentLocationPhysical}
          />
        </Route>
        <Route path='/business/:id'>
          <BusinessPage setLoading={setLoading}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;