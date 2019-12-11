$(document).ready(function () {
	// main - slider
	$('.slider').slick({
		infinite: true,
		autoplay: true,
		fade: true,
		autoplaySpeed: 3000,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		dotsClass: 'dots'
	});
	// slider__home
	$('.slider-home').slick({
		infinite: true,
		autoplay: true,
		fade: true,
		autoplaySpeed: 3000,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		dotsClass: 'home-dots'
	});
	// slider offer
	$('.offer-slider').slick({
		infinite: true,
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.arrow__left'),
		nextArrow: $('.arrow__right'),
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true,
					dotsClass: 'offer-dots',
				}
			},
			{
				breakpoint: 630,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					dotsClass: 'offer-dots',
				}
			},
		]
	})
});