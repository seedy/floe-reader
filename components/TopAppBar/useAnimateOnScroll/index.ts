import { RefObject, useEffect, useLayoutEffect, useRef } from "react";

// HELPERS
const hideTopAppBar = (node: HTMLElement | null | undefined) => {
    if (node) {
        node.style.height = '0%';
    }
}

const showTopAppBar = (node: HTMLElement | null | undefined) => {
    if (node) {
        node.style.height = '100%';
    }
}

// HOOKS
const useAnimateOnScroll = (topAppBarRef: RefObject<HTMLElement>, targetRef?: RefObject<HTMLElement>) => {
    const observerRef = useRef<IntersectionObserver>();

    useLayoutEffect(() => {
        const { current } = topAppBarRef;
        if (!targetRef) {
            showTopAppBar(current);
        }
    }, [topAppBarRef, targetRef]);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            const [entry] = entries;
            console.log('entry', entry)
            const { isIntersecting, boundingClientRect } = entry;
            const { current: topAppBar } = topAppBarRef;
            const isOnTopOfViewport = boundingClientRect.top < 0;
            if (isOnTopOfViewport && !isIntersecting) {
                showTopAppBar(topAppBar);
            } else {
                hideTopAppBar(topAppBar);
            }
        }, { threshold: 0, rootMargin: '0% 0% -100% 0%' })
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        }
    }, [observerRef, topAppBarRef]);

    useEffect(() => {
        const { current: observer } = observerRef;
        const target = targetRef?.current;
        if (target && observer) {
            observer.observe(target);

            return () => {
                observer.unobserve(target);
            }
        }
    }, [targetRef, observerRef]);
}

export default useAnimateOnScroll;