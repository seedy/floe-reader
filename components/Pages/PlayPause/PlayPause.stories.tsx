import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import PlayPause from ".";
import Box from "components/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/PlayPause",
  component: PlayPause,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof PlayPause>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof PlayPause> = (args) => (
  <Box
    style={{
      position: "relative",
      width: 500,
      height: 500,
      backgroundColor: "white",
    }}
  >
    <PlayPause {...args} />
  </Box>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  playing: true,
};
