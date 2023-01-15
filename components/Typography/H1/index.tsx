import styles from "components/Typography/H1/H1.module.css";
import { ComponentProps } from "react";

interface H1Props extends ComponentProps<"h1"> {}

const H1 = ({ children, ...props }: H1Props) => (
  <h1 className={styles.root} {...props}>
    {children}
  </h1>
);

export default H1;
