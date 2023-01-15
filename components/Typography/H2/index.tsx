import styles from "components/Typography/H2/H2.module.css";
import { ComponentProps } from "react";

interface H2Props extends ComponentProps<"h2"> {}

const H2 = ({ children, ...props }: H2Props) => (
  <h2 className={styles.root} {...props}>
    {children}
  </h2>
);

export default H2;
