import type { Meta, StoryFn } from "@storybook/nextjs";
import SpanUnderline from "components/Typography/SpanUnderline";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: SpanUnderline,
  title: "Components/Typography/SpanUnderline",
} as Meta<typeof SpanUnderline>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof SpanUnderline> = (args) => (
  <SpanUnderline {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "en ton nom",
};
