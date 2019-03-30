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
			//respondTo : 'window',
			responsive: [
				{breakpoint:1024,
				settings: {slidesToShow:1,slidesToScroll:1,dots:true,arrows:false,pauseOnDotsHover:true,touchMove:true,}
				}
			]
		}).each(function(i,el){
			if( el.slick.slideCount <= 1 ){
				$(el).slick('unslick');
			}
		});

		var $a_link = $('.event_lookbook_slides').find('a');
		$a_link.on('click', function(e){
			e.stopPropagation();	 
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

	var visualFadeInOut = function visualFadeInOut() {

		var $box = $('.visual_area ul'),
			$items = $box.find('li'),
			currentindex = 0,
			duration = 5000, // 유지시간. 밀리초,
			changingduration = 2000, // 변환시간. 밀리초
			numitems = $items.length;

		$items.each(function(i) {
			$items[i] = $(this);
		});

		if ($('.event_fadeinout').length) {
			setTimeout(next, duration);
		}

		function next() {
			var nextindex = currentindex+1 === numitems ? 0 : currentindex+1;
			$items[nextindex].css({opacity: 0}).appendTo($box)
				._animate({opacity: 1}, {duration: changingduration, easing: Quad.easeOut, onComplete: function() {
					setTimeout(next, duration);
				}});
			currentindex = nextindex;
		}


	}


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
			variableWidth: false,
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

	var moEventContSlide = function moEventContSlide() {

		var $event_view = $('.event_view'),
		 	$event_cont_slide = $event_view.find('.cont_slides');

			$event_cont_slide.slick({
				dots:true,
				autoplay:false,
				pauseOnDotsHover:true,
				draggable:false,
				arrows:false,
				infinite:true,
				variableWidth: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			 });
	
	}


	var eventContSlide = function eventContSlide() {

		var $event_view = $('.event_view'),
		 	$event_cont_slide = $event_view.find('.pc_cont_slides');

			$event_cont_slide.slick({
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
			
		}).each(function(i,el){
			if( el.slick.slideCount <= 1 ){
				$(el).slick('unslick');
			}
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

	var eventSlideSyncing = function eventSlideSyncing() {		

		if ($('.event_0321_designerSpecial').length) {

			$('.slider-single').slick({
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      arrows: true,
		      fade: false,
		      adaptiveHeight: true,
		      infinite: true,
		      useTransform: true,
		      speed: 400,
		      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		      prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전 브랜드</span></button>',
			  nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음 브랜드</span></button>',
		    });

		    $('.slider-nav').on('init', function(event, slick) {
		      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
		    }).slick({
		      slidesToShow: 10,
		      slidesToScroll: 10,
		      dots: false,
		      focusOnSelect: false,
		      infinite: true,
		    });
		}

		if ($('.event_0327_springForWoman').length) {

			$('.slider-single').slick({
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      arrows: true,
		      fade: false,
		      adaptiveHeight: true,
		      infinite: true,
		      useTransform: true,
		      speed: 400,
		      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		      prevArrow:'<button type="button" class="slick-prev pos_center_after pos_center v"><span class="s_out">이전 브랜드</span></button>',
			  nextArrow:'<button type="button" class="slick-next pos_center_after pos_center v"><span class="s_out">다음 브랜드</span></button>',
		    });

		    $('.slider-nav').on('init', function(event, slick) {
		      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
		    }).slick({
		      slidesToShow: 8,
		      slidesToScroll: 8,
		      dots: false,
		      focusOnSelect: false,
		      infinite: true,
		    });
		}

		if ($('.event_0318_bestBrand').length) {

			$('.slider-single').slick({
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      arrows: false,
		      fade: false,
		      adaptiveHeight: true,
		      infinite: true,
		      useTransform: true,
		      speed: 400,
		      cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		    });

		    $('.slider-nav').on('init', function(event, slick) {
		      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
		    }).slick({
		      slidesToShow: 5,
		      slidesToScroll: 5,
		      dots: false,
		      focusOnSelect: false,
		      infinite: true,
		    });
		}

	    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
	      $('.slider-nav').slick('slickGoTo', currentSlide);
	      var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
	      $('.slider-nav .slick-slide.is-active').removeClass('is-active');
	      $(currrentNavSlideElem).addClass('is-active');
	    });

	    $('.slider-nav').on('click', '.slick-slide', function(event) {
	      event.preventDefault();
	      var goToSingleSlide = $(this).data('slick-index');
	      $('.slider-single').slick('slickGoTo', goToSingleSlide);
	    });
	}

	var buttonLink = function buttonLink() {

		if ($('.event_0315_sneakers').length) {

			var $button01 = $('.button01'),
				$button02 = $('.button02'),
				$button03 = $('.button03'),
				$button04 = $('.button04'),
				$button05 = $('.button05'),
				$button06 = $('.button06'),
				$button07 = $('.button07');

			$button01.on('click', function() { location.href = "/brand/EXCELSIOR";});
			$button02.on('click', function() { location.href = "/brand/colorcolla";});
			$button03.on('click', function() { location.href = "/brand/gram";});
			$button04.on('click', function() { location.href = "/brand/JDAUL";});
			$button05.on('click', function() { location.href = "/brand/BMSFRANCE";});
			$button06.on('click', function() { location.href = "/brand/Vans";});
			$button07.on('click', function() { location.href = "/brand/MACHENZIE";});

		}

	}

	global.hiphoperEvent = {
		'eventLookbookSlide': eventLookbookSlide,
		'openEventSlide': openEventSlide,
		'visualFadeInOut': visualFadeInOut,
		'eventLogoSlide' : eventLogoSlide,
		'moEventSlide' : moEventSlide,
		'moEventContSlide' : moEventContSlide,
		'eventBannerSlide' : eventBannerSlide,
		'eventSlideSyncing' : eventSlideSyncing,
		'buttonLink' : buttonLink,
		'eventContSlide' : eventContSlide,
	};

})(this);

// 함수 호출
hiphoperEvent.eventLookbookSlide();
hiphoperEvent.openEventSlide();
hiphoperEvent.visualFadeInOut();
hiphoperEvent.eventLogoSlide();
hiphoperEvent.moEventSlide();
hiphoperEvent.eventBannerSlide();
hiphoperEvent.eventSlideSyncing();
hiphoperEvent.moEventContSlide();
hiphoperEvent.buttonLink();
hiphoperEvent.eventContSlide()