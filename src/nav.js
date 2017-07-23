import React, { Component } from 'react';
import './App.css';
import './scripts.js';
import $ from 'jquery'; 

class Navi extends Component {
  
  openNav() {
  	
  	var hamButton = document.getElementById('hambut');
  	var navigationDiv = document.getElementById('mobnav');
  	var navUl = document.getElementById('mobilenavigationbarid')
  	var xButton = document.getElementById('x');

  	navigationDiv.style.height = "auto";
  	hamButton.style.display = "none";
  	xButton.style.display = "initial";
  	navUl.style.display = "initial";

  }

  closeNav() {
  	var hamButton = document.getElementById('hambut');
  	var xButton = document.getElementById('x');
  	var navigationDiv = document.getElementById('mobnav');
  	var navUl = document.getElementById('mobilenavigationbarid')

  	navigationDiv.style.height = "80px";
  	hamButton.style.display = "initial";
  	navUl.style.display = "none";
  	xButton.style.display = "none";
  	xButton.style.transition = "1s";

  }

  render() {
    return (
      <div className="navDiv navbar-fixed-top" id="mobnav">
      	<div className="glyphicon glyphicon-menu-hamburger ham" id="hambut" onClick={this.openNav}></div>
      	<div id="x" onClick={this.closeNav}>X</div>

      	<center>
          <ul className="mobilenavigationbar" id="mobilenavigationbarid">
            <li className="mobilenavli">NEO TRACKER</li>
            <li className="mobilenavli">POLLUTION TRACKER</li>
            <li className="mobilenavli">GEOPOLITICAL NEWS</li>
            <li className="mobilenavli">OCEAN CLEANUP</li>
          </ul>
        </center>

      </div>
    );
  }
}

export default Navi;
