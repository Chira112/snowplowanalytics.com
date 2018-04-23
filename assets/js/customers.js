/*!
 * https://github.com/snowplow/snowplow.github.com)
 * COSTUMERS REVAMP v2
 */

var case_studies = [], case_studies_left = '', case_studies_right = '', case_studies_html = '';
var test_array = [];
var video_filter = '', videos_array = [];
var html_;
var media_pos = 0;
// testemonials
var count_test = 0, test_block = $('.testemonials .testemonials-block'), test_wrapper = $('.testemonials .testemonials-block-wrapper'), test_block_size = 0, test_wrapper_size = 0, test_left = 0, test_pos = 1;
// media
var count_media = 0, media_block = $('.media .testemonials-block'), media_wrapper = $('.media .testemonials-block-wrapper'), media_block_size = 0, media_wrapper_size = 0, media_left = 0, media_pos = 1;


function calcWrapperSize() {
	test_block_size = test_block.outerWidth();  
	test_wrapper_size = count_test*test_block_size; 
	test_wrapper.css('width', test_wrapper_size+'px');
	
	media_block_size = media_block.outerWidth();  
	media_wrapper_size = count_media*media_block_size; 
	media_wrapper.css('width', media_wrapper_size+'px');

}


function goToSlide(slide, target) {
	if (target == 'testemonials') {
		test_block_size = test_block.outerWidth(); 
		test_left = (-1) * (slide - 1) * test_block_size; 
		test_wrapper.css('left', test_left + 'px');
	} else {
		media_block_size = media_block.outerWidth(); 
		media_left = (-1) * (slide - 1) * media_block_size; 
		media_wrapper.css('left', media_left + 'px');
	}
	 
}


