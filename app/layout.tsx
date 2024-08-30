import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import ToastProvider from "components/Toast/Provider";
import { env } from "env.mjs";
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
	title: "Floé Gaubert - Monteuse & Expérimentaliste",
	description: "Site vitrine",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="fr" className={cn(lora.variable, urbanist.variable)}>
			<body>
				<ToastProvider>
					<Navbar />
					<main className="mb-32 lg:mt-16">{children}</main>
					<Footer />
				</ToastProvider>
			</body>
			<Script
				defer
				src="/analytics/script.js"
				data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
			/>
		</html>
	);
}
