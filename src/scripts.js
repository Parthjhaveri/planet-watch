import $ from 'jquery'; 

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
		    
		    var navDiv = document.getElementsByClassName('mobilenavdiv');
			
			for(var i = 0; i < navDiv.length; i++) {
			    navDiv[i].style.display= 'hidden';
			    navDiv[i].style.opacity= 0;
			    navDiv[i].style.transition= 1;
			}
	    }

	});

}, 500)