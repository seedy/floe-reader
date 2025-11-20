import path from "node:path";
module.exports = {
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
