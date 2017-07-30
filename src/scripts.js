import React from 'react';
import $ from 'jquery'; 
import './neotrack.js';

// function impactProps() {

//     if (this.state.estDiam < 25) {
//       this.setState({damageState: this.state.damageState.replace(this.state.damageState, "Safe-Zone")})
//     } else if (this.state.estDiam > 30 && this.state.estDiam < 40) {
//       this.setState({damageState: this.state.damageState.replace(this.state.damageState, "Town-killer")})
//     }

// }


// --------------------------------------------------------------------------

setTimeout(function() {

	$(window).scroll(function(){

		if ($(this).scrollTop() >= 400) { // THIS REFERS TO WINDOW
		    
		    var navDiv = document.getElementsByClassName('mobilenavdiv');
			
			for(var i = 0; i < navDiv.length; i++) {
			    navDiv[i].style.display= 'initial';
			    navDiv[i].style.opacity= 1;
			    navDiv[i].style.transition= 1;
			}
	    } else if ($(this).scrollTop() <= 400) { // THIS REFERS TO WINDOW
		    
		    var navDivi = document.getElementsByClassName('mobilenavdiv');
			
			for(var j = 0; j < navDivi.length; j++) {
			    navDivi[j].style.display= 'hidden';
			    navDivi[j].style.opacity= 0;
			    navDivi[j].style.transition= 1;
			}
	    }

	});

	$(document).ready(function(){
		
        // Get the modal
        var modal = document.getElementById('myModal');

        // Get the button that opens the modal
        var btn = document.getElementById("hypohit");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        var listItem = document.getElementsByClassName("asteroidNameLi")

        $(listItem).click(function() {
        	$(btn).prop( "disabled", false );
        	$(listItem).removeClass('selected');
        	$(this).addClass('selected');
        })

        // When the user clicks the button, open the modal 
        $(btn).click(function() {
          modal.style.display = "inherit";
          modal.style.display = "block";
          btn.setAttribute("disabled", false);
        })

        $(span).click(function() {
          modal.style.display = "none";
          btn.setAttribute("disabled", false);
        })

        // When the user clicks anywhere outside of the modal, close it
        $(window).click(function(event) {
          if (event.target == modal) {
                modal.style.display = "none";
            }
        })
	}); // ENDS DOCUMENT.READY

}, 500) // ENDS SET TIME-OUT FUNCTION

