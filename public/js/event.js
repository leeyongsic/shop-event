'use strict';

(function(global){
	var 
		$window = $(window),
		html = document.documentElement,
		$html = $(html),
		body, 
		$body;


	var eventLookbookSlide = function eventLookbookSlide() {

		var $event_view = $('.event_view'),
		 	$event_lookbook_slide = $event_view.find('.event_lookbook_slides');

		$event_lookbook_slide.slick({
			prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전</span></button>',
			nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음</span></button>',
			autoplay:true,
			autoplaySpeed:5000,
			pauseOnDotsHover:true,
			slidesToShow: 2,
			slidesToScroll: 1,
			centerMode: false,
			centerPadding: '10',
			variableWidth: true,
			respondTo : 'window',
			responsive: [
				{breakpoint:3000,
				settings: {slidesToShow:2,slidesToScroll:1}
				},
				{breakpoint:1160,
				settings: {slidesToShow:2,slidesToScroll:1}
				},
				{breakpoint:1024,
				settings: {slidesToShow:2,slidesToScroll:2}
				}
			]
		}).each(function(i,el){
			if( el.slick.slideCount <= 1 ){
				$(el).slick('unslick');
			}
		});
	}

	var openEventSlide = function openEventSlide() {

		var $open_event = $('.open_event'),
		 	$open_event_slide = $open_event.find('.slides');

		$open_event_slide.slick({
			dots:true,
			autoplay:false,
			pauseOnDotsHover:true,
			dotsClass:'slick-dots small pos_center h dis_f',
			draggable:true,
			arrows:false,
			infinite:false,
			variableWidth: true,
		}).each(function(index, el){
			if( $(el)[0].slick.slideCount == 1 ){
				$(el).slick('unslick');
			}
		});
		$('#slideRelease').slick('slickSetOption',{
			arrows:false
		},true);

	} 

/*
	var visualFadeInOut = function visualFadeInOut() {

		var $box = $('.visual-area ul'),
			$items = $box.find('li'),
			currentindex = 0,
			duration = 5000, // 유지시간. 밀리초,
			changingduration = 2000, // 변환시간. 밀리초
			numitems = $items.length;

		$items.each(function(i) {
			$items[i] = $(this);
		});

		setTimeout(next, duration);

		function next() {
			var nextindex = currentindex+1 === numitems ? 0 : currentindex+1;
			$items[nextindex].css({opacity: 0}).appendTo($box)
				._animate({opacity: 1}, {duration: changingduration, easing: Quad.easeOut, onComplete: function() {
					setTimeout(next, duration);
				}});
			currentindex = nextindex;
		}

	}
*/

	var eventLogoSlide = function eventLogoSlide() {

		var $event_view = $('.event_view'),
		 	$event_lookbook_slide = $event_view.find('.event_logo_slides');

		$event_lookbook_slide.slick({
			autoplay:true,
			autoplaySpeed:5000,
			pauseOnDotsHover:true,
			slidesToShow: 7,
			slidesToScroll: 1,
			centerMode: false,
			variableWidth: true,
			respondTo : 'window',
			arrows:false,
			responsive: [
				{breakpoint:3000,
				settings: {slidesToShow:7,slidesToScroll:1}
				},
				{breakpoint:1160,
				settings: {slidesToShow:7,slidesToScroll:1}
				},
				{breakpoint:1024,
				settings: {slidesToShow:6,slidesToScroll:2}
				}
			]
		}).each(function(i,el){
			if( el.slick.slideCount <= 1 ){
				$(el).slick('unslick');
			}
		});
	}


	var moEventSlide = function moEventSlide() {

		var $event_view = $('.event_view'),
		 	$open_event_slide = $event_view.find('.img_slides');

		$open_event_slide.slick({
			dots:false,
			autoplay:true,
			pauseOnDotsHover:true,
			draggable:true,
			arrows:false,
			infinite:true,
			variableWidth: true,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	}


	var eventBannerSlide = function eventBannerSlide() {

		var $event_view = $('.event_view'),
		 	$open_event_slide = $event_view.find('.banner_slides');

		$open_event_slide.slick({
			dots:true,
			autoplay:false,
			pauseOnDotsHover:true,
			dotsClass:'slick-dots small pos_center h dis_f',
			draggable:true,
			arrows:false,
			infinite:false,
			variableWidth: true,
		}).each(function(index, el){
			if( $(el)[0].slick.slideCount == 1 ){
				$(el).slick('unslick');
			}
		});
		$('#slideRelease').slick('slickSetOption',{
			arrows:false
		},true);

	} 
 


	global.hiphoperEvent = {
		'eventLookbookSlide': eventLookbookSlide,
		'openEventSlide': openEventSlide,
		//'visualFadeInOut': visualFadeInOut,
		'eventLogoSlide' : eventLogoSlide,
		'moEventSlide' : moEventSlide,
		'eventBannerSlide' : eventBannerSlide,
	};

})(this);

// 함수 호출
hiphoperEvent.eventLookbookSlide();
hiphoperEvent.openEventSlide();
//hiphoperEvent.visualFadeInOut();
hiphoperEvent.eventLogoSlide();
hiphoperEvent.moEventSlide();
hiphoperEvent.eventBannerSlide();