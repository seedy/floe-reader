import "./globals.css";
import type { AppProps } from "next/app";
import SWRConfigProvider from "components/Context/SWRConfigProvider";
import trpc from "helpers/trpc";
import ToastProvider from "components/Toast/Provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfigProvider>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </SWRConfigProvider>
  );
}

export default trpc.withTRPC(MyApp);
