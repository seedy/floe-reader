import TextParallel from "components/Text/Parallel";
import { LOREM } from "constants/lorem";
import { ComponentProps, Fragment, useRef } from "react";
import useRefs from "hooks/useRefs";
import Appear from "components/Animate/Appear";
import styles from "components/Text/Reviewed/Reviewed.module.css";
import Flex from "components/Flex";
import TextPlaceholder from "components/Text/Placeholder";

interface TextReviewedProps extends ComponentProps<typeof Flex> {
  words: number;
  on: ComponentProps<typeof Appear>["on"];
  delay: ComponentProps<typeof Appear>["delay"];
  width: string;
  height: string;
}

const TextReviewed = ({
  words,
  on,
  delay,
  width,
  height,
  ...props
}: TextReviewedProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [refs, onRef] = useRefs();
  const text = LOREM.split(" ")
    .slice(0, words)
    .map((word, index) => {
      if (index % 10 === 6) {
        return (
          <Fragment key={index}>
            {word.split("").map((char, charIndex) => (
              <Fragment key={`${index}-${charIndex}`}>
                {char}
                {charIndex % 6 === 3 && (
                  <Appear
                    className={styles.correction}
                    key={`${index}-${charIndex}`}
                    ref={onRef}
                    on={on}
                    delay={delay}
                  >
                    /
                  </Appear>
                )}
                {charIndex === word.length - 1 && " "}
              </Fragment>
            ))}
          </Fragment>
        );
      }
      return `${word} `;
    });
  return (
    <Flex
      ref={parentRef}
      className={styles.root}
      style={{ width, height }}
      {...props}
    >
      <p className={styles.content}>{text}</p>
      <Appear className={styles.lineNote} on={on} delay={delay}>
        {refs.map((ref, index) => (
          <TextParallel key={index} target={ref} parent={parentRef.current}>
            <TextPlaceholder
              className={styles.correctionTextPlaceholder}
              words={1}
            />
          </TextParallel>
        ))}
      </Appear>
    </Flex>
  );
};

export default TextReviewed;
