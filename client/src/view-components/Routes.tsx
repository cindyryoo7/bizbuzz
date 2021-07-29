import { useState } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import BusinessPageController from '../controller-components/BusinessPageController';
import { GoogleCoords } from '../models/googleCoords';
import Header from './Header';
import HomepageController from '../controller-components/HomepageController';


const Routes = () => {
  const [mapCenter, setMapCenter] = useState<GoogleCoords>({
    lat: 37.79118339155342,
    lng: -122.40330988014378
  });

  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <HomepageController mapCenter={mapCenter} setMapCenter={setMapCenter}/>
        </Route>
        <Route path='/business/:id'>
          <BusinessPageController mapCenter={mapCenter} setMapCenter={setMapCenter}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;