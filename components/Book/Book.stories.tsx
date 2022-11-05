import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Book from ".";
import Page from "../Page";
import Cover from "../Cover";
import Button from "components/Button";
import Flex from "components/Flex";
import pxToRem from "helpers/pxToRem";
import TextPlaceholder from "components/Text/Placeholder";
import Appear from "components/Animate/Appear";
import { OPEN_DURATION } from "components/Book/styled";
import TextReviewed from "components/Text/Reviewed";
import Box from "components/Box";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Book",
  component: Book,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Book>;

const APPEAR_DELAY = OPEN_DURATION.ms * 3;
const SECOND_APPEAR_DELAY = OPEN_DURATION.ms * 4;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Book> = (args) => {
  const [appearOn, setAppearOn] = useState(false);

  const onMouseEnter = () => {
    setAppearOn(true);
  };
  const onMouseLeave = () => {
    setAppearOn(false);
  };

  return (
    <Flex
      align="center"
      justify="center"
      css={{ height: "100%", width: "100%" }}
    >
      <Book onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...args}>
        <Cover>
          <Button variant="contained">Ouvrir</Button>
        </Cover>
        <Page></Page>
        <Page>
          <Flex
            css={{ marginTop: pxToRem(50) }}
            align="center"
            justify="center"
          >
            C&apos;BEN CORREC&apos;
          </Flex>
          <Box></Box>
        </Page>
        <Page>
          <Box>
            <TextReviewed
              words={52}
              height={pxToRem(200)}
              width="calc(100% - 18px)"
              on={appearOn}
              delay={APPEAR_DELAY}
            />
            <Box css={{ marginTop: pxToRem(32) }}>
              <Appear on={appearOn} delay={SECOND_APPEAR_DELAY}>
                <TextPlaceholder words={200} />
              </Appear>
            </Box>
          </Box>
        </Page>
        <Page></Page>
        <Cover />
      </Book>
    </Flex>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
