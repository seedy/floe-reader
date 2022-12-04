import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import floeLower from "public/floe-lower.jpg";

import Avatar from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => (
  // compatibility with storybook: unoptimized + placeholder="empty"
  <Avatar unoptimized placeholder="empty" {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  alt: "AvatarDefault",
};

export const Image = Template.bind({});

Image.args = {
  src: floeLower,
  alt: "AvatarImage",
};
