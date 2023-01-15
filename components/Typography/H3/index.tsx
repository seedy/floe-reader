import { ComponentProps } from "react";
import styles from "components/Typography/H3/H3.module.css";

interface H3Props extends ComponentProps<"h3"> {}

const H3 = ({ children, ...props }: H3Props) => (
  <h3 className={styles.root} {...props}>
    {children}
  </h3>
);

export default H3;
