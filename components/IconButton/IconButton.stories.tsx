import { CheckIcon } from "@radix-ui/react-icons";
import type { Meta, StoryFn } from "@storybook/nextjs";
import IconButton from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: IconButton,
  title: "Components/IconButton",
} as Meta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <CheckIcon />,
  tooltip: "Check",
};

export const Small = Template.bind({});
Small.args = {
  children: <CheckIcon />,
  size: "small",
  tooltip: "Check",
};

export const Large = Template.bind({});
Large.args = {
  children: <CheckIcon />,
  size: "large",
  tooltip: "Check",
};
