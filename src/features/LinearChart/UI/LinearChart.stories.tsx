import { StoryFn, Meta } from "@storybook/react";

import { LinearChart } from "./LinearChart";

export default {
  title: "shared/UI/LinearChart",
  component: LinearChart,
  argTypes: {},
} as Meta<typeof LinearChart>;

const StorybookComponent: StoryFn<typeof LinearChart> = (args) => (
  <LinearChart {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
};
