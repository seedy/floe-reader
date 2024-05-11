import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";

import Content from "components/Tabs/Content";
import List from "components/Tabs/List";
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
	<Tabs {...args}>
		<List>
			<Tab value="Podcasts">Podcasts</Tab>
			<Tab value="Interviews">Interviews</Tab>
		</List>
		<Content value="Podcasts">Podcasts</Content>
		<Content value="Interviews">Interviews</Content>
	</Tabs>
);

export const Default = Template.bind({});

export const Controlled = () => {
	const [value, setValue] = useState("Interviews");
	return (
		<Tabs value={value} onChange={setValue}>
			<List>
				<Tab value="Podcasts">Podcasts</Tab>
				<Tab value="Interviews">Interviews</Tab>
			</List>
			<Content value="Podcasts">Podcasts</Content>
			<Content value="Interviews">Interviews</Content>
		</Tabs>
	);
};
