import React, { Component } from 'react';
import './App.css';
import './scripts.js';
import Navi from './nav.js';
import Footer from './footer.js';
import $ from 'jquery'; 
// import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Main from './Main.js';

// REACT VIDEO
// import { DefaultPlayer as Video } from 'react-html5video';
// import 'react-html5video/dist/styles.css';


class NeoTracker extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      videoURL: "./images/asteroidvid.mp4"
    }

  }

  componentDidMount() {

    const myApiKey = "QkkACyxVm5f7Lbp32qPpjeklibnyWHgbFcNd5tuL";
    // const that = this;
  
    $.ajax({

      url: "https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=" + myApiKey,
      success: function (data) {
        console.log(data);
      }

    })


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

        <div className="mobilenavdiv navbar-fixed-top">
          <ul className="mobilestaticnav">
            <li className="mobilestaticnavli"><Link to='/neo-tracker'>NEO TRACKER</Link></li>
            <li className="mobilestaticnavli">POLLUTION TRACKER</li>
            <li className="mobilestaticnavli">GEOPOLITICAL NEWS</li>
            <li className="mobilestaticnavli">OCEAN CLEANUP</li>
          </ul>
        </div>

          <p id="asttrackerheading">ASTEROID TRACKER</p>
          <br />
          <p id="asttrackersubheading">
          From here, you can monitor Near Earth Object trajectories, properties <br />
          and close approaches
          </p>

          <center>
            <button id="gotrack">GO TRACK</button>
          </center>

        </div>
        
        {
          //new Date().toLocaleTimeString()
        }

        {
          // TRACKING DIV
        }

        <div className="trackingdiv">



        </div>


        <Footer />

      </div>
    );
  }
}

export default NeoTracker;
