const authorSection = document.querySelector(".author");
const consultationContent = document.querySelector(".consultation__content");

if (authorSection && consultationContent) {
  const updateConsultationVisibility = () => {
    const sectionRect = authorSection.getBoundingClientRect();
    const sectionCenter = sectionRect.top + sectionRect.height / 2;
    const viewportMiddle = window.innerHeight / 2;

    if (sectionCenter <= viewportMiddle) {
      consultationContent.classList.add("is-hidden");
    } else {
      consultationContent.classList.remove("is-hidden");
    }
  };

  window.addEventListener("scroll", updateConsultationVisibility);
  window.addEventListener("load", updateConsultationVisibility);
  window.addEventListener("resize", updateConsultationVisibility);
}
