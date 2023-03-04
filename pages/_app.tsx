import "./globals.css";
import type { AppProps } from "next/app";
import SWRConfigProvider from "components/Context/SWRConfigProvider";
import trpc from "helpers/trpc";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfigProvider>
      <Component {...pageProps} />
    </SWRConfigProvider>
  );
}

export default trpc.withTRPC(MyApp);
