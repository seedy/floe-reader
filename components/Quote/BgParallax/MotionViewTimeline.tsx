"use client";
import SlotMotion from "components/Slot/Motion";
import { useScroll, useTransform } from "motion/react";
import { type ReactNode, useRef } from "react";

interface BgParallaxMotionViewTimelineProps {
  children: ReactNode;
}
const BgParallaxMotionViewTimeline = ({
  children,
}: BgParallaxMotionViewTimelineProps) => {
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
    target: scrollTarget,
  });
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const style = { opacity, translateY };

  return (
    <SlotMotion style={style} ref={scrollTarget}>
      {children}
    </SlotMotion>
  );
};

export default BgParallaxMotionViewTimeline;
