import { dirname } from "path";
import { fileURLToPath } from "url";
import NextBundleAnalyzer from "@next/bundle-analyzer";
import nextBuildId from "next-build-id";
import "./env.mjs";
const withBundleAnalyzer = NextBundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
	generateBuildId: () =>
		nextBuildId({
			dir: __dirname,
		}),
	reactStrictMode: true,
	swcMinify: true,
	productionBrowserSourceMaps: true,
	rewrites: async () => ({
		afterFiles: [
			{
				source: "/analytics/script.js",
				destination: "https://cloud.umami.is/script.js",
			},
		],
	}),
};
export default withBundleAnalyzer(nextConfig);
