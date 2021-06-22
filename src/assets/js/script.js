const headerBurgerBtn = document.querySelector('.header__burger-btn');
if (headerBurgerBtn) {
	const headerBurgerMenu = document.querySelector('.header__burger-menu');
	headerBurgerMenu.addEventListener("click", function () {
		headerBurgerMenu.classList.toggle('_active');
	});
}