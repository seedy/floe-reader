import type { Meta, StoryFn } from "@storybook/nextjs";

import Link from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: Link,
  title: "Components/Button/Link",
} as Meta<typeof Link>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Ouvrir",
};

export const Outlined = Template.bind({});

Outlined.args = {
  children: "Ouvrir",
  href: "#",
  variant: "outlined",
};

export const Contained = Template.bind({});

Contained.args = {
  children: "Ouvrir",
  href: "#",
  variant: "contained",
};

export const Text = Template.bind({});

Text.args = {
  children: "Ouvrir",
  variant: "link",
};
