import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Book from ".";
import Page from "../Page";
import Cover from "../Cover";
import Button from "components/Button";
import Flex from "components/Flex";
import CornerButton from "components/CornerButton";
import { EnterIcon } from "@radix-ui/react-icons";
import pxToRem from "helpers/pxToRem";
import TextPlaceholder from "components/Text/Placeholder";

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
  <Flex align="center" justify="center" css={{ height: "100%", width: "100%" }}>
    <Book {...args}>
      <Cover>
        <Button variant="contained">Ouvrir</Button>
      </Cover>
      <Page></Page>
      <Page>
        <Flex css={{ marginTop: pxToRem(50) }} align="center" justify="center">
          C&apos;BEN CORREC&apos;
        </Flex>
      </Page>
      <Page>
        <TextPlaceholder words={200} />
      </Page>
      <Page></Page>
      <Cover />
    </Book>
  </Flex>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
