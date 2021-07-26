import { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../view-components/Header';
import BusinessList from './BusinessList';
import BusinessPage from './BusinessPage';
import { Coordinates } from '../models/coordinates';
import Homepage from './Homepage';
import { GoogleCoords } from '../models/googleCoords';


const Routes = () => {
  // const [currentLocationCoords, setCurrentLocationCoords] = useState<Coordinates>({
  //   latitude: 37.79118339155342,
  //   longitude: -122.40330988014378
  // }); //Twitch SF Office Location
  // const [currentLocationPhysical, setCurrentLocationPhysical] = useState<string>("for San Francisco, CA");
  // const [loading, setLoading] = useState<boolean>(true);
  // const [centerCoords, setCenterCoords] = useState<GoogleCoords>({
  //   lat: 37.79118339155342,
  //   lng: -122.40330988014378
  // });//Twitch SF Office Location
  // const [centerPhysical, setCenterPhysical] = useState<string>("for San Francisco, CA");

  const [loading, setLoading] = useState<boolean>(false); // change to true?

  return(
    <Router>
      <Header setLoading={setLoading}/>
      <Switch>
        <Route exact path='/'>
          <Homepage
            loading={loading}
            // centerCoords={centerCoords}
            // centerPhysical={centerPhysical}
            // setCenterCoords={setCenterCoords}
            // setCenterPhysical={setCenterPhysical}
            setLoading={setLoading}
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