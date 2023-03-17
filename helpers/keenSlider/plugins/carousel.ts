import { KeenSliderInstance } from "keen-slider/react";

interface CustomKeenSliderInstance extends KeenSliderInstance {
  on: (name: string, cb: Function, remove?: boolean) => void
  emit: (name: string) => void
}

const keenSliderCarousel = (delay: number, onDoneOnce?: Function) => (slider: KeenSliderInstance) => {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;
  let doneOnce: boolean | undefined = false;

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      return (slider as CustomKeenSliderInstance).emit("in")
    }
    (slider as CustomKeenSliderInstance).emit("out");
  })

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

  const onCreated = (instance: KeenSliderInstance) => {
    observer.observe(instance.container)
  }

  const onIn = (instance: KeenSliderInstance) => {
    instance.container.addEventListener("mouseover", onMouseOver);
    instance.container.addEventListener("mouseout", onMouseOut);
    instance.on("animationEnded", nextTimeout);
    nextTimeout();
  }

  const onOut = (instance: KeenSliderInstance) => {
    instance.container.removeEventListener("mouseover", onMouseOver);
    instance.container.removeEventListener("mouseout", onMouseOut)
    instance.on("animationEnded", nextTimeout, true);
    clearNextTimeout();
  }

  const onResume = (instance: KeenSliderInstance) => {
    onIn(instance);
    observer.observe(instance.container);
  }

  const onStop = (instance: KeenSliderInstance) => {
    onOut(instance);
    observer.unobserve(slider.container)
  }

  slider.on("created", onCreated);
  slider.on("destroyed", onStop);
  (slider as CustomKeenSliderInstance).on("in", onIn);
  (slider as CustomKeenSliderInstance).on("out", onOut);
  (slider as CustomKeenSliderInstance).on("stopped", onStop);
  (slider as CustomKeenSliderInstance).on("resumed", onResume);

  const onSlideChanged = () => {
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