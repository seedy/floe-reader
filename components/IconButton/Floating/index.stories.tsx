import { Meta, StoryFn } from "@storybook/nextjs";
import React, { useRef } from "react";

import { CheckIcon } from "@radix-ui/react-icons";
import IconButtonFloating from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Components/IconButton/Floating",
	component: IconButtonFloating,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as Meta<typeof IconButtonFloating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof IconButtonFloating> = (args) => (
	<IconButtonFloating {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	children: <CheckIcon />,
};

export const WithContainer: StoryFn<typeof IconButtonFloating> = () => {
	const container = useRef<HTMLDivElement | null>(null);

	return (
		<div className="flex flex-col">
			<IconButtonFloating aria-label="FAB" container={container}>
				<CheckIcon />
			</IconButtonFloating>
			<div className="h-svh flex items-center justify-center">First screen</div>
			<div ref={container} className="h-svh flex items-center justify-center">
				Second screen
			</div>
			<div className="h-svh flex items-center justify-center">Third screen</div>
		</div>
	);
};
