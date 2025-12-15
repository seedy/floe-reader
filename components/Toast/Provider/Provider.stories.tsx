import type { Meta, StoryFn } from "@storybook/nextjs";
import Button from "components/Button";
import Toast from "components/Toast";
import type { SyntheticEvent } from "react";
import ToastProvider, { useToast } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: ToastProvider,
  subcomponents: { Toast },
  title: "Components/ToastProvider",
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
    addToast({ children: email, title: "Succès", variant: "success" });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="email" />
      <Button type="submit">Prendre contact</Button>
    </form>
  );
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <Consumer />,
};
