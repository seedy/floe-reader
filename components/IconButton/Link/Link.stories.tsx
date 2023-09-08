import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import IconButtonLink from ".";
import { CheckIcon } from "@radix-ui/react-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/IconButton/Link",
    component: IconButtonLink,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof IconButtonLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof IconButtonLink> = (args) => (
    <IconButtonLink {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    children: <CheckIcon />,
};

export const Small = Template.bind({});
Small.args = {
    variant: "small",
    children: <CheckIcon />,
};
