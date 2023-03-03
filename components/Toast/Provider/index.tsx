import { Provider, Viewport } from "@radix-ui/react-toast";
import Toast from "components/Toast";
import { ReactNode, SyntheticEvent, useState } from "react";
import styles from "components/Toast/Provider/Provider.module.css";

interface ToastProviderProps {
  children?: ReactNode;
}
const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<string[]>([]);

  const addToast = (toast: string) => setToasts((prev) => [...prev, toast]);

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    const email = target.email.value;
    try {
      await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email
        })
      })
      addToast(email);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Provider swipeDirection="right">
      <form onSubmit={onSubmit}>{children}</form>
      {toasts.map((email, index) => (
        <Toast title="Email envoyé à" key={index}>
          {email}
        </Toast>
      ))}
      <Viewport className={styles.viewport} />
    </Provider>
  );
};

export default ToastProvider;
