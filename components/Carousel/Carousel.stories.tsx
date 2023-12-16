import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Carousel from ".";
import Flex from "components/Flex";
import landing1 from "public/landing-1.jpg";
import landing2 from "public/landing-2.jpg";
import landing3 from "public/landing-3.jpg";
import Image from "components/Image";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default ({
	title: "Components/Carousel",
	component: Carousel,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof Carousel>);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Carousel> = (args) => {
	return (
		<Flex
			align="center"
			justify="center"
			style={{ height: "100%", width: "100%" }}
		>
			<Carousel {...args}>
				<Image src={landing1} width={360} height={360} alt="" />
				<Image src={landing2} width={360} height={360} alt="" />
				<Image src={landing3} width={360} height={360} alt="" />
			</Carousel>
		</Flex>
	);
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
