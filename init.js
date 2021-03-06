// Wait for jQuery
$(document).ready(function(){
  // Smooth Anchor Schrolling
  $('a[href*="#"]')// Select all links with hashes
    .not('[href="#"]')// Remove links that don't actually link to anything
    .not('[href="#0"]')// Remove links that don't actually link to anything
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
    // Change Background Color On Scroll
    $(window).on("scroll touchmove", function() {
            if ($(document).scrollTop() >= $("#about").position().top) {
                    $('body').css('background', $("#about").attr("data-background-color"));

            };
            if ($(document).scrollTop() >= $("#services").position().top) {
                    $('body').css('background', $("#services").attr("data-background-color"))
            };
            if ($(document).scrollTop() >= $("#tools").position().top) {

                    $('body').css('background', $("#tools").attr("data-background-color"))
            };
            if ($(document).scrollTop() >= $("#clients").position().top) {

                    $('body').css('background', $("#clients").attr("data-background-color"))
            };
            if ($(document).scrollTop() >= $("#contact").position().top) {

                    $('body').css('background', $("#contact").attr("data-background-color"))
            };
    });
});

// Feather Icons Init
feather.replace()

// WOW.js Scroll Reveal Animations Init
wow = new WOW({
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       false,       // default
  live:         true        // default
})
wow.init();

// Off Canvas Modal Form
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
