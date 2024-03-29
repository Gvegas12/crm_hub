import { resolve } from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		// "@storybook/addon-onboarding",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	typescript: {
		reactDocgen: "react-docgen-typescript",
	},
	viteFinal: (config) => {
		config.resolve!.alias = {
			"@": resolve(__dirname, "..", "..", "src"),
		};

		return config;
	},
};

export default config;
