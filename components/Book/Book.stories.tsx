import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Book from ".";
import Flex from "components/Flex";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Book",
  component: Book,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Book>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Book> = (args) => {
  return (
    <Flex
      align="center"
      justify="center"
      css={{ height: "100%", width: "100%" }}
    >
      <Book {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
