$(document).ready(function () {
	$('.header-menu__btn').on('click', function () {
		$('.header-menu').toggleClass('header-menu_active')
	});
	$('.header-menu__btn').click(function (event) {
		event.preventDefault();

	});
});