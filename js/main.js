// IIFE with jQuery Wrapper
(function($) {
  'use strict';

  /*
   *----------------------------------
   * Document Ready
   *----------------------------------
   */
  $(document).ready(function() {

    $(window).on('load', function(){ 
      $('div.vigo-loder').remove();
      $('body').removeClass('vigo-loder');
    });

  	/*
  		Youtube Video Player
  	*/
  	$('#video').simplePlayer();

    // $('.filtr-container').filterizr();

    $('#main-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ['<i class=\'fa fa-angle-left\'></i>','<i class=\'fa fa-angle-right\'></i>'],
        dots: true,
        animateOut: 'fadeOut',
        items:1
    });

    $('#testimonial-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        items:1,
        autoplay:true,
        autoplayTimeout:2000,
        smartSpeed: 500,
        autoplayHoverPause:true
    })

    // The slider being synced must be initialized first
    $('#carousel').flexslider({
      animation: 'slide',
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 116,
      itemMargin: 30,
      asNavFor: '#slider'
    });

    $('#slider').flexslider({
      animation: 'slide',
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: '#carousel'
    });

    // Initialize popup as usual
    $('.image-link').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', // this class is for CSS animation below

        zoom: {
          enabled: true, // By default it's false, so don't forget to enable it

          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function

          // The "opener" function should return the element from which popup will be zoomed in
          // and to which popup will be scaled down
          // By defailt it looks for an image tag:
          opener: function(openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
      },
    });
    
    $('.accordion-menu').on('click', function(){ 
      $('.accordion-menu').not(this).removeClass('active'); 
      $(this).toggleClass('active'); 
    });

    $('#sticker').sticky({
      topSpacing: 0,
      zIndex: 20
    });
   
    $('.back_to_top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 4000);
    });

    $('#nav').onePageNav();

    $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });


    (function () {
        var mixer = mixitup('.mixitup');
    }());


  });// DOM Ready
  
  
      /* ==========================================================================
    copyright year change
    ========================================================================== */	
	
    function walkText(node) {
    		
    var	date = (new Date()).getFullYear();
    
      if (node.nodeType == 3) {
        node.data = node.data.replace(/2017/g, date);
      }
      if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
        for (var i = 0; i < node.childNodes.length; i++) {
          walkText(node.childNodes[i]);
        }
      }
    }
    var copyrightReplace = document.querySelector('.copyright-box');
    walkText(copyrightReplace);

}(jQuery)); // IIFE