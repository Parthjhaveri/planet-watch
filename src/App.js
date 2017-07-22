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

        {
          // CONTENT ONE
        }

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
                      Updates on the Ocean clean-up effort which is just beginning to kick-off in the Pacific
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
            These NEOs have the potentialto hit Earth, which is why <br />
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
          // MORE FROM THE DEVELOPER
        }

        <div className="morefromdev">
          <center><h1>MORE FROM THE DEVELOPER</h1></center>
          <br />
          <img src="./spacedex.jpg" id="spacedexpic" />  
        </div>







      </div>
    );
  }
}

export default App;
