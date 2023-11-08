import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "components/general/Button",
  component: Button,
  argTypes: {
    formAction: { control: "boolean" },
    href: { control: "text" },
    posTopLeft: { control: "boolean" },
    text: { control: "text" },
    type: { control: "select", options: ["link", "formAction", "default"] },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default: StoryObj<typeof Button> = {
  args: { type: "default", text: "Button" },
};
export default meta;
