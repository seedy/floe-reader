import { ComponentProps } from "react";
import styles from "components/Typography/H3/H3.module.css";

interface H3Props extends ComponentProps<"h3"> {}

const H3 = ({ children,className, ...props }: H3Props) => (
  <h3 className={`${styles.root} ${className}`} {...props}>
    {children}
  </h3>
);

export default H3;
