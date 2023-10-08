import { StoryFn, Meta } from "@storybook/react";

import { LinearChartWithDescription } from "./LinearChartWithDescription";

export default {
	title: "shared/UI/LinearChartWithDescription",
	component: LinearChartWithDescription,
	argTypes: {},
} as Meta<typeof LinearChartWithDescription>;

const StorybookComponent: StoryFn<typeof LinearChartWithDescription> = (
	args,
) => <LinearChartWithDescription {...args} />;

export const Primary = StorybookComponent.bind({});
Primary.args = {};
