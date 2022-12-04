import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Appear from ".";
import { styled } from "stitches.config";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Animate/Appear",
  component: Appear,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Appear>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Appear> = (args) => <Appear {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Appear",
};

export const Delayed = Template.bind({});
Delayed.args = {
  children: "Delayed",
  delay: 700,
};

const HoverMe = styled("div", {
  height: 50,
  width: 100,
  border: "1px dotted yellow",
});

export const OnHover: ComponentStory<typeof Appear> = (args) => {
  const [appearOn, setAppearOn] = useState(false);

  const onMouseEnter = () => {
    setAppearOn(true);
  };
  const onMouseLeave = () => {
    setAppearOn(false);
  };
  return (
    <HoverMe onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Appear on={appearOn} {...args} />
    </HoverMe>
  );
};
OnHover.args = {
  children: "OnHover",
};
