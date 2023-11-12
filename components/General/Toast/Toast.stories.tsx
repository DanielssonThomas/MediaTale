import { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "components/General/Toast",
  component: Toast,
  argTypes: {
    error: { control: "boolean" },
    text: { control: "text" },
  },
  tags: ["autodocs"],
};

export const Default: StoryObj<typeof Toast> = {
  args: { error: false, text: "This is a toast" },
};
export default meta;
