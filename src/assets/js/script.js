const headerBurgerBtn = document.querySelector('.header__burger-btn');
if (headerBurgerBtn) {
	const headerBurgerMenu = document.querySelector('.header__burger-menu');
	headerBurgerBtn.addEventListener("click", function () {
		headerBurgerMenu.classList.toggle('_active');
	});
}
console.log("hello");