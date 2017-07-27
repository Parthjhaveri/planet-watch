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
      buttonClickCounter: 0,
      asteroidName: "",
      astNameArray: [],
      secondAstNameArray: [],
      juneAsteroidsArray: [],
      mayAsteroidsArray: [],
      aprilAsteroidsArray: [],
      julyAsteroidsArray: [],
      property: "Property"
    }

    // BIND THE FUNCTION TO THIS 
    this.julyAsteroids = this.julyAsteroids.bind(this);
    this.juneAsteroids = this.juneAsteroids.bind(this);
    this.mayAsteroids = this.mayAsteroids.bind(this);
    this.aprilAsteroids = this.aprilAsteroids.bind(this);
    this.julyAsteroids = this.julyAsteroids.bind(this);

  }

  componentDidMount() {

    const myApiKey = "QkkACyxVm5f7Lbp32qPpjeklibnyWHgbFcNd5tuL";
    const that = this;
  
    $.ajax({

      url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-14&end_date=2017-07-21&api_key=" + myApiKey,
      success: (data) => {
        
        // ARRAY FOR WEEK OF JULY 21st ASTEROIDS
        const july21Asteroids = data.near_earth_objects['2017-07-21'];

        // console.log(
        //   "So this is your array- ",  july21Asteroids
        // );

        /* 
           MAP OVER EACH ELEMENT IN THE ARRAY (WHICH IS AN OBJECT), SET STATE OF THE ASTEROID ARRAY TO
           CONTAIN EACH ELEMENT WITHIN IT- WHERE IN THE UL BELOW, IT IS MAPPED OVER AND EVERY ASTEROID NAME 
           IS RENDERED 
        */
        july21Asteroids.map( (element, index) => {

          return (that.setState({astNameArray: that.state.astNameArray.concat(element.name)}));

        })

        // console.log("AstName array -", that.state.astNameArray);

      } // ENDS SUCCESS FUNCTION

    }) // ENDS AJAX CALL

  } // ENDS COMPONENT DID MOUNT

  julyAsteroids() {

    // ---------------------------------------------------------------------------------------------    
    // AJAX CALL #2 --------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------    

    // const astListDiv = document.getElementById('listdiv');

    const myApiKey = "QkkACyxVm5f7Lbp32qPpjeklibnyWHgbFcNd5tuL";
    const that = this;

    // BUTTON CLICK COUNTER
    // BASED ON THE NUMBER OF CLICKS, IT FIRES A DIFFERENT AJAX CALL FOR EACH BUTTON PRESS, WHICH IN TURN
    // LOADS A DIFFERENT SET OF ASTEROIDS FOR THE USER

    // DISPLAY GREEN SUCCESS BUTTON IF LOADED
    const successButt = document.getElementById('successbutton');
    // const listDivBorder = document.getElementById('listdiv');

    successButt.style.display = "inherit";
    successButt.style.opacity = 1;
    successButt.style.transition = "2s";

    // listDivBorder.style.border = "1px solid #00cc66";

    // IF THE BUTTON IS CLICKED, REMOVE THE ONCLICK COMMAND FROM THE BUTTON HTML 
    const julyButton = document.getElementsByClassName('julybutt');

    this.setState({buttonClickCounter: this.state.buttonClickCounter + 1})
    
    if (this.state.buttonClickCounter === 0) {
        $.ajax({

          url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-6&end_date=2017-07-13&api_key=" + myApiKey,
          success: (astdata) => {
            
          // console.log(astdata.near_earth_objects["2017-07-10"]);

          const secondBatchAsts = astdata.near_earth_objects["2017-07-10"];

          /* 
             MAP OVER EACH ELEMENT IN THE ARRAY (WHICH IS AN OBJECT), SET STATE, WHEN BUTTON IS PRESSED DOWN
             BELOW, IT FIRES AN AJAX CALL TO RETREIVE MORE ASTEROIDS AND LOAD THEM INTO THE UL
          */
          secondBatchAsts.map( (elem, ind) => {

            return (that.setState({secondAstNameArray: that.state.secondAstNameArray.concat(elem.name)}))

          })

          } // ENDS SUCCESS FUNCTION

        }) // ENDS AJAX CALL
    } else if (this.state.buttonClickCounter !== 0) {

            const faliureButt = document.getElementById('faliurebutton');

            faliureButt.style.display = "inherit";
            faliureButt.style.opacity = 1;
            faliureButt.style.transition = "2s";

            const successButt = document.getElementById('successbutton');

            successButt.style.display = "none";
            successButt.style.opacity = 1;
            successButt.style.transition = "2s";
          
          $.ajax({

            url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-06-23&end_date=2017-06-30&api_key=" + myApiKey,
            success: () => {

            console.log("nothing");

            } // ENDS SUCCESS FUNCTION

          }) // ENDS AJAX CALL

    }

  }

  juneAsteroids() {

    // ---------------------------------------------------------------------------------------------    
    // AJAX CALL #2 --------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------    

    // const astListDiv = document.getElementById('listdiv');

    const myApiKey = "QkkACyxVm5f7Lbp32qPpjeklibnyWHgbFcNd5tuL";
    const that = this;

    // DISPLAY GREEN SUCCESS BUTTON IF LOADED
    const successButt = document.getElementById('successbutton');

    successButt.style.display = "inherit";
    successButt.style.opacity = 1;
    successButt.style.transition = "2s";

    // IF THE BUTTON IS CLICKED, REMOVE THE ONCLICK COMMAND FROM THE BUTTON HTML 
    const juneButton = document.getElementsByClassName('junebutt');

    this.setState({buttonClickCounter: this.state.buttonClickCounter + 1})

    // BUTTON CLICK COUNTER
    // BASED ON THE NUMBER OF CLICKS, IT FIRES A DIFFERENT AJAX CALL FOR EACH BUTTON PRESS, WHICH IN TURN
    // LOADS A DIFFERENT SET OF ASTEROIDS FOR THE USER

    if (this.state.buttonClickCounter === 0) {
        $.ajax({

          url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-06-23&end_date=2017-06-30&api_key=" + myApiKey,
          success: (astdata) => {

          const juneAsteroids = astdata.near_earth_objects["2017-06-27"];

          /* 
             MAP OVER EACH ELEMENT IN THE ARRAY (WHICH IS AN OBJECT), SET STATE, WHEN BUTTON IS PRESSED DOWN
             BELOW, IT FIRES AN AJAX CALL TO RETREIVE MORE ASTEROIDS AND LOAD THEM INTO THE UL
          */
          juneAsteroids.map( (elem, ind) => {

            return (that.setState({juneAsteroidsArray: that.state.juneAsteroidsArray.concat(elem.name)}))

          })


          } // ENDS SUCCESS FUNCTION

        }) // ENDS AJAX CALL
    } else if (this.state.buttonClickCounter !== 0) {

            const faliureButt = document.getElementById('faliurebutton');

            faliureButt.style.display = "inherit";
            faliureButt.style.opacity = 1;
            faliureButt.style.transition = "2s";

            const successButt = document.getElementById('successbutton');

            successButt.style.display = "none";
            successButt.style.opacity = 1;
            successButt.style.transition = "2s";
          
          $.ajax({

            url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-06-23&end_date=2017-06-30&api_key=" + myApiKey,
            success: () => {

            console.log("nothing");

            } // ENDS SUCCESS FUNCTION

          }) // ENDS AJAX CALL

    }

  }

