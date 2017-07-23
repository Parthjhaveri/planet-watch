import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstPageCon from './firstPageContent.js';
import Footer from './footer.js';
import Navi from './nav.js';
import NeoTracker from './neotrack.js'
import './scripts.js';
import {$,jQuery} from 'jquery';
import PageRoute from './routes.js';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div>

      <Navi />

        <div className="mobilenavdiv navbar-fixed-top">
          <ul className="mobilestaticnav">
            <li className="mobilestaticnavli">NEO TRACKER</li>
            <li className="mobilestaticnavli">POLLUTION TRACKER</li>
            <li className="mobilestaticnavli">GEOPOLITICAL NEWS</li>
            <li className="mobilestaticnavli">OCEAN CLEANUP</li>
          </ul>
        </div>

        <div className="mainbanner">

        <center>
          <ul className="staticnav">
            <li className="staticnavli"><a href="#">NEO TRACKER</a></li>
            <li className="staticnavli">POLLUTION TRACKER</li>
            <li className="staticnavli">GEOPOLITICAL NEWS</li>
            <li className="staticnavli">OCEAN CLEANUP</li>
          </ul>
        </center>

          <p className="heading">PLANET WATCH</p>
          <p className="subheading">A CONSOLIDATAED NARRATIVE ON<br />TOP GLOBAL & ASTRONOMICAL ISSUES</p>

        </div>

        <FirstPageCon />
        <Footer />



      </div>
    );
  }
}

export default App;
