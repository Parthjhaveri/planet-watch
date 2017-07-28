import $ from 'jquery'; 
import './neotrack.js';

// CLICK FUNCTIONALITY FOR MAPPING THE CLICK TO AJAX TO RENDER THE PROPERTIES

document.onclick = function(event) {
    var target = event.target || event.srcElement;

    console.log(target.innerHTML); 
};

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

}, 500)

