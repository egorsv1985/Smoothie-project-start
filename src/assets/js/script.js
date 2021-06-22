const headerBurgerBtn = document.querySelector('.header__burger-btn');
if (headerBurgerBtn) {
	const headerBurger = document.querySelector('.header__burger');
	headerBurgerBtn.addEventListener("click", function () {
		headerBurger.classList.toggle('_active');
	});
}
console.log("hello");