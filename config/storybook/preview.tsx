import { Preview } from "@storybook/react";

import React from "react";
import { MemoryRouter } from "react-router";
import { withScreenshot } from "storycap";
import { date } from "zod";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	decorators: [
		withScreenshot(),
		(story) => <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>,
	],
};

export default preview;

