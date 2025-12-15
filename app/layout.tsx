import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import ToastProvider from "components/Toast/Provider";
import { MAIN_CONTENT } from "constants/links";
import { env } from "env.mjs";
import cn from "helpers/cn";
import { domAnimation, LazyMotion } from "motion/react";
import { Lora, Urbanist } from "next/font/google";
import Script from "next/script";

const lora = Lora({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-lora",
});
const urbanist = Urbanist({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  description: "Site vitrine",
  metadataBase: new URL("https://floegaubert.com"),
  openGraph: {
    images: "/opengraph-image.jpg",
  },
  title: "Floé Gaubert - Photographe, vidéaste et monteuse",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={cn(lora.variable, urbanist.variable)}>
      <body className="flex min-h-svh flex-col bg-background">
        <ToastProvider>
          <Navbar />
          <LazyMotion features={domAnimation}>
            <main
              id={MAIN_CONTENT.replace("#", "")}
              className="mb-32 flex grow flex-col lg:mt-16"
            >
              {children}
            </main>
          </LazyMotion>
          <Footer />
        </ToastProvider>
        <SpeedInsights />
      </body>
      <Script
        defer
        src="/analytics/script.js"
        data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
    </html>
  );
}
