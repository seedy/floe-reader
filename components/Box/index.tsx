import { ComponentProps } from "react";
import styles from "components/Box/Box.module.css";

interface BoxProps extends ComponentProps<"div"> {}

const Box = (props: BoxProps) => <div className={styles.root} {...props} />;

export default Box;
