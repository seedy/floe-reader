import "./env.mjs"
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { withHighlightConfig } from "@highlight-run/next/config";
import nextBuildId from "next-build-id"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    instrumentationHook: true,
    serverActions: true,
  },
  productionBrowserSourceMaps: true,
};

export default withHighlightConfig(nextConfig);
