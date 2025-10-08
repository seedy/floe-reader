import { Meta, StoryFn } from "@storybook/nextjs";
import React from "react";

import Footer from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Footer",
	component: Footer,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
