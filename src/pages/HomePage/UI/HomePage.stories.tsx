import { StoryFn, Meta } from "@storybook/react";

import HomePage from "./HomePage";

export default {
	title: "pages/HomePage",
	component: HomePage,
	argTypes: {},
} as Meta<typeof HomePage>;

const StorybookComponent: StoryFn<typeof HomePage> = (args) => (
	<HomePage {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {};
