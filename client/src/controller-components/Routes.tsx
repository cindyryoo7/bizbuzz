import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../view-components/Header';
import BusinessList from './BusinessList';
import BusinessPage from './BusinessPage';

const Routes = () => {
  return(
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <BusinessList />
        </Route>
        <Route path='/business/:id'>
          <BusinessPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;