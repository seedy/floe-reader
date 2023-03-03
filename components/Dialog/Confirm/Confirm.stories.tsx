import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import DialogConfirm from ".";
import Button from "components/Button";
import H3 from "components/Typography/H3";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Dialog/Confirm",
  component: DialogConfirm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof DialogConfirm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof DialogConfirm> = (args) => (
  <DialogConfirm {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <Button variant="contained">Prendre contact</Button>,
  title: "Un mail vient d'être envoyé à l'adresse",
  description: <H3>toto@gmail.com</H3>,
};
