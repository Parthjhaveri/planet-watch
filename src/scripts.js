import $ from 'jquery'; 

$(document).bind("scroll", function(){    

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


    // // ONLY IF THE URL IS AT THE HOME PAGE COMPONENT 
    // if (window.location.href.indexOf("/neo-tracker") < 0) {

    //     // ONCE THE SCREEN GOES PAST 1500 PIXELS, LOAD IMAGE
    //     if ($(document).scrollTop() >= 1500) {
           
    //       let contentThreeDiv = document.getElementsByClassName('contentthree')[0];

    //        contentThreeDiv.style.opacity = 1;
    //     }
    // }

})

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

}, 500) // ENDS SET TIME-OUT FUNCTION

  $(document).ready(function(){

        // var contentThreeDiv = document.getElementsByClassName('contentthree')[0];

        // if (contentThreeDiv.offsetTop <= 50) {
        //   alert("there you go!")
        // }
        
        // WINDOW CLICK TO ESCAPE MODAL ------------------------------------------------------------
        var modal = document.getElementById('myModal');

        $(window).click(function(event) {
          if (event.target === modal) {
                modal.style.display = "none";
            }
        })
  }); // ENDS DOCUMENT.READY