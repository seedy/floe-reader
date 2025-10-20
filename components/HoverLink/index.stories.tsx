import { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import {
	HoverLinkContent,
	HoverLinkImage,
	HoverLinkRoot,
} from "components/HoverLink";
import image from "public/CBC_QR_CODE.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: "Components/HoverLink",
	component: HoverLinkRoot,
	decorators: (Story) => (
		<div className="flex size-full items-center justify-center">
			<Story />
		</div>
	),
} satisfies Meta<typeof HoverLinkRoot>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Pick<Story, "render"> = {
	render: (args) => <HoverLinkRoot {...args} />,
};

export const Default: Story = {
	...Template,
	args: {
		children: (
			<>
				<HoverLinkContent>
					<div className="flex flex-col gap-4">
						<h1 className="font-bold">About</h1>
						<h2 className="font-semibold">Learn what we do here</h2>
					</div>
				</HoverLinkContent>
				<HoverLinkImage src={image} alt="Image" />
			</>
		),
	},
};
