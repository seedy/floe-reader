import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Banner from ".";
import P from "components/Typography/P";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default ({
	title: "Components/Banner",
	component: Banner,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as Meta<typeof Banner>);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Banner> = (args) => (
	<>
		<div style={{ height: "1000px" }} />
		<Banner {...args} />
		<div style={{ height: "1000px" }} />
	</>
);

export const Default = Template.bind({});

Default.args = {
	tags: ["Interview", "Rédaction", "Podcast", "Photo", "Vidéo"],
};
