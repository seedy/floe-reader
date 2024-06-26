import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import { CheckIcon } from "@radix-ui/react-icons";
import IconButton from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/IconButton",
	component: IconButton,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as Meta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	children: <CheckIcon />,
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
	children: <CheckIcon />,
};
