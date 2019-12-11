// Обработка и отправка через технологию 	Ajax
$(document).ready(function () {
	$('#offer__form').on('submit', function (event) {
		event.preventDefault();
		$.ajax({
			url: 'mail.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function (data) {
				$('.success').html(data + ',Ваша форма отправлена.')
			}
		});
	});
	$('#offer__form').validate({
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			userphone: {
				required: true,
			}
		},
		messages: {
			username: {
				required: "укажите имя",
				minlength: jQuery.validator.format("Осталось символов: 1"),
			},
			userphone: {
				required: "Укажите телефон",
			}
		},

	});

});
$(document).ready(function () {
	// отправка данных через ajax второй формы
	$('#brif-form').on('submit', function (event) {
		event.preventDefault();
		$.ajax({
			url: 'mail.php',
			type: 'POST',
			data: $(this).serialize(),
			success: function (data) {
				$('.description').html(data + ',Ваша форма отправлена.')
			}
		});
	});
	// Валидация форм
	$('#brif-form').validate({
		rules: {
			username: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			userphone: {
				required: true,
			}
		},
		messages: {
			username: {
				required: "укажите имя",
				minlength: jQuery.validator.format("Осталось символов: 1")
			},
			email: {
				required: "Введите ваш email",
				email: "Введите корректный email"
			},
			userphone: {
				required: "Укажите телефон",
			}
		},
	});
});