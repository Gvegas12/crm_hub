import { StoryFn, Meta } from "@storybook/react";

import { Sidebar } from "./Sidebar";

export default {
	title: "widgets/Sidebar",
	component: Sidebar,
	argTypes: {},
} as Meta<typeof Sidebar>;

const StorybookComponent: StoryFn<typeof Sidebar> = (args) => (
	<Sidebar {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
