import { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import Tooltip from "components/Tooltip/Floating";
import TooltipGroup from "components/Tooltip/Floating/Group";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Tooltip/Floating",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Pick<Story, "render"> = {
  render: (args) => <Tooltip {...args} />,
};

export const Default: Story = {
  ...Template,
  args: {
    children: <button>Hover me</button>,
    title: "Tooltip",
  },
};

export const Grouped: Story = {
  render: (args) => (
    <TooltipGroup>
      <div className="flex gap-4">
        <Tooltip {...args} />
        <Tooltip {...args} />
        <Tooltip {...args} />
      </div>
    </TooltipGroup>
  ),
  args: {
    children: <button>Hover me</button>,
    title: "Tooltip",
  },
};
