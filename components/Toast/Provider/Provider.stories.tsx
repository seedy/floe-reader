import React, { SyntheticEvent } from "react";
import { StoryFn, Meta } from "@storybook/nextjs";

import ToastProvider, { useToast } from ".";
import Button from "components/Button";
import Toast from "components/Toast";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/ToastProvider",
  component: ToastProvider,
  subcomponents: { Toast },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof ToastProvider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ToastProvider> = (args) => (
  <ToastProvider {...args} />
);

export const Default = Template.bind({});

const Consumer = () => {
  const addToast = useToast();

  const onSubmit = async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };
    const email = target?.email?.value;
    addToast({ variant: 'success', title: "Succès", children: email });
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="email" />
      <Button type="submit">Prendre contact</Button>
    </form>
  )
}

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: (
    <Consumer />
  ),
};
