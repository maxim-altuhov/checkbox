function show() {

	// показ блока (нужно прописывать дополнительные свойства и классы в html,
	//  в том числе click-hide, и ставить z-index), смотри IT-project

	function showBlock(selector, block, nameBtn, nameBtnOrigin, hiddenClass) {
		const selectorElem = document.querySelector(selector),
			selectorBlock = document.querySelector(block);

		selectorBlock.style.overflow = 'hidden';

		selectorElem.addEventListener('click', () => {
			if (selectorBlock.classList.contains(hiddenClass) && selectorElem.textContent !== nameBtn) {
				selectorBlock.style.opacity = 1;
				selectorBlock.style.maxHeight = selectorBlock.scrollHeight + 'px';
				selectorBlock.classList.remove(hiddenClass);
				selectorElem.textContent = nameBtn;
			} else {
				selectorBlock.style.opacity = 0;
				selectorBlock.style.maxHeight = 0;
				selectorBlock.classList.add(hiddenClass);
				selectorElem.textContent = nameBtnOrigin;
			}
		});
	}

	showBlock('#show_mobile', '#mobile__block', 'Свернуть', 'Все услуги', 'click-hide');
	showBlock('#show_projects', '#projects__block', 'Свернуть', 'Все проекты', 'click-hide');

	// Jquery
	// показ блока (в инлайн стилях нужно прописывать display:none)

	// function showBlockJq(selector, block, nameBtn, nameBtnOrigin) {
	// 	$(selector).click(function () {
	// 		$(block).slideToggle('800');
	// 		let textBtn = $(selector).text();
	// 		if (textBtn !== nameBtn) {
	// 			$(selector).text(nameBtn);
	// 		} else {
	// 			$(selector).text(nameBtnOrigin);
	// 		}
	// 	});
	// }
	// showBlockJq('#show_projects', '#projects__block', 'Свернуть', 'Все проекты');

}

export default show;