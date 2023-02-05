import styles from "components/Input/Input.module.scss";
import Box from "components/Box";
import classNames from "helpers/classNames";
import { ComponentProps, useId } from "react";

// COMPONENTS
export interface InputProps extends ComponentProps<"input"> {
  label: string;
}

const Input = ({ className, label, placeholder, id, ...props }: InputProps) => {
  const fallbackId = useId();

  const finalId = id ?? fallbackId;

  return (
    <Box className={styles.root}>
      <input
        id={finalId}
        type="text"
        placeholder={placeholder}
        className={classNames(styles.input, className)}
        {...props}
      />
      <label className={styles.label} htmlFor={finalId}>
        {label}
      </label>
    </Box>
  );
};

export default Input;
