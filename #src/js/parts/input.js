function inputJs() {

	// java script
	document.querySelector('#subscribe-input').addEventListener('click', function (e) {
		this.setAttribute("placeholder", "");
	});


	// Jquery
	// исчезновение placeholder при клике, можно сделать только на CSS смотри IT-project subscribe.scss
	$('#subscribe-input').on('click', function () {
		$(this).attr("placeholder", "");
	});

}

export default inputJs;