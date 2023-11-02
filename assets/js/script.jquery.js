$(document).ready(function () {
  //___ Owl carousel start ___//
  $(".projects_carousel").owlCarousel({
    items: 1,
    touchDrag: true,
    mouseDrag: true,

    // Responsive
    responsive: true,
    itemsDesktop: [1400, 3],
    itemsDesktopSmall: [1000, 2],
    itemsTablet: [700, 1],
  });
  //___ Owl carousel end ___//

  //___ Auto type start ___//
  // text effect 1
  var typed = new Typed("#element", {
    strings: ["Front End Developer", "Back End Developer", "Graphic Designer"],
    typeSpeed: 90,
    backSpeed: 50,
    startDelay: 1000,
    cursorChar: "_",
    shuffle: true,
    smartBackspace: false,
    loop: true,
  });
  //___ Auto type end ___//

  //___ Go to top start ___//
  var offset = 300;
  var duration = 100;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".scroll-to-top").addClass("active-arrow");
    } else {
      jQuery(".scroll-to-top").removeClass("active-arrow");
    }
  });
  jQuery(".scroll-to-top").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
  //___ Go to top end ___//

  //___ Window reveal start ___//
  var slideUp = {
    distance: "150%",
    origin: "bottom",
    opacity: null,
  };
  var slideScale = {
    scale: 1,
  };

  let slide_up_animate = document.querySelectorAll(".slide-up-animate");
  slide_up_animate.forEach((e_top) => {
    ScrollReveal().reveal(e_top, slideUp);
  });
  //___ Window reveal end ___//
});
