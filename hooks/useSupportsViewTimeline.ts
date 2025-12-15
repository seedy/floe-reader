import { useEffect, useState } from "react";

const useSupportsViewTimeline = () => {
  const [supportsViewTimeline, setSupportsViewTimeline] = useState(false);
  useEffect(() => {
    // this is a browser only api, this implementation avoids hydration mismatch
    setSupportsViewTimeline(CSS.supports("animation-timeline", "view()"));
  }, []);

  return supportsViewTimeline;
};

export default useSupportsViewTimeline;
