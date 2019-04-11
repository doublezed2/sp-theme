
 (function($){
 $(document).ready(function(){
	// Smooth Scroll
	function scrollNav() {
	$('.partner-section a').click(function(){  
	//Animate
	$('html, body').stop().animate({
	    scrollTop: $( $(this).attr('href') ).offset().top - 160
	}, 500);
	return false;
	});
	$('.partner-section a').scrollTop();
	}
	scrollNav();

	// Flex Slider on Home page
	$('.flexslider').flexslider({
      animation: "slide",
      animationLoop: true,
      itemWidth: 210,
      mousewheel: false,
      itemMargin: 20,
      minItems: 6,  
      maxItems: 6, 
      controlNav: false,
      slideshowSpeed: 2500,
      touch: true,
      keyboard: true,  
      move: 1,
      directionNav: false

    });
});
})(jQuery);