import { useCallback, useEffect, useRef } from "react";

const useThrottle = <T>(interval: number) => {
	const waitRef = useRef(false);
	const timeout = useRef<NodeJS.Timeout>();

	useEffect(
		() => () => {
			if (timeout.current) {
				clearTimeout(timeout.current);
			}
		},
		[timeout],
	);

	const wrapper = useCallback(
		(callback: (event: T) => void) => (event: T) => {
			if (waitRef.current) {
				return;
			}
			callback(event);
			waitRef.current = true;
			timeout.current = setTimeout(() => {
				waitRef.current = false;
			}, interval);
		},
		[interval],
	);

	return wrapper;
};

export default useThrottle;
