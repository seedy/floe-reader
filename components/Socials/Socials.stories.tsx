import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Socials from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Socials",
  component: Socials,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Socials>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Socials> = () => (
  // compatibility with storybook: unoptimized + placeholder="empty"
  <Socials />
)

export const Default = Template.bind({});
