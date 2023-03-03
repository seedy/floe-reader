import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import TopAppBar from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/TopAppBar",
    component: TopAppBar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof TopAppBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof TopAppBar> = (args) => <TopAppBar {...args} />;

export const Default = Template.bind({});