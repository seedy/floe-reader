import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import floeLower from "public/floe-lower.jpg";

import Presentation from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Screen/Presentation",
  component: Presentation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Presentation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Presentation> = (args) => (
  // compatibility with storybook: unoptimized + placeholder="empty"
  <Presentation
    avatarProps={{ unoptimized: true, placeholder: "empty" }}
    {...args}
  />
);

export const Default = Template.bind({});