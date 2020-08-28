function custom() {

	/*прелоадер*/
	const status = document.querySelector('#status'),
		preloader = document.querySelector('#preloader');

	setTimeout(() => {
		status.classList.add('hide-main');
	}, 1000);
	setTimeout(() => {
		preloader.classList.add('hide-main');
	}, 1500);

	/* главная страница фон на весь экран*/
	let main = document.querySelector('.main');

	function setHeight() {
		main.style.height = `${document.documentElement.clientHeight}px`;
	}

	if (document.documentElement.clientWidth > 767) {
		setHeight();

		window.addEventListener('resize', () => {
			setHeight();
		});
	}

	// Jquery
	// /* прелоадер при загрузке, смотри 4webcode*/
	// $(window).ready(function() {
	// 	$('#status').fadeOut();
	// 	$('#preloader').delay(300).fadeOut('slow');
	// });

	// /* главная страница, фон на весь экран*/

	// $(".main").height($(window).height());

	// $(window).resize(function(){
	// 	$(".main").height($(window).height());
	// });

}

export default custom;