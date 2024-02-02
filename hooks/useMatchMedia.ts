import { useLayoutEffect, useRef, useState } from "react";

const useMatchMedia = (mq: string) => {
	const media = useRef(matchMedia(mq));
	const [matches, setMatches] = useState(media.current.matches);
	useLayoutEffect(() => {
		const { current } = media;
		const onMediaChange = (e: MediaQueryListEvent) => {
			setMatches(e.matches);
		};
		current.addEventListener("change", onMediaChange);
		return () => {
			current.removeEventListener("change", onMediaChange);
		};
	}, [media, setMatches]);

	return matches;
};

export default useMatchMedia;
