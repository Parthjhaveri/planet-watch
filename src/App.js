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
          <center><h1 id="contentoneheading">A centralized hub for all your Planetary knowledge</h1></center>
          <hr className="whitehr" />
          <br />

        <center>
          <div className="row">
            <div className="col-md-4">
            <center><h2 className="boxheading">NEO TRACKER</h2></center>
              <div className="box neobox">
              
              </div>
            </div>

            <div className="col-md-4">
            <center><h2 className="boxheading">POLLUTION TRACKER</h2></center>
              <div className="box pollbox">
              
              </div>
            </div>

            <div className="col-md-4">
            <center><h2 className="boxheading">OCEAN CLEANUP</h2></center>
              <div className="box oceanbox">
              
              </div>
            </div>

          </div>
 
          <div className="whitebox">
            <center>VIEW ALL FEATURES</center>
          </div>

        </center>
        </div>













      </div>
    );
  }
}

export default App;
