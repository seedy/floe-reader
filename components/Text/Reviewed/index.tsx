import { VariantProps } from "@stitches/react";
import TextParallel from "components/Text/Parallel";
import {
  Root,
  Content,
  Correction,
  LineNote,
  CorrectionTextPlaceholder
} from "components/Text/Reviewed/styled";
import { LOREM } from "constants/lorem";
import pxToRem from "helpers/pxToRem";
import { ComponentProps, Fragment } from "react";
import useRefs from "hooks/useRefs";

interface TextReviewedProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {
  words: number;
  on: ComponentProps<typeof Correction>['on'];
  delay: ComponentProps<typeof Correction>["delay"];
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
                  <Correction key={`${index}-${charIndex}`} ref={onRef} on={on} delay={delay}>
                    /
                  </Correction>
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
    <Root css={{ width, height }} {...props}>
      <Content>{text}</Content>
      <LineNote on={on} delay={delay}>
        {refs.map((ref, index) => (
          <TextParallel key={index} target={ref}>
            <CorrectionTextPlaceholder words={1} />
          </TextParallel>
        ))}
      </LineNote>
    </Root>
  );
};

export default TextReviewed;
