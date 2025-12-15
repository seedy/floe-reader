import type { Meta, StoryFn } from "@storybook/nextjs";
import cbcLogo from "public/CBC_LOGO.svg";

import Logo from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: Logo,
  title: "Components/Logo",
} as Meta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Logo> = (args) => (
  <Logo placeholder="empty" {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  alt: "LogoImage",
  height: 640,
  src: cbcLogo,
  width: 658,
};
