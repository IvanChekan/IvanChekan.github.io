$(document).ready(function () {
	$('.card-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.arrows__left'),
		nextArrow: $('.arrows__right'),
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,

				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 492,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});
});