mayAsteroids() {

    // ---------------------------------------------------------------------------------------------    
    // AJAX CALL #2 --------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------    

    // const astListDiv = document.getElementById('listdiv');

    const myApiKey = "QkkACyxVm5f7Lbp32qPpjeklibnyWHgbFcNd5tuL";
    const that = this;

    // DISPLAY GREEN SUCCESS BUTTON IF LOADED
    const successButt = document.getElementById('successbutton');

    successButt.style.display = "inherit";
    successButt.style.opacity = 1;
    successButt.style.transition = "2s";


    // IF THE BUTTON IS CLICKED, DISABLE ANY FURTHER AJAX CALLS
    const mayButton = document.getElementsByClassName('maybutt');

    this.setState({buttonClickCounter: this.state.buttonClickCounter + 1})

    // BUTTON CLICK COUNTER
    // BASED ON THE NUMBER OF CLICKS, IT FIRES A DIFFERENT AJAX CALL FOR EACH BUTTON PRESS, WHICH IN TURN
    // LOADS A DIFFERENT SET OF ASTEROIDS FOR THE USER

    if (this.state.buttonClickCounter === 0) {
        $.ajax({

          url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-05-23&end_date=2017-05-30&api_key=" + myApiKey,
          success: (astdata) => {

          const mayAsteroids = astdata.near_earth_objects["2017-05-29"];

          /* 
             MAP OVER EACH ELEMENT IN THE ARRAY (WHICH IS AN OBJECT), SET STATE, WHEN BUTTON IS PRESSED DOWN
             BELOW, IT FIRES AN AJAX CALL TO RETREIVE MORE ASTEROIDS AND LOAD THEM INTO THE UL
          */
          mayAsteroids.map( (elem, ind) => {

            return (that.setState({mayAsteroidsArray: that.state.mayAsteroidsArray.concat(elem.name)}))

          })
        
          } // ENDS SUCCESS FUNCTION

        }) // ENDS AJAX CALL
      } else if (this.state.buttonClickCounter !== 0) {

            const faliureButt = document.getElementById('faliurebutton');

            faliureButt.style.display = "inherit";
            faliureButt.style.opacity = 1;
            faliureButt.style.transition = "2s";

            const successButt = document.getElementById('successbutton');

            successButt.style.display = "none";
            successButt.style.opacity = 1;
            successButt.style.transition = "2s";
          
          $.ajax({

            url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-05-23&end_date=2017-05-30&api_key=" + myApiKey,
            success: () => {

            console.log("nothing");

            } // ENDS SUCCESS FUNCTION

          }) // ENDS AJAX CALL

      }

  }

