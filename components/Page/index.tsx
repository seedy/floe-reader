import styles from "components/Page/Page.module.css";
import { ComponentProps, ReactNode } from "react";
import Box from "components/Box";
import classNames from "helpers/classNames";

// CONSTANTS
interface PageProps extends ComponentProps<typeof Box> {
  children?: ReactNode;
}
const Page = ({ children, className, ...props }: PageProps) => {
  return (
    <Box className={classNames(styles.root, className)} {...props}>
      {children}
    </Box>
  );
};

export default Page;
