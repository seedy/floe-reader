import { HighlightInit } from "@highlight-run/next/client";
import Navbar from "components/Navbar";
import ToastProvider from "components/Toast/Provider";
import { env } from "env.mjs";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Urbanist } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import Footer from "components/Footer";
import cn from "helpers/cn";

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
					<HighlightInit
						projectId={env.NEXT_PUBLIC_HIGHLIGHT_PROJECT_ID}
						serviceName="floe-reader"
						tracingOrigins
						networkRecording={{
							enabled: true,
							recordHeadersAndBody: true,
						}}
						excludedHostnames={["localhost"]}
					/>
					<Navbar />
					<main className="mb-32 lg:mt-16">{children}</main>
					<Footer />
				</ToastProvider>
			</body>
		</html>
	);
}
