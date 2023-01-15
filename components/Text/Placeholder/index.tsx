import React, { ComponentProps } from "react";
import styles from "components/Text/Placeholder/Placeholder.module.css";

interface TextPlaceholderProps extends ComponentProps<"p"> {
  words: number;
}

const TextPlaceholder = ({
  words,
  className,
  ...props
}: TextPlaceholderProps) => {
  const text = Array(words).fill("···");
  return (
    <p className={`${styles.root} ${className}`} {...props}>
      {text}
    </p>
  );
};

export default TextPlaceholder;
