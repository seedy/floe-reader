import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextPlaceholder from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Text/Placeholder",
  component: TextPlaceholder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TextPlaceholder>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextPlaceholder> = (args) => (
  <TextPlaceholder {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  words: 100,
};
