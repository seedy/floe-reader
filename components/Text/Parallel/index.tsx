import { ComponentProps, useCallback, useEffect, useRef } from "react";
import styles from "components/Text/Parallel/Parallel.module.css";
interface TextParallelProps extends ComponentProps<"div"> {
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

  return (
    <div className={styles.floating} ref={ref}>
      {children}
    </div>
  );
};

export default TextParallel;
