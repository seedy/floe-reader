import { ComponentProps, ReactNode } from "react";
import styles from "components/Root/Root.module.css";
import classNames from "helpers/classNames";
import { Lora } from "next/font/google"

const lora = Lora({ subsets: ['latin'], style: ['normal'] })

interface RootProps extends ComponentProps<"div"> {
  children?: ReactNode;
}
const Root = ({ children, ...props }: RootProps) => (
  <div className={classNames(styles.root, lora.className)} {...props}>
    {children}
  </div>
);

export default Root;
