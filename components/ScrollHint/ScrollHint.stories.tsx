import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import ScrollHint from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/ScrollHint",
    component: ScrollHint,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof ScrollHint>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ScrollHint> = (args) => <ScrollHint {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};