import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import djirs3 from "public/dji-rs3.png";
import fujixs10 from "public/fuji-xs10.png";
import zoomh5 from "public/zoom-h5.png";
import BannerMagnifier from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Banner/Magnifier",
	component: BannerMagnifier,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as Meta<typeof BannerMagnifier>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BannerMagnifier> = (args) => (
	<BannerMagnifier {...args} />
);

export const Default = Template.bind({});

Default.args = {
	items: [
		{
			src: fujixs10,
			label: "Fujifilm XS-10",
			href: "https://fujifilm-x.com/fr-fr/products/cameras/x-s10/",
		},
		{
			src: zoomh5,
			label: "Zoom H5",
			href: "https://www.zoom-europe.com/en/handy-recorders/zoom-h5",
		},
		{ src: djirs3, label: "DJI RS-3", href: "https://www.dji.com/fr/rs-3" },
	],
};
