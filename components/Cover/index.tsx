import { ComponentProps, ReactNode } from "react";
import styles from "components/Cover/Cover.module.css";
import classNames from "helpers/classNames";

interface CoverProps extends ComponentProps<"div"> {
  children?: ReactNode;
}
const Cover = ({ children, className, ...props }: CoverProps) => (
  <div className={classNames(styles.root, className)} {...props}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Cover;
