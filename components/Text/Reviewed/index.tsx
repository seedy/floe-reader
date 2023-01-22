import TextParallel from "components/Text/Parallel";
import { LOREM } from "constants/lorem";
import { ComponentProps, Fragment, useRef } from "react";
import useRefs from "hooks/useRefs";
import Appear from "components/Animate/Appear";
import styles from "components/Text/Reviewed/Reviewed.module.css";
import Flex from "components/Flex";
import TextPlaceholder from "components/Text/Placeholder";
import AppearOnCurrent from "components/Pages/AppearOnCurrent";

interface TextReviewedProps extends ComponentProps<typeof Flex> {
  words: number;
  delay: ComponentProps<typeof Appear>["delay"];
  width: string;
  height: string;
}

const TextReviewed = ({
  words,
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
                  <AppearOnCurrent
                    className={styles.correction}
                    key={`${index}-${charIndex}`}
                    ref={onRef}
                    delay={delay}
                  >
                    /
                  </AppearOnCurrent>
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
      <AppearOnCurrent className={styles.lineNote} delay={delay}>
        {refs.map((ref, index) => (
          <TextParallel key={index} target={ref} parent={parentRef.current}>
            <TextPlaceholder
              className={styles.correctionTextPlaceholder}
              words={1}
            />
          </TextParallel>
        ))}
      </AppearOnCurrent>
    </Flex>
  );
};

export default TextReviewed;
