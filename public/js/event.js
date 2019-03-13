'use strict';

(function(global){
	var 
		$window = $(window),
		html = document.documentElement,
		$html = $(html),
		body, 
		$body;


	var eventLookbookSlide = function eventLookbookSlide() {

		var $event_0309_yan13 = $('.event_0309_yan13'),
		 	$event_lookbook_slide = $event_0309_yan13.find('.slides');

		$event_lookbook_slide.slick({
			prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
			nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
			autoplay:true,
			autoplaySpeed:5000,
			pauseOnDotsHover:true,
			slidesToShow: 3,
			slidesToScroll: 1,
			centerMode: true,
			centerPadding: '10',
			variableWidth: true,
			respondTo : 'window',
			responsive: [
				{breakpoint:3000,
				settings: {slidesToShow:3,slidesToScroll:1}
				},
				{breakpoint:1160,
				settings: {slidesToShow:4,slidesToScroll:1}
				},
				{breakpoint:1024,
				settings: {slidesToShow:4,slidesToScroll:2}
				}
			]
		}).each(function(i,el){
			if( el.slick.slideCount <= 1 ){
				$(el).slick('unslick');
			}
		});
	}

	global.hiphoperEvent = {
		'eventLookbookSlide': eventLookbookSlide,
	};

})(this);

// 함수 호출

hiphoperEvent.eventLookbookSlide();