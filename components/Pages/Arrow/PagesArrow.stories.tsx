import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PagesArrow from ".";
import Box from "components/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/PagesArrow",
  component: PagesArrow,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PagesArrow>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PagesArrow> = (args) => (
  <Box
    css={{
      position: "relative",
      width: 500,
      height: 500,
      backgroundColor: "white",
    }}
  >
    <PagesArrow {...args} />
  </Box>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const Left = Template.bind({});
Left.args = {
  left: true,
};
