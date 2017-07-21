import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="mainbanner">

        <center>
          <ul className="staticnav">
            <li className="staticnavli">NEO TRACKER</li>
            <li className="staticnavli">POLLUTION TRACKER</li>
            <li className="staticnavli">GEOPOLITICAL NEWS</li>
            <li className="staticnavli">OCEAN CLEANUP</li>
          </ul>
        </center>

          <p className="heading">PLANET WATCH</p>
          <p className="subheading">A CONSOLIDATAED NARRATIVE ON<br />TOP GLOBAL & ASTRONOMICAL ISSUES</p>

        </div>

        <div className="contentone">
        </div>



      </div>
    );
  }
}

export default App;
