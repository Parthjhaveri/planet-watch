import React, { Component } from 'react';
import './App.css';
import './scripts.js';
import $ from 'jquery'; 
import NeoTracker from './neotrack.js'
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class FirstPageCon extends Component {

  render() {
    return (
      <div>
        {
          // CONTENT ONE -----------------------------V
        }


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
              <div className="cont">
                  <div className="box neobox">
                  
                  </div>
                <div className="overlay">
                  <center>
                    Track Asteroids and other Near Earth Objects live in orbit while learning about their 
                    composition and threat levels
                  </center>
                </div>
              </div>
            </div>

            <div className="col-md-4">
            <center><h2 className="boxheading">POLLUTION TRACKER</h2></center>

            <div className="cont">
                <div className="box pollbox">
                
                </div>
              <div className="overlay">
                  <center>
                    Track real-time Air-Pollution levels of different cities and locales in the United States 
                  </center>
              </div>
            </div>

            </div>

            <div className="col-md-4">
            <center><h2 className="boxheading">OCEAN CLEANUP</h2></center>
              <div className="cont">
                  <div className="box oceanbox">
                  
                  </div>
                <div className="overlay">
                    <center>
                      Updates on the Ocean clean-up effort which is just beginning to kick-off inside the Pacific
                      Trash Vortex
                    </center>
                </div>
              </div>
            </div>

          </div>
 
          <div className="whitebox">
            <center>VIEW ALL FEATURES</center>
          </div>

        </center>
        </div>

        {
          // CONTENT TWO
        }

        <div className="contenttwo"> 
          <p id="asttrackerheading">ASTEROID TRACKER</p>
            <br />
          <p id="asttrackersubheading">
            Track Asteroids that are currently in orbit around the Earth. <br />
            These NEOs have the potential to hit Earth, which is why <br />
            a close eye is kept on their relative trajectories. 
          </p>
          <br />
          <button className="neobutton">NEO TRACKER</button>
        </div>

        {
          // CONTENT THREE
        }

        <div className="contentthree">

          <p id="livefromssheading">LIVE FROM THE SPACE STATION</p>
            <br />
          <p id="livefromsssubheading">
            Watch live broadcasts from the International Space Station <br />
            Track where the ISS is currently above Earth <br />
            Learn more about current and future research!
          </p>
          <br />
          <button className="neobutton">GO LIVE<span id="reddot">•</span></button>
        </div>

        {
          // OCEAN CLEANUP
        }

        <div className="morefromdev">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/78/The_Ocean_Cleanup_logo.svg/1200px-The_Ocean_Cleanup_logo.svg.png"  className="img-responsive oceancleanuppic" alt="Responsive image" />
          
          <p className="oceantext">
            Keep up with the largest clean-up effort in the history of Mankind <br />
            Track Global Pollution Levels from the palm of your hand
          </p>

        </div>

        {
          // THANKS TO
        }

        <div className="thanksto">
        <center>A big thank you to our data sources</center>
        <br />
          <center>
            <ul className="creditul">
              <li className="creditli"><img src="https://seeklogo.com/images/N/NASA-logo-9411797223-seeklogo.com.png" className="img-responsive creditlogopic" alt="Responsive image" /></li>
              <li className="creditli"><img src="https://memex.jpl.nasa.gov/img/jpl-logo.png" className="img-responsive creditlogopic" alt="Responsive image" /></li>
              <li className="creditli"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/78/The_Ocean_Cleanup_logo.svg/1200px-The_Ocean_Cleanup_logo.svg.png" className="img-responsive creditlogopic" alt="Responsive image" /></li>
              <li className="creditli"><img src="http://aqicn.org/images/logo/fblogo.png" className="img-responsive creditlogopic" alt="Responsive image" /></li>
            </ul>
          </center>
        </div>

</div>
    );
  }
}

export default FirstPageCon;