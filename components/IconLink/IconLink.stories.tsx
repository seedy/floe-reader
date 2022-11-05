import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconLink from ".";
import { CheckIcon } from "@radix-ui/react-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/IconLink",
  component: IconLink,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof IconLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconLink> = (args) => (
  <IconLink {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <CheckIcon />,
};

export const Small = Template.bind({});
Small.args = {
  variant: "small",
  children: <CheckIcon />,
};
