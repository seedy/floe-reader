import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import cbcLogo from "public/CBC_Logo_full.png";

import Logo from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Logo",
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args) => (
  // compatibility with storybook: unoptimized + placeholder="empty"
  <Logo unoptimized placeholder="empty" {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  src: cbcLogo,
  width: 658,
  height: 640,
  alt: "LogoImage",
};
