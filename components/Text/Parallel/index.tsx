import { FloatingParagraph } from "components/Text/Parallel/styled";
import { ComponentProps, useCallback, useEffect, useRef } from "react";

interface TextParallelProps extends ComponentProps<typeof FloatingParagraph> {
  target: HTMLElement;
  parent: HTMLElement | null;
}
const TextParallel = ({ target, parent, children }: TextParallelProps) => {
  const ref = useRef(null);
  const observer = useRef<ResizeObserver>();

  const onUpdate = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null && target !== null) {
        node.style.top = `${target.offsetTop}px`;
      }
    },
    [target]
  );

  useEffect(() => {
    if (ref.current) {
      onUpdate(ref.current);
      observer.current = new ResizeObserver((entries) => {
        const entry = entries?.[0];
        if (entry) {
          onUpdate(ref.current);
        }
      });
    }
  }, [ref, onUpdate, observer]);

  useEffect(() => {
    if (observer.current && parent) {
      observer.current.observe(parent);
    }
  }, [parent, observer]);

  return <FloatingParagraph ref={ref}>{children}</FloatingParagraph>;
};

export default TextParallel;
