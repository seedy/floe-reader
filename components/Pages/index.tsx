import { Children, MouseEvent, ReactNode, useMemo, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
// STYLES
import "keen-slider/keen-slider.min.css";
import PagesArrow from "components/Pages/Arrow";
import Flex from "components/Flex";
import PagesDot from "components/Pages/Dot";
import keenSliderCarousel from "helpers/keenSlider/plugins/carousel";
import PlayPause from "components/Pages/PlayPause";
import styles from "components/Pages/Pages.module.css";
import Box from "components/Box";
import CurrentPageContextProvider from "components/Context/CurrentPageContext";

// COMPONENTS
interface PagesProps {
  children: ReactNode;
  onReadEnd?: Function;
  delay?: number;
}

const Pages = ({ children, onReadEnd, delay = 2000 }: PagesProps) => {
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slides = Children.count(children);
  const dotKeys = useMemo(() => Array.from(Array(slides).keys()), [slides]);

  const [opacities, setOpacities] = useState<number[]>([]);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      slides,
      loop: true,
      drag: false,
      slideChanged(slider) {
        const current = slider.track.details.rel;
        setCurrentSlide(current);
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
    [keenSliderCarousel(delay, onReadEnd)]
  );

  const onPrev = (e: MouseEvent) => {
    e.stopPropagation();
    instanceRef.current?.prev();
  };

  const onNext = (e: MouseEvent) => {
    e.stopPropagation();
    instanceRef.current?.next();
  };

  const onPause = (e: MouseEvent) => {
    e.stopPropagation();
    setPlaying(false);
    (instanceRef.current?.emit as any)("stopped");
  };

  const onResume = (e: MouseEvent) => {
    e.stopPropagation();
    setPlaying(true);
    (instanceRef.current?.emit as any)("resumed");
  };

  return (
    <Box className={styles.root}>
      <Box className={`${styles.slides} keen-slider`} ref={sliderRef}>
        {loaded && instanceRef.current && (
          <>
            <PagesArrow
              onClick={onPrev}
              variant="small"
              left
            />
            <PagesArrow
              onClick={onNext}
              variant="small"
            />
          </>
        )}
        {Children.map(children, (child, index) => (
          <CurrentPageContextProvider value={currentSlide === index}>
            <Box
              className={`${styles.slide} keen-slider__slide`}
              key={index}
              style={{ opacity: opacities[index] }}
            >
              {child}
            </Box>
          </CurrentPageContextProvider>
        ))}
      </Box>
      {loaded && instanceRef.current && (
        <Flex style={{ position: "absolute", bottom: 0 }}>
          <Flex direction="column" align="center">
            <PlayPause
              playing={playing}
              onClick={playing ? onPause : onResume}
            />
            <Flex>
              {dotKeys.map((key) => (
                <PagesDot
                  key={key}
                  active={currentSlide === key}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(key);
                  }}
                />
              ))}
            </Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Pages;
