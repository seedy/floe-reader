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
import H2 from "components/Typography/H2";
import Flex from "components/Flex";

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
        <Content className={styles.content}>
          <Title className={styles.title} asChild>
            <H2>{title}</H2>
          </Title>
          {description && (
            <Description className={styles.description} asChild>
              <div>{description}</div>
            </Description>
          )}
          <Flex className={styles.actions}>
            <Action className={styles.action} asChild>
              <Button variant="contained">OK</Button>
            </Action>
          </Flex>
        </Content>
      </Portal>
    </Root>
  );
};

export default DialogConfirm;
