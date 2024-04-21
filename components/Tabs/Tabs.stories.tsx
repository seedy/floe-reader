import { Meta, StoryFn } from "@storybook/react";
import React from "react";

import Content from "components/Tabs/Content";
import Tab from "components/Tabs/Tab";
import Tabs from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/Tabs",
	component: Tabs,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as Meta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tabs> = (args) => (
	<Tabs
		items={
			<>
				<Tab value="Podcasts">Podcasts</Tab>
				<Tab value="Interviews">Interviews</Tab>
			</>
		}
		{...args}
	>
		<Content value="Podcasts">Podcasts</Content>
		<Content value="Interviews">Interviews</Content>
	</Tabs>
);

export const Default = Template.bind({});
