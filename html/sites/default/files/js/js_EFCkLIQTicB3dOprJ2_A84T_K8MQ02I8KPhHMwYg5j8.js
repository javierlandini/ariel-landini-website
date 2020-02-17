/**
* @file
* Scripts for the site.
**/

(function ($) {
  'use strict';

  // Header resize.
	window.addEventListener('scroll', function(e) {
		var $h_top_header = 0;
		var pageY = $(window).scrollTop();
		if (pageY > $h_top_header) {
      $('header').addClass('smaller');
		}
		else {
			if($('header').hasClass('smaller')) {
				$('header').removeClass('smaller');
			}
		}
	});

	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	if (isMobile) {
    var href = $('.home-social .fa-whatsapp').parent().attr('href');
    $('.home-social .fa-whatsapp').parent().attr('href', href.replace("web", "api"));
	}
})(jQuery);
;
