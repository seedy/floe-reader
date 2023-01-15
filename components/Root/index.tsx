import { ComponentProps, ReactNode } from "react";
import styles from "components/Root/Root.module.css";

interface RootProps extends ComponentProps<"div"> {
  children?: ReactNode;
}
const Root = ({ children, ...props }: RootProps) => (
  <div className={styles.root} {...props}>
    {children}
  </div>
);

export default Root;
