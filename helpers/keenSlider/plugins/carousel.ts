import { KeenSliderInstance } from "keen-slider/react";

interface Slider {
  next: Function
  on: Function
  container: HTMLElement
}

const keenSliderCarousel = (delay: number, onDoneOnce?: Function) => (slider: Slider) => {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;
  let doneOnce: boolean | undefined = false;

  const clearNextTimeout = () => {
    clearTimeout(timeout);
  }

  const nextTimeout = () => {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, delay);
  }


  const onMouseOver = () => {
    mouseOver = true;
    clearNextTimeout();
  }

  const onMouseOut = () => {
    mouseOver = false;
    nextTimeout()
  }

  const onStart = () => {
    slider.container.addEventListener("mouseover", onMouseOver);
    slider.container.addEventListener("mouseout", onMouseOut);
    slider.on("animationEnded", nextTimeout);
    nextTimeout();
  }

  const onStop = () => {
    slider.container.removeEventListener("mouseover", onMouseOver);
    slider.container.removeEventListener("mouseout", onMouseOut)
    slider.on("animationEnded", nextTimeout, true);
    clearNextTimeout();
  }

  slider.on("created", onStart);
  slider.on("destroyed", onStop);
  slider.on("stopped", onStop);
  slider.on("resumed", onStart);

  const onSlideChanged = (slider: KeenSliderInstance) => {
    if (doneOnce === true && onDoneOnce) {
      onDoneOnce();
      doneOnce = undefined;
    }
    const current = slider.track.details.rel;
    const lastSlideIndex = slider.track.details.slides.length - 1;
    if (doneOnce === false && current === lastSlideIndex) {
      doneOnce = true;
    }
  }

  slider.on("slideChanged", onSlideChanged)
}

export default keenSliderCarousel;