import { CheckIcon } from "@radix-ui/react-icons";
import type { Meta, StoryFn } from "@storybook/nextjs";
import IconButtonLink from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: IconButtonLink,
  title: "Components/IconButton/Link",
} as Meta<typeof IconButtonLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof IconButtonLink> = (args) => (
  <IconButtonLink {...args} />
);

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
