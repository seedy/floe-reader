import Quote from "components/Quote";
import cn from "helpers/cn";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import {
  Children,
  type ComponentProps,
  createContext,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

// HELPERS
const getWidthOverflow = (element: HTMLElement) => {
  return element.scrollWidth > element.offsetWidth;
};

// CONTEXT
const SliderOverflowingContext = createContext<boolean | null>(null);

// HOOKS
export const useSliderOverflowingContext = () => {
  const context = useContext(SliderOverflowingContext);

  if (context === null) {
    throw new Error(
      "useSliderOverflowingContext must be used within a SliderOverflowingContextProvider",
    );
  }
  return context;
};

// COMPONENTS
const QuoteSlider = ({ children, className }: ComponentProps<typeof Quote>) => {
  const [loaded, setLoaded] = useState(false);
  const [isOverflowing, setOverflowing] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const [ksRef] = useKeenSlider({
    breakpoints: {
      "(width >= 64rem)": {
        disabled: true,
      },
    },
    created() {
      setLoaded(true);
    },
    slides: {
      number: Children.count(children),
      perView: "auto" as const,
      spacing: 16,
    },
  });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      const isSomeEntryOverflowing = entries.some((entry) => {
        return getWidthOverflow(entry.target as HTMLElement);
      });
      setOverflowing(isSomeEntryOverflowing);
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <SliderOverflowingContext.Provider value={loaded && isOverflowing}>
      <Quote
        ref={(node) => {
          if (!node) return;
          ksRef(node);
          ref.current = node;
        }}
        className={cn(
          "keen-slider overflow-hidden",
          "lg:overflow-visible",
          !loaded && "gap-4",
          className,
        )}
      >
        {children}
      </Quote>
    </SliderOverflowingContext.Provider>
  );
};

export default QuoteSlider;
