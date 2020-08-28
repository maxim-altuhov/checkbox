function countAnimated() {

	// счётчик цифр 
	const countElem = document.querySelectorAll('.standarts__projects-number');

	function countStart() {
		countElem.forEach(elem => {

			let num = elem.textContent;

			function iterate(i) {
				if (i < num) {
					setTimeout(function () {
						iterate(i + 1);
					}, 10);
				}
				elem.textContent = i;
			}
			iterate(0);
		});
	}
	// countStart(); Запуск функции отдельно


	// Запуск счётчика при скролле
	function startCount() {
		let startCountElem = document.querySelector('#count'),
			countStatus = true;

		window.addEventListener('scroll', () => {
			let scrollInfo = window.pageYOffset || document.documentElement.scrollTop,
				scrollEvent = (scrollInfo > (startCountElem.offsetTop - window.innerHeight));

			if (scrollEvent && countStatus) {
				countStatus = false;
				if (window.matchMedia("(min-width: 992px)").matches) {
					countStart();
				}
			}
		});
	}
	startCount();

	// Jquery
	// счётчик цифр 
	// function countStart() {
	// 	$('.standarts__projects-number').each(function () {
	// 		$(this).prop('Counter', 0).animate({
	// 			Counter: $(this).text()
	// 		}, {
	// 			duration: 2000,
	// 			easing: 'swing',
	// 			step: function (now) {
	// 				$(this).text(Math.ceil(now));
	// 			}
	// 		});
	// 	});
	// }

	// Jquery
	// Запуск счётчика при скролле
	// $(function () {
	// 	var startCount = $('#count');
	// 	var countStatus = true;
	// 	$(window).scroll(function () {
	// 		var scrollEvent = ($(window).scrollTop() > (startCount.position().top - $(window).height()));
	// 		if (scrollEvent && countStatus) {
	// 			countStatus = false;
	// 			if (window.matchMedia("(min-width: 992px)").matches) {
	// 				countStart();
	// 			}
	// 		}
	// 	});
	// });

}

export default countAnimated;