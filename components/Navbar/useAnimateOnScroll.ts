import { type RefObject, useEffect, useRef } from "react";

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
  store: RefObject<number | null>,
  target: HTMLElement | null | undefined,
  cumulatedScrollUpRef: RefObject<number>,
) => {
  const previous = store.current;
  if (WINDOW) {
    store.current = WINDOW.scrollY;
  }
  const current = store.current;
  if (current === null) {
    return;
  }
  if (previous === null) {
    return show(target);
  }
  const isGoingUp = current < previous;
  const upDiff = isGoingUp
    ? cumulatedScrollUpRef.current + previous - current
    : 0;
  cumulatedScrollUpRef.current = upDiff;
  const showOrHide = current < THRESHOLD || upDiff > THRESHOLD;
  return showOrHide ? show(target) : hide(target);
};

// HOOKS
const useAnimateOnScroll = (targetRef: RefObject<HTMLElement | null>) => {
  const scrollStoreRef = useRef<number | null>(null);
  const cumulatedScrollUpRef = useRef(0);
  useEffect(() => {
    const handleScroll = () =>
      trigger(scrollStoreRef, targetRef.current, cumulatedScrollUpRef);
    trigger(scrollStoreRef, targetRef.current, cumulatedScrollUpRef);
    WINDOW?.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      WINDOW?.removeEventListener("scroll", handleScroll);
    };
  }, [targetRef]);
};

export default useAnimateOnScroll;
