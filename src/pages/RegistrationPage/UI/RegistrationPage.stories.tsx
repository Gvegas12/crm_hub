import { StoryFn, Meta } from "@storybook/react";

import RegistrationPage from "./RegistrationPage";

export default {
  title: "pages/RegistrationPage",
  component: RegistrationPage,
  argTypes: {},
} as Meta<typeof RegistrationPage>;

const StorybookComponent: StoryFn<typeof RegistrationPage> = (args) => (
  <RegistrationPage {...args} />
);

export const Primary = StorybookComponent.bind({});
Primary.args = {
};
