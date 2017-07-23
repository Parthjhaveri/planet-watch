import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
  render() {
    return (
      <div className="footerDiv">

        <center><p>Made with <span className="glyphicon glyphicon-heart" id="heart"></span> in 40.7128° N, 74.0059° W</p></center>
        <center><a id="me" href="https://parthjhaveri.github.io/" target="_blank"><p>Developer</p></a></center>
      </div>
    );
  }
}

export default Footer;
