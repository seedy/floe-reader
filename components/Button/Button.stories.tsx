import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import Button from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Button",
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	children: "Ouvrir",
	variant: "outlined",
	color: "primary",
};

export const Contained = Template.bind({});

Contained.args = {
	children: "Ouvrir",
	variant: "contained",
	color: "primary",
};

export const Outlined = Template.bind({});

Outlined.args = {
	children: "Ouvrir",
	variant: "outlined",
	color: "primary",
};

export const Text = Template.bind({});

Text.args = {
	children: "Ouvrir",
	variant: "link",
	color: "primary",
};
