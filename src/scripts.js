import $ from 'jquery'; 

// if ($(document).scrollTop() >= 400) {

// 	var navDiv = document.getElementsByClassName('mobilenavdiv');
	
// 	for(var i = 0; i < navDiv.length; i++) {
// 	    navDiv[i].style.display= 'initial';

// 	}

// }

$(window).scroll(function(){

	if ($(this).scrollTop() >= 200) { // this refers to window
	    
	    var navDiv = document.getElementsByClassName('mobilenavdiv');
		
		for(var i = 0; i < navDiv.length; i++) {
		    navDiv[i].style.display= 'initial';
		    navDiv[i].style.opacity= 1;
		}
    } else if ($(this).scrollTop() <= 200) { // this refers to window
	    
	    var navDiv = document.getElementsByClassName('mobilenavdiv');
		
		for(var i = 0; i < navDiv.length; i++) {
		    navDiv[i].style.display= 'hidden';
		    navDiv[i].style.opacity= 0;
		}
    }

});