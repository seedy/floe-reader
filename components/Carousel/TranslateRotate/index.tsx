import carouselTranslateRotate from "helpers/keenSlider/plugins/carouselTranslateRotate";
import { useKeenSlider } from "keen-slider/react";
import { Children, type ReactNode, useMemo, useState } from "react";
// STYLES
import "keen-slider/keen-slider.min.css";
import CarouselIndicators from "components/Carousel/Indicators";

interface CarouselTranslateRotateProps {
  children: ReactNode;
}
const CarouselTranslateRotate = ({
  children,
}: CarouselTranslateRotateProps) => {
  const slides = Children.count(children);
  const dotKeys = useMemo(() => Array.from(Array(slides).keys()), [slides]);

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "free-snap",
      renderMode: "custom",
      // Custom selector: avoids keen-slider's unlayered `.keen-slider__slide` CSS overriding Tailwind utilities
      selector: "[data-carousel-slide]",
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [carouselTranslateRotate],
  );

  return (
    <section
      className="size-full flex flex-col items-center"
      aria-label="Annonces"
      aria-roledescription="carousel"
    >
      <div className="relative perspective-normal md:perspective-distant flex grow w-full">
        <div
          ref={sliderRef}
          className="absolute size-full flex items-center justify-center transform-3d touch-pan-y select-none"
        >
          {Children.map(children, (child, index) => (
            <div
              data-carousel-slide
              className="absolute h-full max-w-3/5"
              role="tabpanel"
              aria-labelledby={`tab-${index}`}
              // biome-ignore lint/suspicious/noArrayIndexKey: no reorder of children
              key={index}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <CarouselIndicators
        keys={dotKeys}
        currentSlide={currentSlide}
        instanceRef={instanceRef}
      />
    </section>
  );
};

export default CarouselTranslateRotate;
