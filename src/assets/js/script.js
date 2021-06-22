const headerBurgerBtn = document.querySelector('.header__burger-btn');
const body = document.querySelector('body');
if (headerBurgerBtn) {
	const headerBurger = document.querySelector('.header__burger');
	headerBurgerBtn.addEventListener("click", function () {
		headerBurger.classList.toggle('_active');
		body.classList.toggle('_lock');
	});
}