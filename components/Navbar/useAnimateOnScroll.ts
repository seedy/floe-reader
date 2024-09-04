import { MutableRefObject, useEffect, useRef } from "react";

// CONSTANTS
const THRESHOLD = 64; // 4rem
const WINDOW = typeof window !== "undefined" ? window : null;

// HELPERS
const hide = (node: HTMLElement | null | undefined) => {
	if (node) {
		if (node.style.height !== "0%") {
			node.style.height = "0%";
		}
	}
};

const show = (node: HTMLElement | null | undefined) => {
	if (node) {
		if (node.style.height !== "100%") {
			node.style.height = "100%";
		}
	}
};

const trigger = (
	store: MutableRefObject<number | undefined>,
	target: HTMLElement | null | undefined,
	cumulatedScrollUp: MutableRefObject<number>,
) => {
	const previous = store.current;
	if (WINDOW) {
		store.current = WINDOW.scrollY;
	}
	const current = store.current;
	if (current === undefined) {
		return;
	}
	if (previous === undefined) {
		return show(target);
	}
	const isGoingUp = current < previous;
	const upDiff = isGoingUp ? cumulatedScrollUp.current + previous - current : 0;
	cumulatedScrollUp.current = upDiff;
	const showOrHide = current < THRESHOLD || upDiff > THRESHOLD;
	return showOrHide ? show(target) : hide(target);
};

// HOOKS
const useAnimateOnScroll = (targetRef: MutableRefObject<null>) => {
	const scrollStore = useRef<number | undefined>();
	const cumulatedScrollUp = useRef(0);
	useEffect(() => {
		const handleScroll = () =>
			trigger(scrollStore, targetRef.current, cumulatedScrollUp);
		trigger(scrollStore, targetRef.current, cumulatedScrollUp);
		WINDOW?.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			WINDOW?.removeEventListener("scroll", handleScroll);
		};
	}, [targetRef, scrollStore, cumulatedScrollUp]);
};

export default useAnimateOnScroll;
