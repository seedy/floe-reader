import { Meta, StoryFn } from "@storybook/nextjs";
import React from "react";

import H1 from "components/Typography/H1";
import H2 from "components/Typography/H2";
import H3 from "components/Typography/H3";
import LogoType from "components/Typography/LogoType";
import { LOREM } from "constants/lorem";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Typography",
	component: H1,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as Meta<typeof H1>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Headings: StoryFn<typeof H1> = (args) => (
	<div className="flex flex-col">
		<LogoType {...args} />
		<H1 {...args} />
		<H2 {...args} />
		<H3 {...args} />
	</div>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Headings.args = {
	children: LOREM.slice(0, 60),
};
