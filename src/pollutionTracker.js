import React, { Component } from 'react';
import './App.css';
import './scripts.js';
import $ from 'jquery';
// import App from './App';
import Footer from './footer.js';
// import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

class PollutionTracker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cityName: ""
    }

    this.getCityData = this.getCityData.bind(this)
  }

  getCityData() {

    // API KEY
    const apk = '7891941ceeff75cab7d9470aff0938510c443bb4';

    // GET INPUT
    const userInput = document.getElementById('cityNameInput').value;

    // SET THE STATE
    this.setState({cityName: this.state.cityName.replace(this.state.cityName, userInput)})

    console.log(userInput);

    $.get('http://api.waqi.info/feed/' + userInput + '/?token=' + apk, function(data, status){
            // alert("Data: " + data + "\nStatus: " + status);
            console.log(data)
    })

  }

  render() {
    return (
      <div>
        <div className="pollutionMainDiv">

          <center>
            <ul className="staticnav">
              <li className="staticnavli pollLi"><Link to='/'>HOME</Link></li>
              <li className="staticnavli pollLi"><Link to='/neo-tracker'>NEO TRACKER</Link></li>
              <li className="staticnavli pollLi"><Link to='/pollution-tracker'>POLLUTION TRACKER</Link></li>
              <li className="staticnavli pollLi">GEOPOLITICAL NEWS</li>
              <li className="staticnavli pollLi">OCEAN CLEANUP</li>
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

        <div className="pollWidgetDiv">

          <center>
            <div className="row">

              <div className="col-md-6">
                <center>
                  <h2 id="enterHeading">Enter a city name below to find out its current pollution statistics</h2>
                </center>
                <br />
                  <input type="text" placeholder="Enter a city name...(Ex. Shanghai)" id="cityNameInput" />
                  <br />
                  <button onClick={this.getCityData} id="dataButton">Get City data</button>
                  <br />
                  <img src="https://userscontent2.emaze.com/images/6609ee87-4411-44a7-a212-d8010ba861f8/150040fc8e9392a0f9997a46cf940303.png" className="img-responsive" id="chartpic" />
              </div>

              <div className="col-md-6">
                <h1 id="cityNameHeading">{this.state.cityName}</h1>
              </div>

            </div>
          </center>

        </div>

        <Footer />
      </div>
    );
  }
}

export default PollutionTracker;
