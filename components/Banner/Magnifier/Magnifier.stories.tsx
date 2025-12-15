import type { Meta, StoryFn } from "@storybook/nextjs";
import djirs3 from "public/dji-rs3.webp";
import fujixs10 from "public/fuji-xs10.webp";
import zoomh5 from "public/zoom-h5.webp";
import BannerMagnifier from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: BannerMagnifier,
  title: "Components/Banner/Magnifier",
} as Meta<typeof BannerMagnifier>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof BannerMagnifier> = (args) => (
  <BannerMagnifier {...args} />
);

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      href: "https://fujifilm-x.com/fr-fr/products/cameras/x-s10/",
      label: "Fujifilm XS-10",
      src: fujixs10,
    },
    {
      href: "https://www.zoom-europe.com/en/handy-recorders/zoom-h5",
      label: "Zoom H5",
      src: zoomh5,
    },
    { href: "https://www.dji.com/fr/rs-3", label: "DJI RS-3", src: djirs3 },
  ],
};
