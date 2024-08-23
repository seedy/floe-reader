import { HighlightInit } from "@highlight-run/next/client";
import Navbar from "components/Navbar";
import ToastProvider from "components/Toast/Provider";
import { env } from "env.mjs";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], style: ["normal"] });

export const metadata: Metadata = {
	title: "Floé Gaubert - Monteuse & Expérimentaliste",
	description: "Site vitrine",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="fr" className={lora.className}>
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
					<main className="lg:mt-16">{children}</main>
				</ToastProvider>
			</body>
		</html>
	);
}
