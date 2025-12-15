"use client";
import { useLayoutEffect, useRef, useState } from "react";

type Direction = "forward" | "backward";

const useScrollDirection = () => {
  const prevScrollYRef = useRef(0);
  const [direction, setDirection] = useState<Direction>("forward");

  useLayoutEffect(() => {
    const onScroll = () => {
      const scrollY = Math.max(window.scrollY, 0);
      const { current } = prevScrollYRef;
      const previousScrollY = Math.max(current, 0);
      if (previousScrollY < scrollY) {
        setDirection("forward");
      } else {
        setDirection("backward");
      }
      prevScrollYRef.current = scrollY;
    };
    document.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return direction;
};

export default useScrollDirection;