$(document).ready(function() {

	/**
	 * Slide Testemonials
	 *
	 *
	 */
	 // Calculate size of wrapper
	 count_test = test_block.length;
	 count_media = media_block.length;
	  
	 calcWrapperSize();
	 // Go to slide #
	$('.testemonials .testemonials-arrows').click(function(event) {
	 	if ($(this).hasClass('prev_')) {
	 		if ( test_pos <= 1) test_pos = count_test;
	 		else test_pos--;
	 		goToSlide(test_pos, 'testemonials');
	 	} else {
	 		if ( test_pos >= count_test ) test_pos = 1;
	 		else test_pos++;
			goToSlide(test_pos, 'testemonials');
	 	}
	 	
	});
	$('.media .testemonials-arrows').click(function(event) {
	 	if ($(this).hasClass('prev_')) {
	 		if ( media_pos <= 1) media_pos = count_media;
	 		else media_pos--;
	 		goToSlide(media_pos, 'media');
	 	} else {
	 		if ( media_pos >= count_media ) media_pos = 1;
	 		else media_pos++;
			goToSlide(media_pos, 'media');
	 	}
	 	
	});


	 
 	
 	/*
 	 * SnowPlow btn side bars
 	*/
 	// $('.snowplw-btn-container').each(function(index, el) {
 	// 	var pad_ = 50;
 	// 	var btn_width = $(el).find('.snowplw-btn').outerWidth();
 	// 	$(el).find('.snowplw-btn-sides').css('width', 'calc(50% - '+(btn_width/2 + pad_)+'px)');
 	// });



 	/*
 	 * Align Case Studies
 	*/
 	// case_studies_left = '';
 	// case_studies_right = '';

 	// $('.case-studies-block').each(function(index, el) {
 	// 	case_studies_html = '<div class="case-studies-block ' + $(el).attr('data-class') + '">' + $(el).html() + '</div>';
 	// 	if (index % 2 == 0) {
 	// 		case_studies_left += case_studies_html;
 	// 	} else {
 	// 		case_studies_right += case_studies_html;
 	// 	}
 	// });
 	// case_studies_html = '';
 	// case_studies_html += '<div class="case-studies-container-left col-sm-6">';
 	// case_studies_html += case_studies_left;
 	// case_studies_html += '</div>';
 	// case_studies_html += '<div class="case-studies-container-right col-sm-6">';
 	// case_studies_html += case_studies_right;
 	// case_studies_html += '</div>';
 	// $('.case-studies-container').html(case_studies_html);
 	




 	/*
 	 * Refresh Testemonials
 	*/
 	// 1. get testemonials
 	$('.testemonials-block').each(function(index, el) {
 		var class_ = $(el).attr('class');
 		html_ = '';
 		html_ += '<div class="';
 		html_ += class_;
 		html_ += '">';
 		html_ += $(el).html();
 		html_ += '</div>';
 		test_array[test_array.length] = html_;
 	});

 	// 2. onclick
 	$('#btn_refresh_testemonials').click(function(event) {
 		// shuffle array
 		Shuffle(test_array);

 		// write new htm with shuffled array
 		html_ = '';
 		$.each(test_array, function(index, val) {
 			html_ += val;
 		});
 		$('.testemonials-block-container .row').html(html_);

 	});

 	// 3. Function
 	function Shuffle(o) {
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};




	/*
 	 * Logos Companies Effect
 	*/
	$card	= $( '.users-block' );
	$card.on( 'mousemove', function( e ) {
		var $this		= $( this ),
			eX			= e.offsetX,
			eY			= e.offsetY,
			dim			= this.getBoundingClientRect();
			w			= dim.width/2,
			h			= dim.height/2,
			tiltLimit	= 15,
			posX		= ( h - eY ) * ( tiltLimit / h );
			posY		= ( w - eX ) * ( tiltLimit / w ) * -1;

		$this.css({
			'transform': 'rotateX( ' + posX + 'deg ) rotateY( ' + posY + 'deg )',
			'box-shadow': ( posY * -1 ) + 'px ' + ( posX + 14 ) + 'px 34px 0 rgba( 0, 0, 0, 0.1 )'
		});
		
		$this.find( '.highlight' ).css({
			'opacity': 1,
			'transform': 'translate3d( ' + ( posX * -4 ) + 'px, ' + ( posY * -4 ) + 'px, '  + '0 )'
		});
	});

	$card.mouseleave( function( e ) {
		var $el = $( this );

		$el.removeAttr( 'style' ).addClass( 'hover--ending' );

		setTimeout( function() {
			$el.removeClass( 'hover--ending' );
		}, 500 );
		
		$el.find( '.highlight' ).removeAttr( 'style' );
	});



	/*
 	 * Logos Companies Show/Hide
 	*/
	$('#btn_users').click(function(event) {
		if ($('.users-block-container').hasClass('visible')) {
			$('.users-block-container').removeClass('visible');
			$(this).html('Load More Users');
			 $('html,body').animate({
		        scrollTop: $("section.users").offset().top},
		        'slow');
		} else {
			$('.users-block-container').addClass('visible');
			$(this).html('Hide Users');
		}
	});



	/*
 	 * Change Videos
 	*/
 	$('.videos-block').each(function(index, el) {
 		var class_ = $(this).attr('class');
 		video_filter = $(this).attr('data-filter');
 		html_ = '';
 		html_ += '<div class="';
 		html_ += class_;
 		html_ += '" data-filter="';
 		html_ += video_filter;
 		html_ += '"">';
 		html_ += $(this).html();
 		html_ += '</div>';
 		videos_array[videos_array.length] = { 'html' : html_, 'filter' : video_filter };
 	});
 	$('.videos-filters li').click(function(event) {
 		$('.videos-filters li').removeClass('active');
 		$(this).addClass('active');
 		video_filter = $(this).attr('data-filter');
 		html_ = '';
 		if (video_filter == 'all') {
 			$.each(videos_array, function(index, val) {
 				html_ += val.html;
 			});			
 		} else {
 			$.each(videos_array, function(index, val) {
 				if (val.filter == video_filter) html_ += val.html;
 			});
 		}
 		$('.videos-block-container').html(html_);
 	});



 	/*
 	 * Media cards handler
 	*/
 	// 1. Wrapper width
 	$('.media-blocks-wrapper').width($('.media-blocks').length * ($('.media-blocks').outerWidth() + 15));
 	// 2. Arrows movement
 	$('.media-arrow').click(function(event) {
 		if (!$(this).hasClass('inactive')) {
 			if ($(this).hasClass('right')) media_pos++; 
 			else media_pos--;
	 		$('.media-blocks-wrapper').css({
	 			'translate': 'translate('+(-1)*media_pos*($('.media-blocks').outerWidth() + 15)+'px)',
	 			'-webkit-transform': 'translate('+(-1)*media_pos*($('.media-blocks').outerWidth() + 15)+'px)',
	 			'-ms-transform': 'translate('+(-1)*media_pos*($('.media-blocks').outerWidth() + 15)+'px)',
	 			'-o-transform': 'translate('+(-1)*media_pos*($('.media-blocks').outerWidth() + 15)+'px)'
	 		});
	 		//tests
	 		$('.media-arrow').removeClass('inactive');
	 		if (media_pos == 0) $('.media-arrow.left').addClass('inactive');
	 		if (media_pos == ($('.media-blocks').length -2) && $(window).outerWidth() > 767) $('.media-arrow.right').addClass('inactive');
	 		if (media_pos == ($('.media-blocks').length -1) && $(window).outerWidth() < 768) $('.media-arrow.right').addClass('inactive');
 		}
 	});




 	 










}); // doc.ready


$(window).resize(function(event) {
	/*
 	 * Media cards handler
 	*/
 	$('.media-blocks-wrapper').width($('.media-blocks').length * ($('.media-blocks').outerWidth() + 15));



 	/**
	 * Slide Testemonials
	 *
	 *
	 */
	 // Calculate size of wrapper
	 calcWrapperSize();
});