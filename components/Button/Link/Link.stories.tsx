import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Link from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default ({
	title: "Components/Button/Link",
	component: Link,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as Meta<typeof Link>);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	children: "Ouvrir",
};

export const Contained = Template.bind({});

Contained.args = {
	children: "Ouvrir",
	variant: "contained",
	href: "#",
};

export const Text = Template.bind({});

Text.args = {
	children: "Ouvrir",
	variant: "link",
};
