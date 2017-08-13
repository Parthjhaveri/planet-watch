import React, { Component } from 'react';
import './App.css';
import './scripts.js';
import $ from 'jquery';
import App from './App';
import Footer from './footer.js';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class PollutionTracker extends Component {

  render() {
    return (
      <div>
        <div className="pollutionMainDiv">

          <center>
            <ul className="staticnav">
              <li className="staticnavli"><Link to='/neo-tracker'>NEO TRACKER</Link></li>
              <li className="staticnavli"><Link to='/pollution-tracker'>POLLUTION TRACKER</Link></li>
              <li className="staticnavli">GEOPOLITICAL NEWS</li>
              <li className="staticnavli">OCEAN CLEANUP</li>
            </ul>
          </center>

          <div className="mobilenavdiv navbar-fixed-top">
            <ul className="mobilestaticnav">
              <li className="mobilestaticnavli"><Link to='/neo-tracker'>NEO TRACKER</Link></li>
              <li className="mobilestaticnavli"><Link to='/pollution-tracker'>POLLUTION TRACKER</Link></li>
              <li className="mobilestaticnavli">GEOPOLITICAL NEWS</li>
              <li className="mobilestaticnavli">OCEAN CLEANUP</li>
            </ul>
          </div>

          <center><p id="pollheading">Pollution Tracker</p></center>
          <center><p id="pollsubheading">Track pollution levels in your area, <em>Globally</em></p></center>
          <center><button className="goTrackPoll">Track pollution levels!</button></center>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PollutionTracker;
