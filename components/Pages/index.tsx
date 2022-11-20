import { Children, MouseEvent, ReactNode, useMemo, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Root, Slide, Slides } from "components/Pages/styled";

// STYLES
import "keen-slider/keen-slider.min.css";
import PagesArrow from "components/Pages/Arrow";
import Flex from "components/Flex";
import PagesDot from "components/Pages/Dot";

interface PagesProps {
  children: ReactNode;
  delay?: number;
}
const Pages = ({ children, delay = 2000 }: PagesProps) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slides = Children.count(children);
  const dotKeys = useMemo(() => Array.from(Array(slides).keys()), [slides]);

  const [opacities, setOpacities] = useState<number[]>([]);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slides,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      detailsChanged(s) {
        const nextOpacities = s.track.details.slides.map(
          (slide) => slide.portion
        );
        setOpacities(nextOpacities);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, delay);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const onPrev = (e: MouseEvent) => {
    e.stopPropagation();
    instanceRef.current?.prev();
  };

  const onNext = (e: MouseEvent) => {
    e.stopPropagation();
    instanceRef.current?.next();
  };

  return (
    <Root>
      <Slides ref={sliderRef}>
        {loaded && instanceRef.current && (
          <>
            <PagesArrow onClick={onPrev} left disabled={currentSlide === 0} />
            <PagesArrow
              onClick={onNext}
              disabled={currentSlide === slides - 1}
            />
          </>
        )}
        {Children.map(children, (child, index) => (
          <Slide key={index} css={{ opacity: opacities[index] }}>
            {child}
          </Slide>
        ))}
      </Slides>
      {loaded && instanceRef.current && (
        <Flex css={{ position: "absolute", bottom: 0 }}>
          {dotKeys.map((key) => (
            <PagesDot
              key={key}
              active={currentSlide === key}
              onClick={() => {
                console.log("hey");
                instanceRef.current?.moveToIdx(key);
              }}
            />
          ))}
        </Flex>
      )}
    </Root>
  );
};

export default Pages;
