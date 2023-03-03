import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Button from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Ouvrir",
};

export const Contained = Template.bind({});

Contained.args = {
  children: "Ouvrir",
  variant: "contained",
};

export const Text = Template.bind({});

Text.args = {
  children: "Ouvrir",
  variant: "text",
};