aprilAsteroids() {

    // ---------------------------------------------------------------------------------------------    
    // AJAX CALL #2 --------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------    

    // const astListDiv = document.getElementById('listdiv');

    const myApiKey = "QkkACyxVm5f7Lbp32qPpjeklibnyWHgbFcNd5tuL";
    const that = this;

    const successButt = document.getElementById('successbutton');

    successButt.style.display = "inherit";
    successButt.style.opacity = 1;
    successButt.style.transition = "2s";

    // BUTTON CLICK COUNTER
    // BASED ON THE NUMBER OF CLICKS, IT FIRES A DIFFERENT AJAX CALL FOR EACH BUTTON PRESS, WHICH IN TURN
    // LOADS A DIFFERENT SET OF ASTEROIDS FOR THE USER

        // IF THE BUTTON IS CLICKED, REMOVE THE ONCLICK COMMAND FROM THE BUTTON HTML 
        const aprilButton = document.getElementsByClassName('aprilbutt');

        this.setState({buttonClickCounter: this.state.buttonClickCounter + 1})

        console.log("Add one- ", this.state.buttonClickCounter);

        if (this.state.buttonClickCounter === 0) {

          $.ajax({

            url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-05-23&end_date=2017-05-30&api_key=" + myApiKey,
            success: (astdata) => {

            const aprilAsteroids = astdata.near_earth_objects["2017-05-27"];

            console.log(aprilAsteroids);

            /* 
               MAP OVER EACH ELEMENT IN THE ARRAY (WHICH IS AN OBJECT), SET STATE, WHEN BUTTON IS PRESSED DOWN
               BELOW, IT FIRES AN AJAX CALL TO RETREIVE MORE ASTEROIDS AND LOAD THEM INTO THE UL
            */
            aprilAsteroids.map( (elem, ind) => {

              return (that.setState({aprilAsteroidsArray: that.state.aprilAsteroidsArray.concat(elem.name)}))

            })

            } // ENDS SUCCESS FUNCTION

          }) // ENDS AJAX CALL

        } else if (this.state.buttonClickCounter !== 0){

            const faliureButt = document.getElementById('faliurebutton');

            faliureButt.style.display = "inherit";
            faliureButt.style.opacity = 1;
            faliureButt.style.transition = "2s";

            const successButt = document.getElementById('successbutton');

            successButt.style.display = "none";
            successButt.style.opacity = 1;
            successButt.style.transition = "2s";
          
          $.ajax({

            url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-05-23&end_date=2017-05-30&api_key=" + myApiKey,
            success: () => {

            console.log("nothing");

            } // ENDS SUCCESS FUNCTION

          }) // ENDS AJAX CALL

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

        <div className="mobilenavdiv navbar-fixed-top">
          <ul className="mobilestaticnav">
            <li className="mobilestaticnavli"><Link to='/neo-tracker'>NEO TRACKER</Link></li>
            <li className="mobilestaticnavli">POLLUTION TRACKER</li>
            <li className="mobilestaticnavli">GEOPOLITICAL NEWS</li>
            <li className="mobilestaticnavli">OCEAN CLEANUP</li>
          </ul>
        </div>

          <p id="astpageheading">ASTEROID TRACKER</p>
          <br />
          <p id="astpagesubheading">
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

        <center>
          <div className="row">
            
            <div className="col-md-4 nameSide">

              <h2>ARCHIVES</h2>
              <hr id="archhr" />
              <h4 id="archivesdesc">The list of Asteroids below are segregated by date, based on their closest approach date to Earth</h4>
                
              <div className="buttonBox">  
                <button id="loadmoreasts" className="julybutt" onClick={this.julyAsteroids}>JULY 2017 ASTEROIDS</button>
                <button id="loadmoreasts" className="junebutt" onClick={this.juneAsteroids}>JUNE 2017 ASTEROIDS</button>
                <button id="loadmoreasts" className="maybutt" onClick={this.mayAsteroids}>MAY 2017 ASTEROIDS</button>
                <button id="loadmoreasts" className="aprilbutt" onClick={this.aprilAsteroids}>APRIL 2017 ASTEROIDS</button>
              </div>
              <br />
              <div className="success" id="successbutton" role="alert">Success- Asteroids loaded</div>
              <div className="faliure" id="faliurebutton" role="alert">ALREADY LOADED!</div>
            </div>

            
            <div className="col-md-4 propertiesSide" >

                <h2>LIST OF ASTEROIDS:</h2>
                <br />

                <div id="listdiv">
                  <ul className="astListUl">
                    {
                      this.state.astNameArray.map (
                        (name, index) => {
                          return (<li className="asteroidNameLi" key={index} value={name}>{name}</li>)
                        }
                      )
                    }

                    { 
                      this.state.secondAstNameArray.map (
                        (name, index) => {
                          return (<li className="asteroidNameLi" key={index} value={name}>{name}</li>)
                        }
                      )
                    }

                    { 
                      this.state.juneAsteroidsArray.map (
                        (name, index) => {
                          return (<li className="asteroidNameLi" key={index} value={name}>{name}</li>)
                        }
                      )
                    }

                    { 
                      this.state.mayAsteroidsArray.map (
                        (name, index) => {
                          return (<li className="asteroidNameLi" key={index} value={name}>{name}</li>)
                        }
                      )
                    }


                    { 
                      this.state.aprilAsteroidsArray.map (
                        (name, index) => {
                          return (<li className="asteroidNameLi" key={index} value={name}>{name}</li>)
                        }
                      )
                    }
                  </ul>
                </div>

            </div>

            <div className="col-md-4">
              
              <h2>ASTEROID PROPERTIES:</h2>
              <br />
              
              <div id="propertiesDiv">

                <table>
                  <tbody>
                    <tr>
                      <th>Hazardous?</th>
                      <td>{this.state.property}</td>
                    </tr>
                    <tr>
                      <th>Estimated Diameter (Miles):</th>
                      <td>{this.state.property}</td>
                    </tr>
                    <tr>
                      <th>Orbiting body:</th>
                      <td>{this.state.property}</td>
                    </tr>   
                    <tr>
                      <th>Miss-distance (Miles):</th>
                      <td>{this.state.property}</td>
                    </tr>                    
                    <tr>
                      <th>Speed (MPH):</th>
                      <td>{this.state.property}</td>
                    </tr>                    
                    <tr>
                      <th>Speed (KMPH):</th>
                      <td>{this.state.property}</td>
                    </tr>                    
                    <tr>
                      <th>JPL URL:</th>
                      <td>{this.state.property}</td>
                    </tr>                    
                    <tr>
                      <th>NEO reference ID:</th>
                      <td>{this.state.property}</td>
                    </tr>
                  </tbody>
                </table>

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

export default NeoTracker;
