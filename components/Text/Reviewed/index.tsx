import Calc from "components/Calc";
import TextPlaceholder from "components/Text/Placeholder";
import {
  Content,
  Correction,
  Layer,
  Review,
} from "components/Text/Reviewed/styled";
import { ComponentProps } from "react";

interface TextReviewedProps extends ComponentProps<typeof TextPlaceholder> {}

const TextReviewed = ({ words }: TextReviewedProps) => {
  const text = Array(words)
    .fill("...")
    .map((char, index) => {
      if (index % 30 === 0) {
        return (
          <>
            <Correction>/</Correction>
            {char}
          </>
        );
      }
      return char;
    });
  return (
    <Calc>
      <Content words={words} />
      <Layer>
        <Review>{text}</Review>
      </Layer>
    </Calc>
  );
};

export default TextReviewed;
