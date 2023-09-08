import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import image from "public/CBC_QR_CODE.png";

import Image from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Image",
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Image>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Image> = (args) => (
  // compatibility with storybook: unoptimized + placeholder="empty"
  <Image unoptimized placeholder="empty" {...args} /> // eslint-disable-line jsx-a11y/alt-text
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  alt: "ImageDefault",
};

export const SRC = Template.bind({});

SRC.args = {
  src: image,
  alt: "ImageImage",
};
