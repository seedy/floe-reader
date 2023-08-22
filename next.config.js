import "./env.mjs"
import { withHighlightConfig } from "@highlight-run/next";
import nextBuildId from "next-build-id"

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    instrumentationHook: true,
  },
  productionBrowserSourceMaps: true,
};

module.exports = withHighlightConfig(nextConfig);
