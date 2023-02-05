import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import H1 from "components/Typography/H1";
import Subtitle from "components/Typography/Subtitle";
import Flex from "components/Flex";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Typography/Subtitle",
  component: Subtitle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Subtitle>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Subtitle> = (args) => (
  <Subtitle {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "La promesse de contenus pertinents, originaux et optimisés SEO",
};

export const WithTitle: ComponentStory<typeof Subtitle> = (args) => (
  <Flex direction="column">
    <H1>
      Propulsez vos idées sur le devant de la scène
      <Subtitle {...args}>
        La promesse de contenus pertinents, originaux et optimisés SEO
      </Subtitle>
    </H1>
  </Flex>
);
