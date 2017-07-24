import React, { Component } from 'react';
import './App.css';
import './scripts.js';
import Navi from './nav.js';
import Footer from './footer.js';
import $ from 'jquery'; 
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from './Main.js';

// REACT VIDEO
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';


class NeoTracker extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      videoURL: "./images/asteroidvid.mp4"
    }

  }

  render() {
    return (
      <div className="neotrackerdiv">

        <Navi />

        {
          // MAIN BANNER
        }

        <div className="nasawallpaper">

          <center>
            <ul className="staticnav" id="astnav">
              <li className="aststaticnavli"><Link to='/'>HOME</Link></li>
              <li className="aststaticnavli"><Link to='/neo-tracker'>NEO TRACKER</Link></li>
              <li className="aststaticnavli">POLLUTION TRACKER</li>
              <li className="aststaticnavli">GEOPOLITICAL NEWS</li>
              <li className="aststaticnavli">OCEAN CLEANUP</li>
            </ul>
          </center>

          <p id="asttrackerheading">ASTEROID TRACKER</p>

        </div>
        
        {
          //new Date().toLocaleTimeString()
        }


        <Footer />

      </div>
    );
  }
}

export default NeoTracker;
