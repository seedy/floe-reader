import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import floeLower from "public/floe-lower.jpg";

import Image from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Image",
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Image>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Image> = (args) => (
  // compatibility with storybook: unoptimized + placeholder="empty"
  <Image unoptimized placeholder="empty" {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  alt: "ImageDefault",
};

export const SRC = Template.bind({});

SRC.args = {
  src: floeLower,
  alt: "ImageImage",
};
