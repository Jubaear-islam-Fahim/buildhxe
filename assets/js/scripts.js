/* ============================================================

 Theme Name: Monteck - Sports Club HTML Template
 Theme URI: http://
 Description: Monteck - Sports Club HTML Template
 Author: Jubaear Islam Fahim
 Author URI: 
 Version: 1.0 

============================================================== */
 
$(function() {

    "use strict";// this function is executed in strict mode

	/* ------------------------------------------------------ */
	/*  1. SHRINK HEADER JS
	/* ------------------------------------------------------ */ 
	var shrinkHeader= 700;
		$(window).on('scroll', function () { 
		var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
            $('.navbar').addClass('shrink');
        }
        else {
            $('.navbar').removeClass('shrink');
        }
	});
	function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
	
	/* --------------------------- */
	/*  2. wow animate JS
	/* --------------------------- */
	new WOW().init();
	
	
	/* --------------------------- */
	/*  3. testimon slider JS
	/* --------------------------- */  
	$('#container').imagesLoaded( function() {
	  	var $grid = $('.portfolio-grid').isotope({
		  itemSelector: '.portfolio-grid-item',
		  percentPosition: true,
		  masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: 1
		  }
		});

		// filter items on button click
		$('.filter-button-group').on( 'click', 'button', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
		
		//for menu active class
		$('.portfolio-button button').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
	});
	
	/* --------------------------- */
	/*  4. testimon slider JS
	/* --------------------------- */  
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
	
	/* --------------------------- */
	/*  5.  video click box JS
	/* --------------------------- */
	$('.clients-test-slider').owlCarousel({ 
        loop:true, 
		dots: false,
		nav:false,  
        autoplay: 4000,
		items: 1,
    }); 
	
	/* --------------------------- */
	/*  6. YouTube video click box JS
	/* --------------------------- */   
	$('.video-v').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	
	
});
 
$(document).ready(function() {

    var owl = $('.header .owl-carousel'); 
    // Slider owlCarousel
    $('.fullslider').owlCarousel({
        items: 1,
        loop:true,
        margin: 0,
		nav:false, 
        autoplay:true,
		dots: false,
        smartSpeed:600
    }); 

    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     
        $('h2').removeClass('animated fadeInLeft');
        $('h1').removeClass('animated fadeInRight'); 
        $('.btn').removeClass('animated zoomIn');
        $('.owl-item').not('.cloned').eq(item).find('h2').addClass('animated fadeInLeft');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInRight'); 
        $('.owl-item').not('.cloned').eq(item).find('.btn').addClass('animated zoomIn');
    });

});
	 