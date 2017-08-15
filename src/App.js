import React, { Component } from 'react';
import './App.css';
import FirstPageCon from './firstPageContent.js';
// import PollutionTracker from './pollutionTracker.js';
import Footer from './footer.js';
import Navi from './nav.js';
import './scripts.js';
// import $ from 'jquery';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>

      <Navi />

        <div className="mobilenavdiv navbar-fixed-top">
          <ul className="mobilestaticnav">
            <li className="mobilestaticnavli"><Link to='/neo-tracker'>NEO TRACKER</Link></li>
            <li className="mobilestaticnavli"><Link to='/pollution-tracker'>POLLUTION TRACKER</Link></li>
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
