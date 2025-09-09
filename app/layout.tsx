import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import ToastProvider from "components/Toast/Provider";
import { MAIN_CONTENT } from "constants/links";
import { env } from "env.mjs";
import { LazyMotion, domAnimation } from "framer-motion";
import cn from "helpers/cn";
import { Lora } from "next/font/google";
import { Urbanist } from "next/font/google";
import Script from "next/script";

const lora = Lora({
	subsets: ["latin"],
	style: ["normal"],
	variable: "--font-lora",
});
const urbanist = Urbanist({
	subsets: ["latin"],
	style: ["normal"],
	variable: "--font-urbanist",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://floegaubert.com"),
	title: "Floé Gaubert - Photographe, vidéaste et monteuse vidéo",
	description: "Site vitrine",
	openGraph: {
		images: "/opengraph-image.jpg",
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="fr" className={cn(lora.variable, urbanist.variable)}>
			<body className="bg-background">
				<ToastProvider>
					<Navbar />
					<LazyMotion features={domAnimation}>
						<main id={MAIN_CONTENT.replace("#", "")} className="mb-32 lg:mt-16">
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
