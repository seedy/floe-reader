import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Book from ".";
import Page from "../Page";
import Cover from "../Cover";
import Button from "components/Button";
import Flex from "components/Flex";
import CornerButton from "components/CornerButton";
import { EnterIcon } from "@radix-ui/react-icons";

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
const Template: ComponentStory<typeof Book> = (args) => (
  <Book {...args}>
    <Cover>
      <Button variant="contained">Ouvrir</Button>
    </Cover>
    <Page>
      <Flex
        direction="column"
        grow
        align="end"
        justify="end"
        css={{ height: "100%" }}
      >
        <CornerButton>
          <EnterIcon />
        </CornerButton>
      </Flex>
    </Page>
    <Page></Page>
    <Page></Page>
    <Page></Page>
    <Cover />
  </Book>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
