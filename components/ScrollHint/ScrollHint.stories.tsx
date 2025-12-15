import type { Meta, StoryFn } from "@storybook/nextjs";

import ScrollHint from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: ScrollHint,
  title: "Components/ScrollHint",
} as Meta<typeof ScrollHint>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ScrollHint> = (args) => <ScrollHint {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
