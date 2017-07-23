import React from 'react';
import { Switch, Route } from 'react-router-dom';
import $ from 'jquery';
import App from './App';
import NeoTracker from './neotrack.js';
import FirstPageCon from './firstPageContent.js';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

// ROUTES
const PageRoute = () => (
  <main>
    <Switch>
      <Route exact path='/home' component={App}/>
      <Route path='/neo-tracker' component={NeoTracker}/>
    </Switch>
  </main>
)

export default PageRoute;