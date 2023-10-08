import { StoryFn, Meta } from "@storybook/react";

import { UILinearChart } from "./UILinearChart";

export default {
  title: "shared/UI/UILinearChart",
  component: UILinearChart,
  argTypes: {},
} as Meta<typeof UILinearChart>;

const StorybookComponent: StoryFn<typeof UILinearChart> = (args) => (
  <UILinearChart {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
  children: "Text",
};
