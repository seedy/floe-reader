import { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import { HoverLinkRoot } from "components/HoverLink";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: "Components/HoverLink",
	component: HoverLinkRoot,
} satisfies Meta<typeof HoverLinkRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Pick<Story, "render"> = {
	render: (args) => <HoverLinkRoot {...args} />,
};

export const Default: Story = {
	...Template,
	args: {},
};
