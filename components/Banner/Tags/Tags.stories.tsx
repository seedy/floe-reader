import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import BannerTags from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Banner/Tags",
	component: BannerTags,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as Meta<typeof BannerTags>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BannerTags> = (args) => (
	<>
		<div style={{ height: "1000px" }} />
		<BannerTags {...args} />
		<div style={{ height: "1000px" }} />
	</>
);

export const Default = Template.bind({});

Default.args = {
	tags: ["Interview", "Montage", "Podcast", "Photo", "Vidéo"],
};
