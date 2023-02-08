import { Cross2Icon } from "@radix-ui/react-icons";
import { Close, Description, Root, Title } from "@radix-ui/react-toast";
import { ElementRef, forwardRef, ReactNode } from "react";
import IconButton from "components/IconButton";
import styles from "components/Toast/Toast.module.scss";
import Flex from "components/Flex";

interface ToastProps {
  title: string;
  children?: ReactNode;
}
const Toast = forwardRef<ElementRef<typeof Root>, ToastProps>(
  ({ title, children, ...props }, forwardedRef) => {
    return (
      <Root className={styles.root} ref={forwardedRef} {...props}>
        <Flex direction="column">
          <Title className={styles.title}>{title}</Title>
          <Description className={styles.description}>{children}</Description>
        </Flex>
        <Close asChild aria-label="Close">
          <IconButton type="button">
            <Cross2Icon />
          </IconButton>
        </Close>
      </Root>
    );
  }
);

Toast.displayName = "Toast";

export default Toast;
