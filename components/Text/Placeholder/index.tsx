import React, { ComponentProps } from "react";
import { Root } from "components/Text/Placeholder/styled";
import { VariantProps } from "@stitches/react";

interface TextPlaceholderProps
  extends VariantProps<typeof Root>,
    ComponentProps<typeof Root> {
  words: number;
}

const TextPlaceholder = ({ words, ...props }: TextPlaceholderProps) => {
  const text = Array(words).fill("···");
  return <Root {...props}>{text}</Root>;
};

export default TextPlaceholder;
