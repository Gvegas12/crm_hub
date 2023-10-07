import { StoryFn, Meta } from "@storybook/react";

import LoginPage from "./LoginPage";

export default {
  title: "pages/LoginPage",
  component: LoginPage,
  argTypes: {},
} as Meta<typeof LoginPage>;

const StorybookComponent: StoryFn<typeof LoginPage> = (args) => (
  <LoginPage {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
};
