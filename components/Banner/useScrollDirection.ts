"use client";
import useThrottle from "hooks/useThrottle";
import { useLayoutEffect, useRef, useState } from "react";

type Direction = "forward" | "backward";

const useScrollDirection = () => {
	const prevScrollY = useRef(0);
	const [direction, setDirection] = useState<Direction>("forward");
	const throttleScroll = useThrottle(200);

	useLayoutEffect(() => {
		const onScroll = () => {
			const scrollY = Math.max(window.scrollY, 0);
			const { current } = prevScrollY;
			const previousScrollY = Math.max(current, 0);
			if (previousScrollY < scrollY) {
				setDirection("forward");
			} else {
				setDirection("backward");
			}
			prevScrollY.current = scrollY;
		};
		const throttledOnScroll = throttleScroll(onScroll);
		document.addEventListener("scroll", throttledOnScroll);

		return () => {
			document.removeEventListener("scroll", onScroll);
		};
	}, [prevScrollY, setDirection, throttleScroll]);

	return direction;
};

export default useScrollDirection;
