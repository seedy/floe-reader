import styles from "components/Typography/Subtitle/Subtitle.module.css";
import classNames from "helpers/classNames";
import { ComponentProps } from "react";

interface SubtitleProps extends ComponentProps<"span"> {}

const Subtitle = ({ className, children, ...props }: SubtitleProps) => {
  return (
    <span className={classNames(styles.root, className)} {...props}>
      {children}
    </span>
  );
};

export default Subtitle;
