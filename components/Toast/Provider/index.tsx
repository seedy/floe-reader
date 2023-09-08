import { Provider, Viewport } from "@radix-ui/react-toast";
import Toast from "components/Toast";
import { ReactNode, SyntheticEvent, useState } from "react";
import styles from "components/Toast/Provider/Provider.module.css";
import trpc from "helpers/trpc";
import isTRPCClientError from "helpers/isTRPCClientError";

interface ToastProviderProps {
  children?: ReactNode;
}

type ToastData = { title: string, children: ReactNode, variant: 'success' | 'error' }

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const contactMutation = trpc.contact.useMutation();
  const shareMutation = trpc.share.useMutation();

  const addToast = (toast: ToastData) => setToasts((prev) => [...prev, toast]);

  const onSubmit = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    const email = target?.email?.value ?? "";
    if (email.trim().length === 0) {
      throw new Error('test')
    }
    const submitter = e?.nativeEvent?.submitter
    const mutation = (submitter as { name?: string })?.name === "contact" ? contactMutation : shareMutation
    try {
      const { success } = await mutation.mutateAsync({ email });
      addToast({ variant: 'success', title: success, children: email });
    } catch (error) {
      if (isTRPCClientError(error)) {
        return addToast({ variant: 'error', title: 'An error has occurred', children: error.message });
      }
      throw error
    }
  };

  return (
    <Provider swipeDirection="right">
      <form onSubmit={onSubmit}>{children}</form>
      {toasts.map(({ title, variant, children }, index) => (
        <Toast title={title} variant={variant} key={index}>
          {children}
        </Toast>
      ))}
      <Viewport className={styles.viewport} />
    </Provider>
  );
};

export default ToastProvider;
