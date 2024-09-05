import { useEffect, useState } from "react";

const useSupportsViewTimeline = () => {
	const [supportsViewTimeline, setSupportsViewTimeline] = useState(false);
	useEffect(() => {
		setSupportsViewTimeline(CSS.supports("animation-timeline", "view()"));
	}, []);

	return supportsViewTimeline;
};

export default useSupportsViewTimeline;
