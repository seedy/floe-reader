import styles from "components/Typography/H1/H1.module.css";
import { ComponentProps } from "react";

interface H1Props extends ComponentProps<"h1"> {}

const H1 = ({ children, className, ...props }: H1Props) => (
  <h1 className={`${styles.root} ${className}`} {...props}>
    {children}
  </h1>
);

export default H1;
