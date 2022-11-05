import "../styles/globals.css";
import type { AppProps } from "next/app";
import SWRConfigProvider from "components/Context/SWRConfigProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfigProvider>
      <Component {...pageProps} />
    </SWRConfigProvider>
  );
}

export default MyApp;
