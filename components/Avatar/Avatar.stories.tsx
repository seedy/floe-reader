import React from "react";
import { StoryFn, Meta } from "@storybook/nextjs";
import image from "public/CBC_QR_CODE.png";

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
  <Avatar placeholder="empty" {...args} />
);

export const Default = Template.bind({});

Default.args = {
  src: image,
  alt: "AvatarDefault",
};