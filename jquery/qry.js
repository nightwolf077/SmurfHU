$(document).ready(function () {
  
  var currentScript = "";
  $("body,html").css("overflow", "").fadeIn(800);   
  // start header
  $(".logo").animate({ left: "10px" ,opacity: 1}, 800);  // Fade in over 1 second

  $(".nav-search")  
  .on("focus", function () {
    $(this).animate({ width: "400px" }, 300);  // Smoothly grow to 400px over 300ms
  })
  .on("blur", function () {
    $(this).animate({ width: "300px" }, 300);  // Shrink back to 200px over 300ms when focus is lost
  })
  .on("click", function () {
    $(this).css('border','none');  // Smoothly grow to 400px over 300ms
  });

  $('.nav-search').on('input', function() {
    if ($(this).val().length > 0) {
      $(".search i").removeClass('fa-search').addClass('fa-solid fa-x'); // Change to "X" icon
    } else {
      $(".search i").removeClass('fa-solid fa-x').addClass('fa-search'); // Revert to search icon
    }
  });

  $(".search i").click(function() {
    if ($(this).hasClass('fa-x')) {
      $(".nav-search").val(''); // Clear input field
      $(this).removeClass('fa-x').addClass('fa-search'); // Revert to search icon
    }
    else{
      $(".nav-search").focus(); // Focus on search input field
    }
  });

  $(".search")
    .animate({opacity: 1, top: 0}, 800); 
  
  $(".nav-menu-toggle").animate({ opacity: 1, right: "0"}, 800);  // Smoothly slide out over 1 second

  $(".nav-menu-toggle").hover(function () {
    $(".nav-menu-toggle span").animate({marginTop:"1px",marginBottom: "1px"},100);  
  }, function () {
    $(".nav-menu-toggle span").animate({marginTop:"5px",marginBottom: "5px"},100); 
  });
  
  $(".nav-menu-toggle").on("click",function () {
    $(".menu").animate({right: 0});
  });
  
  $(".close").on("click",function () {
    $(".menu").animate({right: "-210px"});
  });
  
  $(".nav-search")
  .on("focus", function() {
    $(".search").css("borderColor", "purple"); // Set border color to purple on focus
  })
  .on("blur", function() {
    $(".search").css("borderColor", "var(--smurf)");  // Reset border color on blur
  });

  $('#contact-leader').click(function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 800);
  }); // The duration is set to 1000ms (1 second)

  // end header
  
  /*start content*/

  $(".content div")
    .animate({opacity: 1, left: "0px"}, 800); 

  /*end content*/

  $(".test").click(function () {
    window.location.href = 'https://testbank.me'; // Redirect to the specified URL
  });

  $(".low").click(function () {
    window.location.href = 'https://hu.edu.jo/regulations/regulation.aspx'; // Redirect to the specified URL
  });

/*start table*/
  $(".Terminologies").click(function () {
    $("#main").slideUp(400); // Redirect to the specified URL
    $("#table")
    .css("display", "flex") // Set display to flex initially
    .slideDown(400); // Animate the slide-down effect
    
    
  });
