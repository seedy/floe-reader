"use client";
import SlotMotion from "components/Slot/Motion";
import { useReducedMotion, useScroll, useTransform } from "motion/react";
import { type ReactNode, useRef } from "react";

interface BannerTagsMotionViewTimelineProps {
  children: ReactNode;
}
const BannerTagsMotionViewTimeline = ({
  children,
}: BannerTagsMotionViewTimelineProps) => {
  const prefersReducedMotion = useReducedMotion();
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: scrollTarget,
  });
  const translateX = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const style = prefersReducedMotion ? {} : { translateX };

  return (
    <SlotMotion style={style} ref={scrollTarget}>
      {children}
    </SlotMotion>
  );
};

export default BannerTagsMotionViewTimeline;
