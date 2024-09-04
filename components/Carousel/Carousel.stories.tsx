import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

import Slide from "components/Slide";
import Socials from "components/Socials";
import H1 from "components/Typography/H1";
import H2 from "components/Typography/H2";
import landing1 from "public/landing-1.webp";
import landing2 from "public/landing-2.webp";
import landing3 from "public/landing-3.webp";
import Carousel from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Carousel",
	component: Carousel,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as Meta<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Carousel> = (args) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<Carousel {...args}>
				<Slide
					headingDesktop={
						<H2>
							Je crée une expérience unique avec du contenu percutant et
							chaleureux
						</H2>
					}
					heading={<H1>Réalisons les contenus qui feront parler de toi</H1>}
					src={landing1}
					alt=""
				/>
				<Slide
					headingDesktop={
						<H2>
							Je crée une expérience unique avec du contenu percutant et
							chaleureux
						</H2>
					}
					heading={
						<H1>
							Je crée une expérience unique avec du contenu percutant et
							chaleureux
						</H1>
					}
					src={landing2}
					alt=""
				/>
				<Slide
					headingDesktop={
						<H2>
							Je crée une expérience unique avec du contenu percutant et
							chaleureux
						</H2>
					}
					heading={<H1>Des interviews qui feront résonner ton message</H1>}
					src={landing3}
					alt=""
				/>
			</Carousel>
		</div>
	);
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	headingDesktop: (
		<div className="flex grow flex-col items-center gap-8 text-center">
			<H2>Réalisons les contenus qui feront parler de toi</H2>
			<Socials />
		</div>
	),
};
