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
      property: [],
      asteroidList: [],
      keyVals: {},
      matchArray: [],
      hazBool: "",
      estDiam: "",
      orbitingBody: "",
      missDistance: "",
      speedMPH: "",
      speedKMPS: "",
      jplURL: "",
      astId: "",
    }

    // BIND THE FUNCTION TO THIS 
    this.julyAsteroids = this.julyAsteroids.bind(this);
    this.juneAsteroids = this.juneAsteroids.bind(this);
    this.mayAsteroids = this.mayAsteroids.bind(this);
    this.aprilAsteroids = this.aprilAsteroids.bind(this);
    this.julyAsteroids = this.julyAsteroids.bind(this);
    this.viewProp = this.viewProp.bind(this);
    this.bodyClick = this.bodyClick.bind(this);
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

  viewProp() {

    const myApiKey = "QkkACyxVm5f7Lbp32qPpjeklibnyWHgbFcNd5tuL";
    const that = this;

          $.ajax({

            url: "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-14&end_date=2017-07-21&api_key=" + myApiKey,
            success: (astdata) => {

            // THE ARRAY OF ASTEROIDS
            const astProp = astdata.near_earth_objects["2017-07-21"];

            console.log("Array list of Asteroids= ", astProp);

            // IS IT HAZARDOUS? -------------------------------------------------
            astProp.map( (elem) => {
              return (that.setState({property: that.state.property.concat(elem.is_potentially_hazardous_asteroid)}))
            }) // NOW WE HAVE THE STATE SET TO AN ARRAY OF BOOLEANS OUT OF WHICH WE MUST MAP THE ONE CLICKED
               // TO THE ACTUAL PROPERTIES OF THE ASTEROID

            console.log("The State of the properties= ", that.state.property)

            // PUSH ASTEROIDS INTO LIST FOR REFERENCE
            astProp.map( (element) => {
              console.log("ELEMENT= ", element)

              return (that.setState({asteroidList: that.state.asteroidList.concat(element)}))
            })
            // console.log("AST LIST!!! ", this.state.asteroidList)
            // ON BUTTON PRESS, IF THE 'is_potentially_hazardous' IN THE OBJECT EQUALS THE ELEMENT IN THE 
            // BOOLEAN ARRAY, SET THE STATE OF THE HAZARDOUS PROP TO TRUE

            console.log("So, this is the element object: ", this.state.asteroidList)

            const astListVar = this.state.asteroidList;

            // ------------------------------------------------------------------

            } // ENDS SUCCESS FUNCTION

          }) // ENDS AJAX CALL

  }

  bodyClick(e) {
  
            var target = $(e.target);
            var listItem = document.getElementsByClassName('asteroidNameLi');
            const astListVar = this.state.asteroidList;

            // CODE INSIDE HERE IS CONDITIONED TO WORK ONLY IF THE 'li' IS CLICKED
            if (target.is('.asteroidNameLi')) {

                var target = e.target || e.srcElement;  
                console.log("HTML TARGET ", target.innerHTML); 

                    // DO AN AJAX CALL AND RETURN THE OBJECT
                    const myApiKey = "QkkACyxVm5f7Lbp32qPpjeklibnyWHgbFcNd5tuL";
                    const that = this;

                      // console.log("AST LIST!!! ", this.state.asteroidList)
                      // ON BUTTON PRESS, IF THE 'is_potentially_hazardous' IN THE OBJECT EQUALS THE ELEMENT IN THE 
                      // BOOLEAN ARRAY, SET THE STATE OF THE HAZARDOUS PROP TO TRUE

                      // CLICK FOR THE FIRST BATCH OF ASTEROIDS
                      $.ajax({
                        url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-14&end_date=2017-07-21&api_key=' + myApiKey,
                        success: (data) => {
                          console.log("ListItem click data: ", data.near_earth_objects["2017-07-21"]);

                          // MAP
                          data.near_earth_objects["2017-07-21"].map( (el,idx) => {
                            console.log(el)

                            if (el.name === target.innerHTML) {
                              // console.log(el.is_potentially_hazardous_asteroid)
                              return (
                                that.setState({
                                  hazBool: that.state.hazBool.replace(that.state.hazBool, el.is_potentially_hazardous_asteroid),
                                  estDiam: that.state.estDiam.replace(that.state.estDiam, el.estimated_diameter.miles.estimated_diameter_min),
                                  orbitingBody: that.state.orbitingBody.replace(that.state.orbitingBody, el.close_approach_data[0].orbiting_body),
                                  missDistance: that.state.missDistance.replace(that.state.missDistance, el.close_approach_data[0].miss_distance.miles),
                                  speedMPH: that.state.speedMPH.replace(that.state.speedMPH, el.close_approach_data[0].relative_velocity.miles_per_hour),
                                  speedKMPS: that.state.speedKMPS.replace(that.state.speedKMPS, el.close_approach_data[0].relative_velocity.kilometers_per_second),
                                  jplURL: that.state.jplURL.replace(that.state.jplURL, el.nasa_jpl_url),
                                  astId: that.state.astId.replace(that.state.astId, el.neo_reference_id),
                                })
                              ) // ENDS RETURN

                            } // ENDS IF STATEMENT 

                          }) // ENDS MAP

                        } // ENDS SUCCESS FUNCTION
                      }) // ENDS AJAX CALL
                      
                      // ---------------------------------------------------------------------------------

                      // CLICK FOR THE JULY 2017 ASTEROIDS 
                      $.ajax({
                        url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-6&end_date=2017-07-13&api_key=' + myApiKey,
                        success: (data) => {
                          console.log("ListItem click data: ", data.near_earth_objects["2017-07-10"]);

                          // MAP
                          data.near_earth_objects["2017-07-10"].map( (el,idx) => {
                            console.log(el)

                            if (el.name === target.innerHTML) {
                              // console.log(el.is_potentially_hazardous_asteroid)
                              return (
                                that.setState({
                                  hazBool: that.state.hazBool.replace(that.state.hazBool, el.is_potentially_hazardous_asteroid),
                                  estDiam: that.state.estDiam.replace(that.state.estDiam, el.estimated_diameter.miles.estimated_diameter_min),
                                  orbitingBody: that.state.orbitingBody.replace(that.state.orbitingBody, el.close_approach_data[0].orbiting_body),
                                  missDistance: that.state.missDistance.replace(that.state.missDistance, el.close_approach_data[0].miss_distance.miles),
                                  speedMPH: that.state.speedMPH.replace(that.state.speedMPH, el.close_approach_data[0].relative_velocity.miles_per_hour),
                                  speedKMPS: that.state.speedKMPS.replace(that.state.speedKMPS, el.close_approach_data[0].relative_velocity.kilometers_per_second),
                                  jplURL: that.state.jplURL.replace(that.state.jplURL, el.nasa_jpl_url),
                                  astId: that.state.astId.replace(that.state.astId, el.neo_reference_id),
                                })
                              ) // ENDS RETURN

                            } // ENDS IF STATEMENT 

                          }) // ENDS MAP

                        } // ENDS SUCCESS FUNCTION
                      }) // ENDS AJAX CALL

                    // ---------------------------------------------------------------------------------

                    // CLICK FOR THE 2017 JUNE ASTEROIDS
                    $.ajax({
                        url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-06-23&end_date=2017-06-30&api_key=' + myApiKey,
                        success: (data) => {
                          console.log("ListItem click data: ", data.near_earth_objects["2017-06-27"]);

                          // MAP
                          data.near_earth_objects["2017-06-27"].map( (el,idx) => {
                            console.log(el)

                            if (el.name === target.innerHTML) {
                              // console.log(el.is_potentially_hazardous_asteroid)
                              return (
                                that.setState({
                                  hazBool: that.state.hazBool.replace(that.state.hazBool, el.is_potentially_hazardous_asteroid),
                                  estDiam: that.state.estDiam.replace(that.state.estDiam, el.estimated_diameter.miles.estimated_diameter_min),
                                  orbitingBody: that.state.orbitingBody.replace(that.state.orbitingBody, el.close_approach_data[0].orbiting_body),
                                  missDistance: that.state.missDistance.replace(that.state.missDistance, el.close_approach_data[0].miss_distance.miles),
                                  speedMPH: that.state.speedMPH.replace(that.state.speedMPH, el.close_approach_data[0].relative_velocity.miles_per_hour),
                                  speedKMPS: that.state.speedKMPS.replace(that.state.speedKMPS, el.close_approach_data[0].relative_velocity.kilometers_per_second),
                                  jplURL: that.state.jplURL.replace(that.state.jplURL, el.nasa_jpl_url),
                                  astId: that.state.astId.replace(that.state.astId, el.neo_reference_id),
                                })
                              ) // ENDS RETURN

                            } // ENDS IF STATEMENT 

                          }) // ENDS MAP

                        } // ENDS SUCCESS FUNCTION
                      }) // ENDS AJAX CALL

                    // ---------------------------------------------------------------------------------

                    // CLICK FOR THE 2017 MAY ASTEROIDS
                    $.ajax({
                        url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-05-23&end_date=2017-05-30&api_key=' + myApiKey,
                        success: (data) => {
                          console.log("ListItem click data: ", data.near_earth_objects["2017-05-29"]);

                          // MAP
                          data.near_earth_objects["2017-05-29"].map( (el,idx) => {
                            console.log(el)

                            if (el.name === target.innerHTML) {
                              // console.log(el.is_potentially_hazardous_asteroid)
                              return (
                                that.setState({
                                  hazBool: that.state.hazBool.replace(that.state.hazBool, el.is_potentially_hazardous_asteroid),
                                  estDiam: that.state.estDiam.replace(that.state.estDiam, el.estimated_diameter.miles.estimated_diameter_min),
                                  orbitingBody: that.state.orbitingBody.replace(that.state.orbitingBody, el.close_approach_data[0].orbiting_body),
                                  missDistance: that.state.missDistance.replace(that.state.missDistance, el.close_approach_data[0].miss_distance.miles),
                                  speedMPH: that.state.speedMPH.replace(that.state.speedMPH, el.close_approach_data[0].relative_velocity.miles_per_hour),
                                  speedKMPS: that.state.speedKMPS.replace(that.state.speedKMPS, el.close_approach_data[0].relative_velocity.kilometers_per_second),
                                  jplURL: that.state.jplURL.replace(that.state.jplURL, el.nasa_jpl_url),
                                  astId: that.state.astId.replace(that.state.astId, el.neo_reference_id),
                                })
                              ) // ENDS RETURN

                            } // ENDS IF STATEMENT 

                          }) // ENDS MAP

                        } // ENDS SUCCESS FUNCTION
                      }) // ENDS AJAX CALL

                    // ---------------------------------------------------------------------------------

                    // CLICK FOR THE 2017 APRIL ASTEROIDS
                    $.ajax({
                        url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-05-23&end_date=2017-05-30&api_key=' + myApiKey,
                        success: (data) => {
                          console.log("ListItem click data: ", data.near_earth_objects["2017-05-27"]);

                          // MAP
                          data.near_earth_objects["2017-05-27"].map( (el,idx) => {
                            console.log(el)

                            if (el.name === target.innerHTML) {
                              // console.log(el.is_potentially_hazardous_asteroid)
                              return (
                                that.setState({
                                  hazBool: that.state.hazBool.replace(that.state.hazBool, el.is_potentially_hazardous_asteroid),
                                  estDiam: that.state.estDiam.replace(that.state.estDiam, el.estimated_diameter.miles.estimated_diameter_min),
                                  orbitingBody: that.state.orbitingBody.replace(that.state.orbitingBody, el.close_approach_data[0].orbiting_body),
                                  missDistance: that.state.missDistance.replace(that.state.missDistance, el.close_approach_data[0].miss_distance.miles),
                                  speedMPH: that.state.speedMPH.replace(that.state.speedMPH, el.close_approach_data[0].relative_velocity.miles_per_hour),
                                  speedKMPS: that.state.speedKMPS.replace(that.state.speedKMPS, el.close_approach_data[0].relative_velocity.kilometers_per_second),
                                  jplURL: that.state.jplURL.replace(that.state.jplURL, el.nasa_jpl_url),
                                  astId: that.state.astId.replace(that.state.astId, el.neo_reference_id),
                                })
                              ) // ENDS RETURN

                            } // ENDS IF STATEMENT 

                          }) // ENDS MAP

                        } // ENDS SUCCESS FUNCTION
                      }) // ENDS AJAX CALL






            } // ENDS THE PARENT IF STATEMENT 

  } // ENDS THE MAIN BODYCLICK FUNCTION

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
              <div className="success" id="successbutton" role="alert">Asteroids loaded</div>
              <div className="faliure" id="faliurebutton" role="alert">ALREADY LOADED!</div>
            </div>

            
            <div className="col-md-4 propertiesSide" >

                <h2>LIST OF ASTEROIDS:</h2>
                <hr id="archhr" />
                <h4 id="archivesdesc">Scroll down for a complete list of Asteroids. Click on an archive button for more NEOs <span className="glyphicon glyphicon-triangle-bottom" id="downarr"></span></h4>

                <div id="listdiv" onClick={this.bodyClick}>
                  <ul className="astListUl">
                    {
                      this.state.astNameArray.map (
                        (name, index) => {
                          return (<li onClick={this.viewProp} className="asteroidNameLi" key={index} value={name} title={this.state.astId}>{name}</li>)
                        }
                      )
                    }

                    { 
                      this.state.secondAstNameArray.map (
                        (name, index) => {
                          return (<li onClick={this.viewProp} className="asteroidNameLi" key={index} value={name} title={this.state.astId}>{name}</li>)
                        }
                      )
                    }

                    { 
                      this.state.juneAsteroidsArray.map (
                        (name, index) => {
                          return (<li onClick={this.viewProp} className="asteroidNameLi" key={index} value={name} title={this.state.astId}>{name}</li>)
                        }
                      )
                    }

                    { 
                      this.state.mayAsteroidsArray.map (
                        (name, index) => {
                          return (<li onClick={this.viewProp} className="asteroidNameLi" key={index} value={name} title={this.state.astId}>{name}</li>)
                        }
                      )
                    }


                    { 
                      this.state.aprilAsteroidsArray.map (
                        (name, index) => {
                          return (<li onClick={this.viewProp} className="asteroidNameLi" key={index} value={name} title={this.state.astId}>{name}</li>)
                        }
                      )
                    }
                  </ul>
                </div>

            </div>

            <div className="col-md-4">
              
              <h2 id="astpropheading">ASTEROID PROPERTIES:</h2>
              <hr id="archhr" />
              <h4 id="archivesdesc">Click on an Asteroid to the left, and monitor their properties in the table below</h4>
              
              <div id="propertiesDiv">

                <table>
                  <tbody>
                    <tr>
                      <th>Hazardous? <span className="glyphicon glyphicon-warning-sign" id="ishaz"></span></th>
                      <td>{this.state.hazBool}</td>
                    </tr>
                    <tr>
                      <th>Diameter (Miles):</th>
                      <td>{this.state.estDiam}</td>
                    </tr>
                    <tr>
                      <th>Orbiting body:</th>
                      <td>{this.state.orbitingBody}</td>
                    </tr>   
                    <tr>
                      <th>Miss-distance (Mi):</th>
                      <td>{this.state.missDistance}</td>
                    </tr>                    
                    <tr>
                      <th>Speed (MPH):</th>
                      <td>{this.state.speedMPH}</td>
                    </tr>                    
                    <tr>
                      <th>Speed (KMPS):</th>
                      <td>{this.state.speedKMPS}</td>
                    </tr>                    
                    <tr id="jpltr">
                      <th>JPL URL:</th>
                      <td><a href={this.state.jplURL} target="_blank">{this.state.jplURL}</a></td>
                    </tr>                    
                    <tr>
                      <th>NEO ID:</th>
                      <td>{this.state.astId}</td>
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
