import "./globals.css";
import type { AppProps } from "next/app";
import SWRConfigProvider from "components/Context/SWRConfigProvider";
import trpc from "helpers/trpc";
import ToastProvider from "components/Toast/Provider";
import { HighlightInit } from "@highlight-run/next/client";
import { env } from "env.mjs"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfigProvider>
      <ToastProvider>
        <HighlightInit
          projectId={env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID}
          tracingOrigins
          networkRecording={{
            enabled: true,
            recordHeadersAndBody: true
          }}
        />
        <Component {...pageProps} />
      </ToastProvider>
    </SWRConfigProvider>
  );
}

export default trpc.withTRPC(MyApp);
