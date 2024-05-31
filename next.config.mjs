import MillionLint from '@million/lint';
import { dirname } from "path";
import { fileURLToPath } from "url";
import { withHighlightConfig } from "@highlight-run/next/config";
import NextBundleAnalyzer from "@next/bundle-analyzer";
import nextBuildId from "next-build-id";
import "./env.mjs";
const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true"
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => nextBuildId({
    dir: __dirname
  }),
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    instrumentationHook: true
  },
  productionBrowserSourceMaps: true
};
export default MillionLint.next({
  rsc: true
})(withBundleAnalyzer(withHighlightConfig(nextConfig)));