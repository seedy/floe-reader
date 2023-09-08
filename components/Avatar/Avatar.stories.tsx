import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import floeLower from "public/floe-lower.jpg";

import Avatar from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Avatar> = (args) => (
  // compatibility with storybook: unoptimized + placeholder="empty"
  <Avatar unoptimized placeholder="empty" {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  src: "https://picsum.photos/160",
  alt: "AvatarDefault",
  width: 160,
  height: 160,
};

export const Image = Template.bind({});

Image.args = {
  src: floeLower,
  alt: "AvatarImage",
};