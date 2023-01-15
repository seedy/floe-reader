import { ComponentProps, ReactNode } from "react";
import styles from "components/Cover/Cover.module.css";

interface CoverProps extends ComponentProps<"div"> {
  children?: ReactNode;
}
const Cover = ({ children, ...props }: CoverProps) => (
  <div className={styles.root} {...props}>
    <div className={styles.content}>{children}</div>
  </div>
);

export default Cover;
