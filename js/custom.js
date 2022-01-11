window.onload = () => {

  gsap
    .timeline({ repeat: -1 })
    .to(".scroll__line", { height: 80, y: 0, duration: 0.8, delay: 0.2 })
    .to(".scroll__line", { delay: 0.4, duration: 0.8, height: 0 });


};
  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });
  });
