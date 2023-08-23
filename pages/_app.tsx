import "./globals.css";
import type { AppProps } from "next/app";
import SWRConfigProvider from "components/Context/SWRConfigProvider";
import trpc from "helpers/trpc";
import ToastProvider from "components/Toast/Provider";
import { HighlightInit } from "@highlight-run/next/client";
import { env } from "env.mjs"
import { Frank_Ruhl_Libre } from "next/font/google"

const frankRuhlLibre = Frank_Ruhl_Libre({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={frankRuhlLibre.className}>
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
    </div>
  );
}

export default trpc.withTRPC(MyApp);
