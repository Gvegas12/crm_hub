import { StoryFn, Meta } from "@storybook/react";

import { SalesAnalytics } from "./SalesAnalytics";

export default {
	title: "shared/UI/SalesAnalytics",
	component: SalesAnalytics,
	argTypes: {},
} as Meta<typeof SalesAnalytics>;

const StorybookComponent: StoryFn<typeof SalesAnalytics> = (args) => (
	<SalesAnalytics {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
	children: "Text",
};
