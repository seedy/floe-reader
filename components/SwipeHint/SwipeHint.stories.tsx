import type { Meta, StoryFn } from "@storybook/nextjs";

import SwipeHint from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: SwipeHint,
  title: "Components/SwipeHint",
} as Meta<typeof SwipeHint>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SwipeHint> = (args) => <SwipeHint {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
