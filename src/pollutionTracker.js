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
      cityName: "",
      aqiNumber: "",
      statCardColor: "",
      stat: ""
    }

    this.getCityData = this.getCityData.bind(this)
  }

  getCityData() {

    // STATISTICS CARD DIV
    const statCardDiv = document.getElementsByClassName('statCard')[0];

    statCardDiv.style.display = "inherit";

    // STAT CARD COLORS
                        // GREEN,   YELLOW,    ORANGE,      RED,     PURPLE,     MAROON
    const colorArray = ['#00b300', '#ffff00', '#ff6600', '#ff3300', '#cc33ff', '#990000']

    // API KEY
    const apk = '7891941ceeff75cab7d9470aff0938510c443bb4';
    let that = this;

    // GET INPUT
    const userInput = document.getElementById('cityNameInput').value;

    // SET THE STATE
    this.setState({cityName: this.state.cityName.replace(this.state.cityName, userInput)});

    // AJAX REQUEST TO RETREIVE CITY OBJECT
    $.get('http://api.waqi.info/feed/' + userInput + '/?token=' + apk, function(data, status){

        console.log(data.data);
        // SET THE STATE
        that.setState({cityName: that.state.cityName.replace(that.state.cityName, data.data.city.name)});
        that.setState({aqiNumber: that.state.aqiNumber.replace(that.state.aqiNumber, data.data.aqi)});

        if (data.data.aqi <= 50) {
          statCardDiv.style.background = colorArray[0];
          that.setState({stat: that.state.stat.replace(that.state.stat, "GOOD")});
        }

    }) // END GET REQ.

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
                  <br />
                  <a id='creditPollPic' href="https://userscontent2.emaze.com/images/6609ee87-4411-44a7-a212-d8010ba861f8/150040fc8e9392a0f9997a46cf940303.png" target="_blank">IMG Credit</a>
              </div>

              <div className="col-md-6">
                <div className="statCard">
                  <h1 id="cityNameHeading">{this.state.cityName}</h1>
                  <p id="numHeading">{this.state.aqiNumber}</p>
                  <p id="numHeading">{this.state.stat}</p>
                </div>
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
