const track = document.querySelector(".slider__track, .news__list");
const slides = Array.from(track?.children || []).filter((child) => {
  return (
    child.classList.contains("slider__item") ||
    child.classList.contains("news__item")
  );
});
const prevButton = document.querySelector(
  ".slider__button--prev, [data-slider-prev], .slider-prev",
);
const nextButton = document.querySelector(
  ".slider__button--next, [data-slider-next], .slider-next",
);

if (track && slides.length > 1 && prevButton && nextButton) {
  const viewport = track.parentElement;

  if (viewport) {
    viewport.style.overflow = "hidden";
  }

  track.style.display = "flex";
  track.style.transition = "transform 0.3s ease";
  track.style.willChange = "transform";

  const getGap = () => {
    const style = getComputedStyle(track);
    return parseFloat(style.columnGap || style.gap || 0) || 0;
  };

  const getSlideWidth = () => {
    const firstSlide = slides[0];
    const firstSlideWidth = firstSlide.getBoundingClientRect().width;
    return firstSlideWidth + getGap();
  };

  const clonedSlides = slides.map((slide) => slide.cloneNode(true));
  const prependClones = clonedSlides.slice();
  const appendClones = clonedSlides.slice();

  track.prepend(...prependClones);
  track.append(...appendClones);

  const allSlides = Array.from(track.children);
  const originalCount = slides.length;
  const startIndex = originalCount;
  let currentIndex = startIndex;
  let isMoving = false;

  const updatePosition = (index, immediate = false) => {
    track.style.transition = immediate ? "none" : "transform 0.3s ease";
    track.style.transform = `translateX(-${index * getSlideWidth()}px)`;
  };

  const goNext = () => {
    if (isMoving) {
      return;
    }

    isMoving = true;
    currentIndex += 1;
    updatePosition(currentIndex);

    if (currentIndex === startIndex + originalCount) {
      window.setTimeout(() => {
        currentIndex = startIndex;
        updatePosition(currentIndex, true);
        isMoving = false;
      }, 300);
      return;
    }

    window.setTimeout(() => {
      isMoving = false;
    }, 300);
  };

  const goPrev = () => {
    if (isMoving) {
      return;
    }

    isMoving = true;
    currentIndex -= 1;
    updatePosition(currentIndex);

    if (currentIndex === startIndex - 1) {
      window.setTimeout(() => {
        currentIndex = startIndex + originalCount - 1;
        updatePosition(currentIndex, true);
        isMoving = false;
      }, 300);
      return;
    }

    window.setTimeout(() => {
      isMoving = false;
    }, 300);
  };

  prevButton.addEventListener("click", goPrev);
  nextButton.addEventListener("click", goNext);

  window.addEventListener("resize", () => {
    updatePosition(currentIndex, true);
  });

  updatePosition(currentIndex, true);
}
