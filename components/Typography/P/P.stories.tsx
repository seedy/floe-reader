import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { LOREM } from "constants/lorem";
import P from "components/Typography/P";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Typography/P",
  component: P,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof P>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof P> = (args) => <P {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: LOREM.slice(0, 60),
};

export const AlignStart = Template.bind({});
AlignStart.args = {
  children: LOREM.slice(0, 60),
  align: "start",
};

export const AlignEnd = Template.bind({});
AlignEnd.args = {
  children: LOREM.slice(0, 60),
  align: "end",
};
