import type { Meta, StoryFn } from "@storybook/nextjs";
import image from "public/CBC_QR_CODE.png";

import Image from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: Image,
  title: "Components/Image",
} as Meta<typeof Image>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Image> = (args) => (
  <Image placeholder="empty" {...args} />
);

export const Default = Template.bind({});

Default.args = {
  alt: "ImageDefault",
  src: image,
};
