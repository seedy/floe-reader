import type { Meta, StoryFn } from "@storybook/nextjs";
import H1 from "components/Typography/H1";
import landing1 from "public/landing-1.webp";
import Slide from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: Slide,
  title: "Components/Slide",
} as Meta<typeof Slide>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Slide> = (args) => <Slide {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  alt: "",
  headingBottom: <H1 color="white">Une expérience visuelle soignée</H1>,
  headingTop: { mobile: "Réalisons les contenus qui feront parler de toi" },
  height: 360,
  src: landing1,
  width: 360,
};
