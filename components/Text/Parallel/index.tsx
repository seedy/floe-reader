import { FloatingParagraph } from "components/Text/Parallel/styled";
import { ComponentProps, useCallback } from "react";

interface TextParallelProps extends ComponentProps<typeof FloatingParagraph> {
  target: HTMLElement;
}
const TextParallel = ({ target, children }: TextParallelProps) => {
  const onMount = useCallback((node: HTMLDivElement | null) => {
    if (node !== null && target !== null) {
      node.style.top = `${target.offsetTop}px`;
    }
  }, [target]);

  return <FloatingParagraph ref={onMount}>{children}</FloatingParagraph>;
};

export default TextParallel;
