"use client";

import { Provider, Viewport } from "@radix-ui/react-toast";
import Toast from "components/Toast";
import { ReactNode, createContext, useContext, useState } from "react";
interface ToastProviderProps {
	children?: ReactNode;
}

type ToastData = {
	title: string;
	children: ReactNode;
	variant: "success" | "error";
};

const ToastContext = createContext<((toast: ToastData) => void) | undefined>(
	undefined,
);

export const useToast = () => {
	const addToast = useContext(ToastContext);
	if (addToast === undefined) {
		throw new Error("useToast should be used within ToastProvider Context");
	}
	return addToast;
};

const ToastProvider = ({ children }: ToastProviderProps) => {
	const [toasts, setToasts] = useState<ToastData[]>([]);

	const addToast = (toast: ToastData) => {
		setToasts((prev) => [...prev, toast]);
	};

	return (
		<Provider swipeDirection="right">
			<ToastContext.Provider value={addToast}>{children}</ToastContext.Provider>
			{toasts.map(({ title, variant, children }, index) => (
				<Toast title={title} variant={variant} key={index}>
					{children}
				</Toast>
			))}
			<Viewport className="fixed right-0 top-0 z-12000 m-0 flex w-[clamp(12rem,33vw,24rem)] list-none flex-col gap-2.5 p-5 outline-hidden" />
		</Provider>
	);
};

export default ToastProvider;
