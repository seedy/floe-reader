import styles from "components/Dialog/Confirm/Confirm.module.scss";
import { ComponentProps, ReactNode, useId } from "react";
import classNames from "helpers/classNames";
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Action,
} from "@radix-ui/react-alert-dialog";
import Button from "components/Button";

interface DialogConfirmProps {
  children?: ReactNode;
  className: string;
  title: string;
  description?: ReactNode;
}
const DialogConfirm = ({
  children,
  className,
  title,
  description,
  ...props
}: DialogConfirmProps) => {
  return (
    <Root {...props}>
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <Overlay className={styles.overlay} />
        <Content tabIndex={-1} className={styles.content}>
          <Title>{title}</Title>
          {description && (
            <Description asChild>
              <div>{description}</div>
            </Description>
          )}
          <Action asChild>
            <Button variant="contained">OK</Button>
          </Action>
        </Content>
      </Portal>
    </Root>
  );
};

export default DialogConfirm;
