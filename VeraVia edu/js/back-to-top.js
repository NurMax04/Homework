const backToTop = document.querySelector(".back-to-top");
const authorSection = document.querySelector(".author");

if (backToTop && authorSection) {
  const updateBackToTopVisibility = () => {
    const sectionRect = authorSection.getBoundingClientRect();
    const sectionCenter = sectionRect.top + sectionRect.height / 2;
    const viewportMiddle = window.innerHeight / 2;

    if (sectionCenter <= viewportMiddle) {
      backToTop.classList.add("is-visible");
    } else {
      backToTop.classList.remove("is-visible");
    }
  };

  window.addEventListener("scroll", updateBackToTopVisibility);
  window.addEventListener("load", updateBackToTopVisibility);
  window.addEventListener("resize", updateBackToTopVisibility);
}
