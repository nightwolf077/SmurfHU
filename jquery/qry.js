$(document).ready(function () {
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
    document.querySelector("footer").insertAdjacentHTML("beforebegin", `
      <div class='slideshow-container' id='std-slide'>
        <i class='fas fa-arrow-left back'></i>      
        <button class='nav-button' id='prev' onclick='prevAdvice()'>&#10094;</button>
        <div class='advice-box'>
          <p id='advice-number'></p>
          <h2 id='advice-title'>Title of Advice</h2>
          <p id='advice-description'>Description of advice will appear here.</p>
        </div>
        <button class='nav-button' id='next' onclick='nextAdvice()'>&#10095;</button>
      </div>
    `);

    // Load the script dynamically
    const script = document.createElement("script");
    script.src = "std-tips.js";
    document.body.appendChild(script);

    // Slide up #tips and slide down #std-slide
    $("#tips").slideUp(400);
    $("#std-slide")
      .css("display", "flex") // Set display to flex
      .hide() // Initially hide to enable sliding down
      .slideDown(400); // Animate the slide-down effect
  });




    /*std-tips*/ 

  /* rel-tips*/
  $(".religion").click(function () {
    document.querySelector("footer").insertAdjacentHTML("beforebegin", `
      <div class='slideshow-container' id='rel-slide'>
        <i class='fas fa-arrow-left back'></i>      
        <button class='nav-button' id='prev' onclick='prevAdvice()'>&#10094;</button>
        <div class='advice-box'>
          <p id='advice-number'></p>
          <h2 id='advice-title'>Title of Advice</h2>
          <p id='advice-description'>Description of advice will appear here.</p>
        </div>
        <button class='nav-button' id='next' onclick='nextAdvice()'>&#10095;</button>
      </div>
    `);

    // Load the script dynamically
    const script = document.createElement("script");
    script.src = "rel-tips.js";
    document.body.appendChild(script);
  
    $("#tips").slideUp(400);
    $("#rel-slide")
      .css("display", "flex") // Set display to flex
      .hide() // Initially hide to enable sliding down
      .slideDown(400); // Animate the slide-down effect
  });

    
   
  /* rel-tips*/

  /* eco-tips */
  
  $(".eco").click(function () {
    document.querySelector("footer").insertAdjacentHTML("beforebegin", `
      <div class='slideshow-container' id='eco-slide'>
        <i class='fas fa-arrow-left back'></i>      
        <button class='nav-button' id='prev' onclick='prevAdvice()'>&#10094;</button>
        <div class='advice-box'>
          <p id='advice-number'></p>
          <h2 id='advice-title'>Title of Advice</h2>
          <p id='advice-description'>Description of advice will appear here.</p>
        </div>
        <button class='nav-button' id='next' onclick='nextAdvice()'>&#10095;</button>
      </div>
    `);

    // Load the script dynamically
    const script = document.createElement("script");
    script.src = "eco-tips.js";
    document.body.appendChild(script);

    // Slide up #tips and slide down #std-slide
    $("#tips").slideUp(400);
    $("#eco-slide")
      .css("display", "flex") // Set display to flex
      .hide() // Initially hide to enable sliding down
      .slideDown(400); // Animate the slide-down effect
    });
  
  /* eco-tips */

  /* serv-tips */
    
  
      $(".serv").click(function () {
        document.querySelector("footer").insertAdjacentHTML("beforebegin", `
          <div class='slideshow-container' id='serv-slide'>
            <i class='fas fa-arrow-left back'></i>      
            <button class='nav-button' id='prev' onclick='prevAdvice()'>&#10094;</button>
            <div class='advice-box'>
              <p id='advice-number'></p>
              <h2 id='advice-title'>Title of Advice</h2>
              <p id='advice-description'>Description of advice will appear here.</p>
            </div>
            <button class='nav-button' id='next' onclick='nextAdvice()'>&#10095;</button>
          </div>
        `);
    
        // Load the script dynamically
        const script = document.createElement("script");
        script.src = "serv-tips.js";
        document.body.appendChild(script);
    
        // Slide up #tips and slide down #std-slide
        $("#tips").slideUp(400);
        $("#serv-slide")
          .css("display", "flex") // Set display to flex
          .hide() // Initially hide to enable sliding down
          .slideDown(400); // Animate the slide-down effect
        });
  /* serv-tips */
  /*end tips*/ 

  /*start steps*/
  $(".steps").click(function () {
    $("#main").slideUp(400); // Redirect to the specified URL
    $("#steps")
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
  
  $(document).on("click", ".back", function () {
    window.location.href = 'index.html'; // Redirect to the specified URL
  });
  
});
// $(".back").click(function () {  
//   // $(this).parent().fadeOut(200); // Redirect to the specified URL
//   // $("#main").delay(200).slideDown(400); // Redirect to the specified URL
//   window.location.href = 'index.html'; // Redirect to the specified URL
// });
