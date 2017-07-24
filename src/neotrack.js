import React, { Component } from 'react';
import './App.css';
import './scripts.js';
import Navi from './nav.js';
import Footer from './footer.js';
import $ from 'jquery'; 
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from './Main.js';;


class NeoTracker extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      text: "NEO TRACKER!"
    }

  }

  render() {
    return (
      <div className="neotrackerdiv">

        <Navi />

        {this.state.text}
        
        {
          //new Date().toLocaleTimeString()
        }

        <Footer />

      </div>
    );
  }
}

export default NeoTracker;
