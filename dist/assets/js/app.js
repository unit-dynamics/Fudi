$(document).ready(function() {
  'use strict';

  // ----- Scroll Events ------//
  $(window).scroll(function(){

    // Define Scroller Position
    var wScroll = $(this).scrollTop();

    // Define Element Positions
    var $features = $('.feature-header');
    var $appImage = $('.app-image');
    var $appInfo = $('.info');
    var $figures = $('figure');


    //--- Fade in Feature Headers
    if(wScroll > $features.offset().top - ($(window).height() / 1.3)) {
      $features.css('opacity', '1');
    }


    //--- Scroll in App content from the sides
    if(wScroll > $appImage.offset().top - ($(window).height() / 1.3)) {
      
      // Get Offset to base animation on
      var offset = wScroll - $appImage.offset().top + $(window).height() - 610;

      // Stop adjusting position once offset reaches 0px
      if (offset < 0) {

        $appImage.css({
          '-webkit-transform': 'translate(' + offset + 'px, 0)',
          '-ms-transform': 'translate(' + offset + 'px, 0)',
          transform: 'translate(' + offset + 'px, 0)',
          opacity: '1'});

        $appInfo.css({
          '-webkit-transform': 'translate(' + Math.abs(offset) + 'px, 0)',
          '-ms-transform': 'translate(' + Math.abs(offset) + 'px, 0)',
          transform: 'translate(' + Math.abs(offset) + 'px, 0)',
          opacity: '1'});
      }
    }

    //--- Flip in cusine options
    if(wScroll > $figures.offset().top - ($(window).height() / 1.5)) {
      $figures.css({
        '-webkit-transform': 'rotateY(0deg)',
        '-ms-transform': 'rotateY(0deg)',
        'transform': 'rotateY(0deg)'});
    }
    
  })

  // ----- Testimonial Carousel ------//
  var $testimonials = $('.user-card');
  var testLength = $testimonials.length;
  var $testQuotes = $('.test-quotes li');

  //--- Carousel Logic
  function nextTestimonial(){
    if ($('.user-card').filter('.is-active').index() < (testLength -1)) {
      $testimonials.filter('.is-active').next().addClass('is-active').siblings().removeClass('is-active');
      $testQuotes.filter('.is-active').next().addClass('is-active').siblings().removeClass('is-active');
    
    }else{
      $testimonials.first().addClass('is-active').siblings().removeClass('is-active');
      $testQuotes.first().addClass('is-active').siblings().removeClass('is-active');
    }

  };

  // Set the carousel delay
  var carouselInterval = setInterval(function(){ nextTestimonial() }, 4500);

  //--- Carousel Nav Logic
  $testQuotes.on("click", function() {

    // Pause carousel
    clearInterval(carouselInterval);
    carouselInterval = setInterval(function(){ nextTestimonial() }, 4500);

    var userId = $(this).data("user");

    // Add / Remove classes to swtich to the selected user
    $(this).addClass('is-active').siblings().removeClass('is-active');
    $testimonials.eq(userId).addClass('is-active').siblings().removeClass('is-active');
  })


  // ----- Nav Section ------//

  // Animate Menu Button To A Close Sign
  $('.menu-btn').on('click', function(event){
    $('.menu-btn').addClass('open');
  })

  // Animate Menu Button From a Close Sign to A Hamburger
  $('.menu-modal').on('click', function(event){
    $('.menu-btn').removeClass('open');
  })

})

