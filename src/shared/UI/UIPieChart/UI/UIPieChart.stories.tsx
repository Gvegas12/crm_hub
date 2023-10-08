import { StoryFn, Meta } from "@storybook/react";

import { UIPieChart } from "./UIPieChart";

export default {
	title: "shared/UI/UIPieChart",
	component: UIPieChart,
	argTypes: {},
} as Meta<typeof UIPieChart>;

const StorybookComponent: StoryFn<typeof UIPieChart> = (args) => (
	<UIPieChart {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
