import { Meta, StoryObj } from "@storybook/react";
import Nav from "./navigation";

const meta: Meta<typeof Nav> = {
  title: "components/Nav",
  component: Nav,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Button: StoryObj<typeof Nav> = {
  args: {
    text: "click to increment the number",
  },
};
