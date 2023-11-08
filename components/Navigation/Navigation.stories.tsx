import { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";

const meta: Meta<typeof Navigation> = {
  title: "components/Navigation",
  component: Navigation,
  argTypes: {
    isLoggedIn: { control: "boolean" },
    showLoginButton: { control: "boolean" },
  },
  tags: ["autodocs"],
};

export const Default: StoryObj<typeof Navigation> = {
  args: { isLoggedIn: true },
};
export default meta;
