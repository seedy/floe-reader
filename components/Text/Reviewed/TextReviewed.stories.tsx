import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextReviewed from ".";
import Box from "components/Box";
import pxToRem from "helpers/pxToRem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Text/Reviewed",
  component: TextReviewed,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof TextReviewed>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextReviewed> = (args) => {
  const [width, setWidth] = useState(args.width);

  const onClick = () => {
    setWidth(pxToRem(600));
  };

  return (
    <Box>
      <TextReviewed {...args} width={width} />
      <button onClick={onClick}>resize</button>
    </Box>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  words: 100,
  width: pxToRem(300),
  height: pxToRem(300),
};
