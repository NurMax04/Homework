const accordionButtons = document.querySelectorAll(".program__btn");

const closeAccordion = button => {
	const content = button.nextElementSibling;
	const isContent = content && content.classList.contains("chapters__content");

	button.classList.remove("active");
	button.setAttribute("aria-expanded", "false");

	if (isContent) {
		content.classList.remove("active");
		content.style.maxHeight = "0px";
	}
};

accordionButtons.forEach(button => {
	button.addEventListener("click", () => {
		const isOpen = button.classList.contains("active");

		accordionButtons.forEach(item => {
			if (item !== button) {
				closeAccordion(item);
			}
		});

		if (isOpen) {
			closeAccordion(button);
			return;
		}

		const content = button.nextElementSibling;
		const isContent =
			content && content.classList.contains("chapters__content");

		button.classList.add("active");
		button.setAttribute("aria-expanded", "true");

		if (isContent) {
			content.classList.add("active");
			content.style.maxHeight = `${content.scrollHeight}px`;
		}
	});
});
