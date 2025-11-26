// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const main = {
  stories: [
    "../stories/**/*.mdx",
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.js"),
      builder: {},
    },
  },

  addons: ["@storybook/addon-docs"],
};

export default main;