/*start table*/

 
/*start tips*/ 

 $(".religion, .std-tips, .eco, .serv, .std-senpai").click(function () {
    $("#main").slideUp(400); // Slide up the main content
    $(".slideshow-container")
        .hide() // Ensure it's hidden initially
        .css("display", "flex") // Set display to flex before animation
        .slideDown(400); // Animate the slide-down effect
});


  $(".tipsAndAlerts").click(function () {
    $("#main").slideUp(400); // Redirect to the specified URL
    $("#tips")
    .css("display", "flex") // Set display to flex initially
    .slideDown(400); // Animate the slide-down effect


  });

    /*std-tips*/
    $("#next, #prev").click(function () {
      // Disable the buttons immediately
      $("#next, #prev").prop("disabled", true);
  
      // Fade out the content
      $("#advice-number, #advice-title, #advice-description")
          .fadeOut(500, function() {
              // Fade in the content after fadeOut is complete
              $("#advice-number, #advice-title, #advice-description").fadeIn(500);
          });
  
      // Ensure the buttons stay disabled for 4000ms (4 seconds)
      
  });
  
  $(".std-tips").click(function () {
    $("#tips").slideUp(400);
    $("#std-slide")
      .css("display", "flex") // Set display to flex
      .hide() // Initially hide to enable sliding down
      .slideDown(400); // Animate the slide-down effect
  });

    /*std-tips*/ 

  /* rel-tips*/
  $(".religion").click(function () {  
    $("#tips").slideUp(400);
    $("#rel-slide")
      .css("display", "flex") // Set display to flex
      .hide() // Initially hide to enable sliding down
      .slideDown(400); // Animate the slide-down effect
  });
  /* rel-tips*/

  /* eco-tips */
  
  $(".eco").click(function () {
    $("#tips").slideUp(400);
    $("#eco-slide")
      .css("display", "flex") // Set display to flex
      .hide() // Initially hide to enable sliding down
      .slideDown(400); // Animate the slide-down effect
    });
  
  /* eco-tips */
  
    /* serv-tips */
    
      $(".serv").click(function () {
        $("#tips").slideUp(400);
        $("#serv-slide")
          .css("display", "flex") // Set display to flex
          .hide() // Initially hide to enable sliding down
          .slideDown(400); // Animate the slide-down effect
        });
  /* serv-tips */

  /* start std-to-std*/
  $("#std-to-std").click(function () {
    $("#tips").slideUp(400);
    $("#std-to-std-slide")
      .css("display", "flex") // Set display to flex
      .hide() // Initially hide to enable sliding down
      .slideDown(400); // Animate the slide-down effect
    });
  /* end std-to-std*/
  /*end tips*/ 

  /*start steps*/

  $(".steps").click(function () {
    $("#main").slideUp(400); // Redirect to the specified URL
    $("#steps")
    .css("display", "flex") // Set display to flex initially
    .slideDown(400); // Animate the slide-down effect

  });

  $(".note").click(function () {
    $("#steps").slideUp(400); // Redirect to the specified URL
    $(".armyContent")
    .css("display", "flex") // Set display to flex initially
    .slideDown(400); // Animate the slide-down effect
  });

  $(".fail").click(function () {
    $("#steps").slideUp(400); // Redirect to the specified URL
    $(".failContent")
    .css("display", "flex") // Set display to flex initially
    .slideDown(400); // Animate the slide-down effect
  });

  $(".pull-back").click(function () {
    $("#steps").slideUp(400); // Redirect to the specified URL
    $(".pullContent")
    .css("display", "flex") // Set display to flex initially
    .slideDown(400); // Animate the slide-down effect
  });

  $(".add-subject").click(function () {
    $("#steps").slideUp(400); // Redirect to the specified URL
    $(".addContent")
    .css("display", "flex") // Set display to flex initially
    .slideDown(400); // Animate the slide-down effect
  });

  $(".network").click(function () {
    $("#steps").slideUp(400); // Redirect to the specified URL
    $(".networkContent")
    .css("display", "flex") // Set display to flex initially
    .slideDown(400); // Animate the slide-down effect
  });

  $(".graduate").click(function () {
    $("#steps").slideUp(400); // Redirect to the specified URL
    $(".pullContent")
    .css("display", "flex") // Set display to flex initially
    .slideDown(400); // Animate the slide-down effect
  });

  /*end steps*/

  /*start webs*/
  $(".webs").click(function () {
    $("#main").slideUp(400); // Redirect to the specified URL
    $("#webs")
    .css("display", "flex") // Set display to flex initially
    .slideDown(400); // Animate the slide-down effect
  });
  $(".slide-trans").click(function () {
    window.location.href = 'https://www.onlinedoctranslator.com/en/translationform'; // Redirect to the specified URL
  });
  $(".gpt").click(function () {
    window.location.href = 'https://chatgpt.com'; // Redirect to the specified URL
  });
  $(".w-t-p").click(function () {
    window.location.href = 'https://www.ilovepdf.com/word_to_pdf'; // Redirect to the specified URL
  });
  $(".t-t-v").click(function () {
    window.location.href = 'https://www.naturalreaders.com/online/'; // Redirect to the specified URL
  });
  
    

  /*end webs*/

  $(document).on('click', '.backToTips', function() {
    $(this).parent().slideUp(200); // Fade out the #std-slide container
    $("#tips").delay(200).slideDown(400); // Slide down the #tips container after a short delay    

      this.currentScript = ""; // Remove the script from the document
  });

  $(".back").click(function () {  
    // $(this).parent().fadeOut(200); // Redirect to the specified URL
    // $("#main").delay(200).slideDown(400); // Redirect to the specified URL
    window.location.href = 'index.html'; // Redirect to the specified URL
  });
  
  $("#tips .backToMain").click(function () {
    $("#tips").slideUp(400, function () { // Callback after #tips finishes sliding up
      $("#main").slideDown(400); // Then slide #main down
    });
  });

  $("#steps .backToMain").click(function () {
    $("#steps").slideUp(400, function () { // Callback after #tips finishes sliding up
      $("#main").slideDown(400); // Then slide #main down
    });
  });

  $("#table .backToMain").click(function () {
    $("#table").fadeOut( 50 ,function () { // Callback after #tips finishes sliding up
      $("#main").slideDown(400); // Then slide #main down
    });
  });

  $("#webs .backToMain").click(function () {
    $("#webs").slideUp( 400 ,function () { // Callback after #tips finishes sliding up
      $("#main").slideDown(400); // Then slide #main down
    });
  });

  $(".failContent .backToSteps, .pullContent .backToSteps, .addContent .backToSteps, .networkContent .backToSteps, .graduateContent .backToSteps,.armyContent .backToSteps").click(function () {
    // Fade out the parent of the clicked button
    $(this).closest(".failContent, .pullContent, .addContent, .networkContent, .graduateContent, .armyContent").slideUp(400, function () {
        // After fade out is complete, slide down #steps
        $("#steps").slideDown(400);
    });
});



});


