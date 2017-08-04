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

      // -------------------------------------------------------------------

     // let contentThreeDiv = document.getElementsByClassName('contentthree')[0];

     //  if( $(contentThreeDiv).inView() ) {
     //    contentThreeDiv.style.backgroundImage = "none";
     //  }

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
        
        // // Get the modal
        // var modal = document.getElementById('myModal');

        // // Get the button that opens the modal
        // var btn = document.getElementById("hypohit");

        // // Get the <span> element that closes the modal
        // var span = document.getElementsByClassName("close")[0];

        // var listItem = document.getElementsByClassName("asteroidNameLi")[0];

        // $(listItem).click(function() {
        //   // $(btn).prop( "disabled", false );
        //   $(this).addClass('selected');
        //   $(listItem).removeClass('selected');
        // })

        // // When the user clicks the button, open the modal 
        // $(btn).on("click", function() {
        //   modal.style.display = "initial";
        //   modal.style.display = "block";
        //   // btn.setAttribute("disabled", false);
        // })

        // $(span).click(function() {
        //   modal.style.display = "none";
        //   // btn.setAttribute("disabled", false);
        // })

        // // When the user clicks anywhere outside of the modal, close it
        // $(window).click(function(event) {
        //   if (event.target === modal) {
        //         modal.style.display = "none";
        //     }
        // })
  }); // ENDS DOCUMENT.READY