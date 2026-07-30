const modalTriggers = document.querySelectorAll(
	".global__btn, .consultation__icon-container, .consultation__content",
);
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const modalCloseButton = document.querySelector(".modal__close");
const modalForm = document.querySelector(".modal__form");
const consultationContent = document.querySelector(".consultation__content");
const programSection = document.querySelector(".program");
const hiddenConsultationClass = "consultation__content--hidden";

let lastFocusedElement = null;
let modalOpen = false;

const updateConsultationVisibility = isVisible => {
	if (!consultationContent) {
		return;
	}

	consultationContent.classList.toggle(hiddenConsultationClass, !isVisible);
};

const bindConsultationVisibility = () => {
	if (!consultationContent || !programSection) {
		return;
	}

	const handleScroll = () => {
		const programRect = programSection.getBoundingClientRect();
		const shouldHide = programRect.bottom <= 0;
		updateConsultationVisibility(!shouldHide);
	};

	handleScroll();
	window.addEventListener("scroll", handleScroll, { passive: true });
};

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

	bindConsultationVisibility();

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
