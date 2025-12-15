import type { Meta, StoryFn } from "@storybook/nextjs";

import Socials from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: Socials,
  title: "Components/Socials",
} as Meta<typeof Socials>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Socials> = () => <Socials />;

export const Default = Template.bind({});
