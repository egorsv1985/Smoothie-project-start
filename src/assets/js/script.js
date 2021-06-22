const headerBurgerBtn = document.querySelector('.header__burger-btn');
const body = document.querySelector('body');
if (headerBurgerBtn) {
	const headerBurger = document.querySelector('.header__burger');
	headerBurgerBtn.addEventListener("click", function () {
		headerBurger.classList.toggle('_active');
		body.classList.toggle('_lock');
	});
}

// найди элемент body через js запиши его в переменную и при нажатие на burger  body.classList.toggle('lock')  а в класс lock добавь overflow:hidden