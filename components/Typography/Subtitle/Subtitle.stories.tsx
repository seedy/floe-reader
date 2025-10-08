import { Meta, StoryFn } from "@storybook/nextjs";
import React from "react";

import H1 from "components/Typography/H1";
import Subtitle from "components/Typography/Subtitle";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Typography/Subtitle",
	component: Subtitle,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as Meta<typeof Subtitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Subtitle> = (args) => <Subtitle {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	children: "La promesse de contenus pertinents, originaux et optimisés SEO",
};

export const WithTitle: StoryFn<typeof Subtitle> = (args) => (
	<div className="flex flex-col">
		<H1>
			Je raconte vos projets avec intensité et authenticité
			<Subtitle {...args}>
				La promesse de contenus pertinents, originaux et optimisés SEO
			</Subtitle>
		</H1>
	</div>
);
