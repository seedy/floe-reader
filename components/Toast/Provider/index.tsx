import { Provider, Viewport } from "@radix-ui/react-toast";
import Toast from "components/Toast";
import { ReactNode, SyntheticEvent, useState } from "react";
import styles from "components/Toast/Provider/Provider.module.css";
import { Data } from "pages/api/email";

interface ToastProviderProps {
  children?: ReactNode;
}

type ToastData = { title: string, children: ReactNode, variant: 'success' | 'error' }

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (toast: ToastData) => setToasts((prev) => [...prev, toast]);

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    const email = target.email.value;
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email
        })
      });
      const result = await response.json() as Data;
      const [variant, title] = Object.entries(result)?.[0];
      if (variant === 'success' || variant === 'error') {
        addToast({ variant, title, children: email });
      }
    } catch (e) {
      console.log(e);
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
