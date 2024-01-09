import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Carousel from ".";
import Flex from "components/Flex";
import landing1 from "public/landing-1.jpg";
import landing2 from "public/landing-2.jpg";
import landing3 from "public/landing-3.jpg";
import Image from "components/Image";
import H1 from "components/Typography/H1";
import Slide from "components/Slide";

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
				<Slide
					heading={<H1>Réalisons les contenus qui feront parler de toi</H1>}
					src={landing1}
					width={360}
					height={360}
					alt=""
				/>
				<Slide
					heading={
						<H1>
							Je crée une expérience unique avec du contenu percutant et
							chaleureux
						</H1>
					}
					src={landing2}
					width={360}
					height={360}
					alt=""
				/>
				<Slide
					heading={<H1>Des podcasts qui feront résonner ton message</H1>}
					src={landing3}
					width={360}
					height={360}
					alt=""
				/>
			</Carousel>
		</Flex>
	);
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
