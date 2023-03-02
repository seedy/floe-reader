const path = require("path");
module.exports = {
  stories: ["../stories/**/*.mdx", "../components/**/*.mdx", "../components/**/*.stories.@(js|jsx|ts|tsx)"],
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js')
    }
  },
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: true
  }
};