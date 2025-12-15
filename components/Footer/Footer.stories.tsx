import type { Meta, StoryFn } from "@storybook/nextjs";

import Footer from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Footer,
  title: "Components/Footer",
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
