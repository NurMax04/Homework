const burger = document.querySelector(".burger-icon");
const headerMenu = document.querySelector(".header__menu");
const pageBody = document.querySelector(".page__body");

burger.addEventListener("click", () => {
	burger.classList.toggle("burger--open");
	headerMenu.classList.toggle("header__menu--open");
	pageBody.classList.toggle("page__body--no--scroll");
});

// window.addEventListener("scroll", () => {
// 	if (burger.classList.contains("burger--open")) {
// 		burger.classList.remove("burger--open");
// 		headerMenu.classList.remove("header__menu--open");
// 		pageBody.classList.remove("page__body--no--scroll");
// 	}
// });

document.addEventListener("click", e => {
	if (!headerMenu.contains(e.target) && !burger.contains(e.target)) {
		burger.classList.remove("burger--open");
		headerMenu.classList.remove("header__menu--open");
		pageBody.classList.remove("page__body--no--scroll");
	}
});
