import $ from 'jquery'; 

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//                                  DOCUMENT . READY 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  $(document).ready(function(){
        
        // WINDOW CLICK TO ESCAPE MODAL -------------------------------
        var modal = document.getElementById('myModal');

        $(window).click(function(event) {
          if (event.target === modal) {
                modal.style.display = "none";
            }
        })
  }); // ENDS DOCUMENT.READY

  // ------------------------------------------------------------------------------
  // LAZY LOADING IMAGE GALLERY ---------------------------------------------------
  // ------------------------------------------------------------------------------

  function lazyload() {

    let galleryImage = document.getElementsByClassName('astImg');

    for (var i = 0; i < galleryImage.length; i++) {
        
      if (elementInViewport(galleryImage[i])) {
        galleryImage[i].setAttribute('src', galleryImage[i].getAttribute('data-src'));
      }

    }

  } // END LAZY LOAD

  function elementInViewport (el) {

    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )

  } // END ELEMENT IN VIEWPORT




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//                                  DOCUMENT . BIND
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

$(document).bind("scroll", function(){    

    lazyload();

    // ONLY IF THE URL IS AT THE NEO TRACKER COMPONENT 
    if (window.location.href.indexOf("/neo-tracker") > -1) {


        // ONCE THE SCREEN GOES PAST 400 PIXELS
        if ($(document).scrollTop() >= 600) {
           
           var popOne = document.getElementById('firstpop');
           var popTwo = document.getElementById('secondpop');
           var popThree = document.getElementById('thirdpop');

           popTwo.style.opacity = 0;
           popThree.style.opacity = 0;
           popOne.style.opacity = 1;

        }
    }

})

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//                                  SET TIMEOUT FUNCTION
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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

}, 500) // ENDS SET TIME-OUT FUNCTION





