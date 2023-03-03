import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { LOREM } from "constants/lorem";
import H1 from "components/Typography/H1";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import Flex from "components/Flex";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Typography",
  component: H1,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof H1>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof H1> = (args) => (
  <Flex direction="column">
    <H1 {...args} />
    <H2 {...args} />
    <H3 {...args} />
  </Flex>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: LOREM.slice(0, 60),
};
