import styles from "components/Typography/H2/H2.module.css";
import classNames from "helpers/classNames";
import { ComponentProps } from "react";

interface H2Props extends ComponentProps<"h2"> {}

const H2 = ({ children, className, ...props }: H2Props) => (
  <h2 className={classNames(styles.root, className)} {...props}>
    {children}
  </h2>
);

export default H2;
