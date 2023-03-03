import React, { useRef } from "react";
import { StoryFn, Meta } from "@storybook/react";

import TopAppBar from ".";
import Box from "components/Box";
import Button from "components/Button";
import Input from "components/Input";
import Flex from "components/Flex";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/TopAppBar",
    component: TopAppBar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as Meta<typeof TopAppBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof TopAppBar> = (args) => <TopAppBar {...args} />;

export const Default = Template.bind({});

export const ScrollAnimation: StoryFn<typeof TopAppBar> = (args) => {
    const targetRef = useRef(null);

    return (
        <>
            <TopAppBar targetRef={targetRef} {...args} />
            <Box style={{ height: '100vh' }} />
            <Flex direction="column" ref={targetRef}>
                <Input label="Email de contact" />
                <Button>HELLO</Button>
            </Flex>
            <Box style={{ height: '200vh' }} />
        </>
    )
}