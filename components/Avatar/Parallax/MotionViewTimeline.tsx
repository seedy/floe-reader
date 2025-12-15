"use client";
import SlotMotion from "components/Slot/Motion";
import { useReducedMotion, useScroll, useTransform } from "motion/react";
import { type ReactNode, useRef } from "react";

interface AvatarParallaxMotionViewTimelineProps {
  children: ReactNode;
}
const AvatarParallaxMotionViewTimeline = ({
  children,
}: AvatarParallaxMotionViewTimelineProps) => {
  const prefersReducedMotion = useReducedMotion();
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end end"],
    target: scrollTarget,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  const style = prefersReducedMotion ? {} : { scale };

  return (
    <SlotMotion style={style} ref={scrollTarget}>
      {children}
    </SlotMotion>
  );
};

export default AvatarParallaxMotionViewTimeline;
