import { RefObject, useEffect, useRef, useState } from "react";

interface useContainerIntersectingProps {
	container?: RefObject<HTMLElement | null>;
}
export const useContainerIntersecting = ({
	container,
}: useContainerIntersectingProps) => {
	const [intersecting, setIntersecting] = useState(true);
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		observerRef.current = new IntersectionObserver((entries) => {
			if (entries.some(({ isIntersecting }) => isIntersecting)) {
				setIntersecting(true);
				return;
			}
			setIntersecting(false);
		});

		return () => {
			observerRef.current?.disconnect();
		};
	}, [setIntersecting]);

	useEffect(() => {
		const target = container?.current;
		if (target) {
			observerRef.current?.observe(target);
			return () => {
				observerRef.current?.unobserve(target);
			};
		}
	}, [container]);

	return intersecting;
};
