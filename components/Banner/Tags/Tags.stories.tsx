import type { Meta, StoryFn } from "@storybook/nextjs";
import BannerTags from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: BannerTags,
  title: "Components/Banner/Tags",
} as Meta<typeof BannerTags>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BannerTags> = (args) => (
  <>
    <div style={{ height: "1000px" }} />
    <BannerTags {...args} />
    <div style={{ height: "1000px" }} />
  </>
);

export const Default = Template.bind({});

Default.args = {
  tags: ["Interview", "Montage", "Podcast", "Photo", "Vidéo"],
};
