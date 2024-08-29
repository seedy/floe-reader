import { Meta, StoryFn } from "@storybook/react";
import landing1 from "public/landing-1.webp";
import React from "react";

import H1 from "components/Typography/H1";
import Slide from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Slide",
	component: Slide,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as Meta<typeof Slide>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Slide> = (args) => <Slide {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	heading: <H1>Réalisons les contenus qui feront parler de toi</H1>,
	src: landing1,
	alt: "",
	width: 360,
	height: 360,
};
