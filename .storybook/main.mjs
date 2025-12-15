// This file has been automatically migrated to valid ESM format by Storybook.

import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const main = {
  addons: ["@storybook/addon-docs"],

  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {},
      nextConfigPath: path.resolve(__dirname, "../next.config.js"),
    },
  },
  stories: [
    "../stories/**/*.mdx",
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
};

export default main;
