import type { KeenSliderPlugin } from "keen-slider/react";

const SIDE_ROTATE_DEG = 35;
// Slides start fading past the side position and are hidden half a slide further
const FADE_START_OFFSET = 1;
const FADE_LENGTH = 0.5;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const carouselTranslateRotate: KeenSliderPlugin = (slider) => {
  const render = () => {
    const slidesLength = slider.slides.length;
    // Track position in slides, within [0, slidesLength)
    const position = slider.track.details.progress * slidesLength;

    slider.slides.forEach((element, index) => {
      // Signed distance to the front slide, wrapped to the shortest way around the loop
      const offset =
        ((((index - position + slidesLength / 2) % slidesLength) +
          slidesLength) %
          slidesLength) -
        slidesLength / 2;
      const absOffset = Math.abs(offset);

      // Side slides sit edge to edge with the front one and rotate around that shared edge (percentages are of the slide's own width)
      element.style.transformOrigin =
        offset < 0 ? "right center" : "left center";
      element.style.transform = `translateX(${offset * 100}%) rotateY(${clamp(offset, -1, 1) * SIDE_ROTATE_DEG}deg)`;
      element.style.opacity = String(
        clamp(
          (FADE_START_OFFSET + FADE_LENGTH - absOffset) / FADE_LENGTH,
          0,
          1,
        ),
      );
    });
  };

  slider.on("created", render);
  slider.on("detailsChanged", render);
};

export default carouselTranslateRotate;
