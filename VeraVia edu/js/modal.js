const modalTriggers = document.querySelectorAll(".global__btn");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const modalCloseButton = document.querySelector(".modal__close");
const modalForm = document.querySelector(".modal__form");

let lastFocusedElement = null;
let modalOpen = false;

const toggleBodyScroll = () => {
	document.body.classList.toggle("modal-open", modalOpen);
};

const focusableSelector =
	'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const trapFocus = event => {
	if (!modalOpen || event.key !== "Tab") {
		return;
	}

	const focusableElements = modal.querySelectorAll(focusableSelector);
	const firstElement = focusableElements[0];
	const lastElement = focusableElements[focusableElements.length - 1];

	if (event.shiftKey && document.activeElement === firstElement) {
		event.preventDefault();
		lastElement.focus();
	} else if (!event.shiftKey && document.activeElement === lastElement) {
		event.preventDefault();
		firstElement.focus();
	}
};

const openModal = triggerButton => {
	if (modalOpen || !modal) {
		return;
	}

	lastFocusedElement = triggerButton || document.activeElement;
	modalOpen = true;
	modal.classList.add("is-open");
	modal.setAttribute("aria-hidden", "false");
	toggleBodyScroll();
	setTimeout(() => {
		modalCloseButton?.focus();
	}, 0);
};

const closeModal = () => {
	if (!modalOpen || !modal) {
		return;
	}

	modalOpen = false;
	modal.classList.remove("is-open");
	modal.setAttribute("aria-hidden", "true");
	toggleBodyScroll();

	if (lastFocusedElement) {
		lastFocusedElement.focus();
	}
};

const handleOverlayClick = event => {
	if (event.target === modalOverlay || event.target === modal) {
		closeModal();
	}
};

const handleEscapeKey = event => {
	if (event.key === "Escape") {
		closeModal();
	}
};

const bindEvents = () => {
	modalTriggers.forEach(trigger => {
		trigger.addEventListener("click", () => openModal(trigger));
	});

	modalCloseButton?.addEventListener("click", closeModal);
	modalOverlay?.addEventListener("click", handleOverlayClick);
	document.addEventListener("keydown", handleEscapeKey);
	document.addEventListener("keydown", trapFocus);

	modalForm?.addEventListener("submit", event => {
		event.preventDefault();
		closeModal();
	});
};

bindEvents();
