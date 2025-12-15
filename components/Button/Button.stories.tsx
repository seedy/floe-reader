import type { Meta, StoryFn } from "@storybook/nextjs";

import Button from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Button,
  title: "Components/Button",
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Ouvrir",
  color: "primary",
  variant: "outlined",
};

export const Contained = Template.bind({});

Contained.args = {
  children: "Ouvrir",
  color: "primary",
  variant: "contained",
};

export const Outlined = Template.bind({});

Outlined.args = {
  children: "Ouvrir",
  color: "primary",
  variant: "outlined",
};

export const Text = Template.bind({});

Text.args = {
  children: "Ouvrir",
  color: "primary",
  variant: "link",
};
