import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import SpanUnderline from "components/Typography/SpanUnderline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Typography/SpanUnderline",
  component: SpanUnderline,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof SpanUnderline>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SpanUnderline> = (args) => <SpanUnderline {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "en ton nom",
};