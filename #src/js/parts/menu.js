function menu() {

	// зафиксировать меню, нужно внести изменения в файл menu.scss position!
	const headerMenu = document.querySelector('.header'),
		doFix = document.querySelector('.do'); //для сайта-портфолио добавлял fix padding чтобы не скакал блок под меню

	let position = headerMenu.offsetTop,
		scroll = window.pageYOffset || document.documentElement.scrollTop;


	window.addEventListener('resize', () => {
		headerMenu.classList.remove('fixed');
		position = headerMenu.offsetTop;
		if (scroll > position) {
			headerMenu.classList.add('fixed');
		}
	});

	document.addEventListener('scroll', () => {

		scroll = window.pageYOffset || document.documentElement.scrollTop;

		if (scroll > position) {
			headerMenu.classList.add('fixed');
			doFix.classList.add('do-fix'); //для сайта-портфолио добавлял fix padding
		} else {
			headerMenu.classList.remove('fixed');
			doFix.classList.remove('do-fix'); //для сайта-портфолио добавлял fix padding
		}
	});

	// Jquery
	// зафиксировать меню, нужно внести изменения в файл menu.scss position!
	// var postion = $('.menu').offset().top;

	// $(document).on('scroll', function () {

	// 	var scroll = $(document).scrollTop();
	// 	if (scroll > postion) {

	// 		$('.menu').addClass('fixed');
	// 	} else {
	// 		$('.menu').removeClass('fixed');
	// 	}

	// });

	// меню и бургер
	const menu = document.querySelector('.menu__wrapper'),
		menuItem = document.querySelectorAll('.menu__link'),
		hamburger = document.querySelector('.hamburger');

	function menuToggle() {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('menu__wrapper_active');
		document.querySelector('body').classList.toggle('lock');
	}

	hamburger.addEventListener('click', () => {
		menuToggle();
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			menuToggle();
		});
	});

	// Jquery
	// меню и бургер
	// const menu = document.querySelector('.menu__wrapper'),
	// 	menuItem = document.querySelectorAll('.menu__link'),
	// 	hamburger = document.querySelector('.hamburger');

	// hamburger.addEventListener('click', () => {
	// 	hamburger.classList.toggle('hamburger_active');
	// 	menu.classList.toggle('menu__wrapper_active');
	// 	$('body').toggleClass('lock');
	// });

	// menuItem.forEach(item => {
	// 	item.addEventListener('click', () => {
	// 		hamburger.classList.toggle('hamburger_active');
	// 		menu.classList.toggle('menu__wrapper_active');
	// 		$('body').toggleClass('lock');
	// 	});
	// });

}

export default menu;