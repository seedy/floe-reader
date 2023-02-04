import styles from "components/Input/Input.module.css";
import classNames from "helpers/classNames";
import { ComponentProps } from "react";

// COMPONENTS
export interface InputProps extends ComponentProps<"input"> {}

const Input = ({ className, ...props }: InputProps) => (
  <input
    type="text"
    className={classNames(styles.root, className)}
    {...props}
  />
);

export default Input;
