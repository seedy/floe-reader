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
) => {
	const previous = store.current;
	if (WINDOW) {
		store.current = WINDOW.scrollY;
	}
	const current = store.current;
	if (current === undefined || previous === undefined) {
		return;
	}
	const showOrHide = current > THRESHOLD && current > previous;
	return showOrHide ? show(target) : hide(target);
};

// HOOKS
const useAnimateOnScroll = (targetRef: MutableRefObject<null>) => {
	const scrollStore = useRef<number | undefined>();
	useEffect(() => {
		const handleScroll = () => trigger(scrollStore, targetRef.current);
		trigger(scrollStore, targetRef.current);
		WINDOW?.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			WINDOW?.removeEventListener("scroll", handleScroll);
		};
	}, [targetRef, scrollStore]);
};

export default useAnimateOnScroll;
