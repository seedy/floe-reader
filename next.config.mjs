import { dirname } from "path";
import { fileURLToPath } from "url";
import NextBundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs";
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
	images: {
		qualities: [100],
	},
	outputFileTracingRoot: "/Users/cedricdupuis/Workspace",
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
const sentryConfig = withSentryConfig(withBundleAnalyzer(nextConfig), {
	// For all available options, see:
	// https://github.com/getsentry/sentry-webpack-plugin#options

	org: "cedric-dupuis",
	project: "floe-reader",

	// Only print logs for uploading source maps in CI
	silent: !process.env.CI,

	// For all available options, see:
	// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

	// Upload a larger set of source maps for prettier stack traces (increases build time)
	widenClientFileUpload: true,

	// Automatically annotate React components to show their full name in breadcrumbs and session replay
	reactComponentAnnotation: {
		enabled: true,
	},

	// Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
	// This can increase your server load as well as your hosting bill.
	// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
	// side errors will fail.
	tunnelRoute: "/monitoring",

	// Hides source maps from generated client bundles
	hideSourceMaps: true,

	// Automatically tree-shake Sentry logger statements to reduce bundle size
	disableLogger: true,

	// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
	// See the following for more information:
	// https://docs.sentry.io/product/crons/
	// https://vercel.com/docs/cron-jobs
	automaticVercelMonitors: true,
});

export default sentryConfig;
