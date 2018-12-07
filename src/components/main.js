import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutUs from './aboutus';
import SignUp from './signup';
import ViewAll from './viewall';
import Login from './login';
import UserPage from './userpage';
import Terms from './terms';
import PrivacyPol from './privacypol';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutus" component={AboutUs} />
    <Route path="/signup" component={SignUp} />
    <Route path="/viewall" component={ViewAll} />
    <Route path="/login" component={Login} />
    <Route path="/userpage" component={UserPage} />
    <Route path="/terms" component={Terms} />
    <Route path="/privacypol" component={PrivacyPol} />
  </Switch>
)

export default Main;
