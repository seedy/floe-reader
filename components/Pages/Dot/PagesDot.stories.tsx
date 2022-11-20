import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PagesDot from ".";
import Box from "components/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/PagesDot",
  component: PagesDot,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PagesDot>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PagesDot> = (args) => (
  <Box
    css={{
      position: "relative",
      width: 500,
      height: 500,
      backgroundColor: "white",
    }}
  >
    <PagesDot {...args} />
  </Box>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  active: true,
};
