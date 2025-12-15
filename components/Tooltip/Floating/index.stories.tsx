import type { Meta, StoryObj } from "@storybook/nextjs";
import Tooltip from "components/Tooltip/Floating";
import TooltipGroup from "components/Tooltip/Floating/Group";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: Tooltip,
  title: "Components/Tooltip/Floating",
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
    children: <button type="button">Hover me</button>,
    title: "Tooltip",
  },
};

export const Grouped: Story = {
  args: {
    children: <button type="button">Hover me</button>,
    title: "Tooltip",
  },
  render: (args) => (
    <TooltipGroup>
      <div className="flex gap-4">
        <Tooltip {...args} />
        <Tooltip {...args} />
        <Tooltip {...args} />
      </div>
    </TooltipGroup>
  ),
};
