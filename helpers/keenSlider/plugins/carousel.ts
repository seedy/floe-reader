interface Slider {
  next: Function
  on: Function
  container: HTMLElement
}

const keenSliderCarousel = (delay: number) => (slider: Slider) => {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;
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
}

export default keenSliderCarousel;