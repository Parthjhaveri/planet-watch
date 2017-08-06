import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import AstroMining from './astroMining.js';
import FirstPageCon from './firstPageContent.js';
import Footer from './footer.js';
import Navi from './nav.js';
// import NeoTracker from './neotrack.js';
import './scripts.js';
import $ from 'jquery';
// import Main from './Main.js';
// import { BrowserRouter } from 'react-router-dom';
// import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>

      <Navi />

        <div className="mobilenavdiv navbar-fixed-top">
          <ul className="mobilestaticnav">
            <li className="mobilestaticnavli"><Link to='/neo-tracker'>NEO TRACKER</Link></li>
            <li className="mobilestaticnavli">POLLUTION TRACKER</li>
            <li className="mobilestaticnavli">GEOPOLITICAL NEWS</li>
            <li className="mobilestaticnavli">OCEAN CLEANUP</li>
          </ul>
        </div>
        
        <FirstPageCon />
        <Footer />



      </div>
    );
  }
}

export default App;
