import styles from "components/Page/Page.module.css";
import { ComponentProps, ReactNode } from "react";
import Box from "components/Box";

// CONSTANTS
interface PageProps extends ComponentProps<typeof Box> {
  children?: ReactNode;
}
const Page = ({ children, ...props }: PageProps) => {
  return (
    <Box className={styles.root} {...props}>
      {children}
    </Box>
  );
};

export default Page;
