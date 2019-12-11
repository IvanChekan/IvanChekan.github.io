$(document).ready(function () {
	// настройки select
	$('.select_checked').on('click', function () {
		$('.select__dropdown').toggleClass('select__dropdown_open')
	});
	$('.select__option').on('click', function () {
		var value = (this).attr('data-value');
		$('#select-type').val(value);
		$('.select_checked').text(value);
		$('.select__dropdown').toggleClass('select__dropdown_open');
	});
	// кнопка бургер и меню
	$('.menu-btn').on('click', function (e) {
		e.preventDefault;
		$(this).toggleClass('menu-btn_active');
		$('.menu-mobile').toggleClass('.menu-mobile__active').slideToggle(500);
	})
	// выпадающие меню 
	$('.menu-list').hover(function () {
		$(this).find('.submenu').slideToggle(200);
	})
	$('.menu-bottom__list').hover(function () {
		$(this).find('.submenu-bottom').slideToggle(200);
	})
});