import type { Meta, StoryFn } from "@storybook/nextjs";
import Content from "components/Tabs/Content";
import List from "components/Tabs/List";
import Tab from "components/Tabs/Tab";
import { useState } from "react";
import Tabs from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: Tabs,
  title: "Components/Tabs",
} as Meta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <List>
      <Tab value="Podcasts">Podcasts</Tab>
      <Tab value="Interviews">Interviews</Tab>
    </List>
    <Content value="Podcasts">Podcasts</Content>
    <Content value="Interviews">Interviews</Content>
  </Tabs>
);

export const Default = Template.bind({});

export const Controlled = () => {
  const [value, setValue] = useState("Interviews");
  return (
    <Tabs value={value} onChange={setValue}>
      <List>
        <Tab value="Podcasts">Podcasts</Tab>
        <Tab value="Interviews">Interviews</Tab>
      </List>
      <Content value="Podcasts">Podcasts</Content>
      <Content value="Interviews">Interviews</Content>
    </Tabs>
  );
};
