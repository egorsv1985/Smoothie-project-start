const headerBurgerBtn = document.querySelector('.header__burger-btn');
if (headerBurgerBtn) {
	const headerNavigation = document.querySelector('.header__navigation');
	headerBurgerBtn.addEventListener("click", function () {

		// headerBurgerBtn.classList.toggle('_active');
		headerNavigation.classList.toggle('_active');
	});
}