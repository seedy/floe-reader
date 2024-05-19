import React from "react";
import type { StoryFn, Meta } from "@storybook/react";

import Carousel from ".";
import landing1 from "public/landing-1.jpg";
import landing2 from "public/landing-2.jpg";
import landing3 from "public/landing-3.jpg";
import H1 from "components/Typography/H1";
import Slide from "components/Slide";
import H2 from "components/Typography/H2";
import Socials from "components/Socials";

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
					fill
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
					fill
					alt=""
				/>
				<Slide
					headingDesktop={
						<H2>
							Je crée une expérience unique avec du contenu percutant et
							chaleureux
						</H2>
					}
					heading={<H1>Des podcasts qui feront résonner ton message</H1>}
					src={landing3}
					fill
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
