function scroll() {

	// кнопка вверх (нужно добавить css в pageup.scss, если нет)
	const pageUp = document.querySelector('.pageup');

	window.addEventListener('scroll', function () {

		let scroll = window.pageYOffset || document.documentElement.scrollTop;

		if (scroll > 800) {
			pageUp.classList.add('pageup-show');
		} else {
			pageUp.classList.remove('pageup-show');
		}
	});

	// подсвечивание активного пункта меню
	const sectionBlock = document.querySelectorAll('section');

	window.addEventListener('scroll', function () {
		let scrollInfo = window.pageYOffset || document.documentElement.scrollTop;

		sectionBlock.forEach((elem) => {
			let topBlock = elem.offsetTop - 200,
				bottomBlock = topBlock + elem.scrollHeight,
				idBlock = elem.getAttribute('id');

			if (scrollInfo > topBlock && scrollInfo < bottomBlock && idBlock !== null) {
				document.querySelector('a.active').classList.remove('active');
				document.querySelector(`a[href="#${idBlock}"]`).classList.add('active');
			}
		});
	});

	// плавный скролл к блоку
	const navigationLinks = document.querySelectorAll('nav a');

	navigationLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			e.preventDefault();
			const idLink = link.getAttribute('href');
			document.querySelector(idLink).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	});

	// jquery
	// scroll up	
	// $(window).scroll(function() {
	// 	if ($(this).scrollTop() > 1000) {
	// 		$('.pageup').fadeIn();
	// 	} else {
	// 		$('.pageup').fadeOut();
	// 	}
	// });

	// jquery
	// плавный скролл, отключить если используем другой

	// $('a[href ^="#scroll_"]').on("click", function(e){
	// 	e.preventDefault();
	// 	var anchor = $(this).attr('href');
	// 	$('html, body').stop().animate({
	// scrollTop: $(anchor).offset().top - 60 насколько поднять выше
	// 		scrollTop: $(anchor).offset().top}, 800);
	// });

	// jquery
	// добавление класса active, если скролим блок

	// $(window).scroll(function(){
	// 	var $sections = $('section');

	// $sections.each(function(i,el){
	// 	var top  = $(el).offset().top-200;
	// 	var bottom = top +$(el).height();
	// 	var scroll = $(window).scrollTop();
	// 	var id = $(el).attr('id');
	// 	if( scroll > top && scroll < bottom){
	// 		$('a.active').removeClass('active');
	// 		$('a[href="#'+id+'"]').addClass('active');

	// 	}
	// });

	// });

	// jquery
	// плавный скролл всех ссылок в блоке nav

	// $('nav').on('click','a', function (event) {
	// 	event.preventDefault();
	// получем идентификатор блока из атрибута href
	// 	var id  = $(this).attr('href'),
	// находим высоту, на которой расположен блок
	// 	top = $(id).offset().top;
	// анимируем переход к блоку, время: 800 мс
	// 	$('body,html').animate({scrollTop: top}, 800);
	// });

}

export default scroll;