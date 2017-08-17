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
      stat: "",
      dateNow: "",
      currentTemp: "",
      weatherIcon: ""
    }

    this.getCityData = this.getCityData.bind(this)
  }

  getCityData() {

    // GET DATE AND TIME
    let utc = new Date().toLocaleString().slice(0,15);
    let amOrPm = new Date().toLocaleString().slice(19);
    this.setState({dateNow: this.state.dateNow.replace(this.state.dateNow, (utc + " " + amOrPm + " " + "EST"))});

    // STATISTICS CARD DIV
    const statCardDiv = document.getElementsByClassName('statCard')[0];
    const aqiHeading = document.getElementById('numHeading');
    const statHeading = document.getElementById('statHeading');
    const cityHeading = document.getElementById('cityNameHeading');
    const citynameDiv = document.getElementById('cityNameDiv');

    statCardDiv.style.display = "inherit";

    // STAT CARD COLORS
                        // GREEN,   YELLOW,    ORANGE,      RED,     PURPLE,     MAROON
    const colorArray = ['#00cc66', '#ffff00', '#ff5c33', '#ff3300', '#cc33ff', '#990000']

    // API KEY
    const apk = '7891941ceeff75cab7d9470aff0938510c443bb4';
    let that = this;

    // GET INPUT
    const userInput = document.getElementById('cityNameInput').value;

    // AJAX REQUEST TO RETREIVE CITY OBJECT
    $.get('http://api.waqi.info/feed/' + userInput + '/?token=' + apk, function(data, status) {

        // ---------------
        // IF TYPING ERROR
        // ---------------
        if (data.status != "ok") {
          statCardDiv.style.background = "#cc0000";
          aqiHeading.style.color = "white";
          cityHeading.style.color = "white";
          statHeading.style.color = "white";
          citynameDiv.style.display = "none";
          that.setState({stat: that.state.stat.replace(that.state.stat, "Oops! An error occured. Please try again.")});
        }

        // -----------------------------
        // IF STATUS IS OK, THEN PROCEED
        // -----------------------------
        else if (data.status === "ok") {

          // console.log(data.data);
          // console.log(data.data.city.name);
          // SET THE STATE
          that.setState({cityName: that.state.cityName.replace(that.state.cityName, data.data.city.name)});
          that.setState({aqiNumber: that.state.aqiNumber.replace(that.state.aqiNumber, data.data.aqi)});

          // LESS THAN 50 AND SO ON...
          if (data.data.aqi <= 50) {
            statCardDiv.style.background = colorArray[0];
            aqiHeading.style.color = "white";
            cityHeading.style.color = "white";
            statHeading.style.color = "white";
            that.setState({stat: that.state.stat.replace(that.state.stat, "GOOD 👍")});
          }
          else if (data.data.aqi > 50 && data.data.aqi <= 100) {
            statCardDiv.style.background = colorArray[1];
            aqiHeading.style.color = "black";
            cityHeading.style.color = "black";
            statHeading.style.color = "black";
            that.setState({stat: that.state.stat.replace(that.state.stat, "MODERATE 😐")});
          }
          else if (data.data.aqi > 100 && data.data.aqi <= 150) {
            statCardDiv.style.background = colorArray[2];
            aqiHeading.style.color = "black";
            cityHeading.style.color = "black";
            statHeading.style.color = "black";
            that.setState({stat: that.state.stat.replace(that.state.stat, "UNHEALTHY FOR SENSITIVE GROUPS 😷")});
          }
          else if (data.data.aqi > 150 && data.data.aqi <= 200) {
            statCardDiv.style.background = colorArray[3];
            aqiHeading.style.color = "black";
            cityHeading.style.color = "black";
            statHeading.style.color = "black";
            that.setState({stat: that.state.stat.replace(that.state.stat, "UNHEALTHY 🚫")});
          }
          else if (data.data.aqi > 200 && data.data.aqi <= 300) {
            statCardDiv.style.background = colorArray[4];
            aqiHeading.style.color = "white";
            cityHeading.style.color = "white";
            statHeading.style.color = "white";
            that.setState({stat: that.state.stat.replace(that.state.stat, "VERY UNHEALTHY 💀")});
          }
          else if (data.data.aqi > 300) {
            statCardDiv.style.background = colorArray[5];
            statCardDiv.style.backgroundImage = "url(https://cdn2.iconfinder.com/data/icons/pollution-global-warming/601/pollution-006-512.png)";
            statCardDiv.style.backgroundSize = "50%";
            statCardDiv.style.backgroundPosition = "center right";
            statCardDiv.style.backgroundRepeat = "no-repeat";
            aqiHeading.style.color = "white";
            cityHeading.style.color = "white";
            statHeading.style.color = "white";
            that.setState({stat: that.state.stat.replace(that.state.stat, "HAZARDOUS ⚠️")});
          }
      }

    }) // END GET REQ.

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // API CALL FOR WEATHER
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    const weatherKey = '2e58c6c1ba83421ea8563028171708';

    $.ajax({
      url:'//api.apixu.com/v1/current.json?key=2e58c6c1ba83421ea8563028171708&q=' + userInput,
      success: function(weatherData) {

        console.log(weatherData);

        let tempInF = weatherData.current.temp_f;
        let conditionIcon = weatherData.current.condition.icon;

        that.setState({currentTemp: that.state.currentTemp.replace(that.state.currentTemp, tempInF)});
        that.setState({weatherIcon: that.state.weatherIcon.replace(that.state.weatherIcon, conditionIcon)});

      }
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
                  <h2 id="enterHeading">Enter a city name below to find out its current air-quality statistics</h2>
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

                  <div id="cityNameDiv">
                    <h1 id="cityNameHeading">{this.state.cityName}</h1>
                    <h3 id="dateHeading">{this.state.dateNow}</h3>
                  </div>

                  <div id="statBody">

                    <div className="row">

                      <div className="col-md-6">
                        <h2>Air Quality:</h2>
                        <p id="numHeading">{this.state.aqiNumber}</p>
                        <p id="statHeading">{this.state.stat}</p>
                      </div>

                      <div className="col-md-6 rightSideWeather">
                        <p className="currWea"><img src={this.state.weatherIcon} /> {this.state.currentTemp} F</p>
                      </div>

                    </div>

                  </div>

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
