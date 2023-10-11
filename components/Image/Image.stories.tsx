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
  <Image placeholder="empty" {...args} /> // eslint-disable-line jsx-a11y/alt-text
);

export const Default = Template.bind({});

Default.args = {
  src: image,
  alt: "ImageDefault",
};
