import "./globals.css";
import ToastProvider from "components/Toast/Provider";
import { HighlightInit } from "@highlight-run/next/client";
import { env } from "env.mjs";
import { Lora } from "next/font/google";
import Navbar from "components/Navbar";
import { ReactNode } from "react";
import { Metadata } from "next";

const lora = Lora({ subsets: ["latin"], style: ["normal"] });

export const metadata: Metadata = {
	title: "Floé Gaubert - Conceptrice rédactrice",
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
					{children}
				</ToastProvider>
			</body>
		</html>
	);
}
