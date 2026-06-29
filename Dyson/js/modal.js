const modal = document.querySelector(".modal__card");
const modalClose = document.querySelector(".modal__close");
const shopButton = document.querySelector(".header__shop-button");
const pageBody = document.querySelector(".page__body");

const openModal = () => {
	if (!modal) return;
	modal.classList.add("modal--open");
	pageBody?.classList.add("page__body--no-scroll");
};

const closeModal = () => {
	if (!modal) return;
	modal.classList.remove("modal--open");
	pageBody.classList.remove("page__body--no-scroll");
};

shopButton.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", event => {
	if (event.target === modal) {
		closeModal();
	}
});
document.addEventListener("keydown", event => {
	if (event.key === "Escape" && modal?.classList.contains("modal--open")) {
		closeModal();
	}
});
