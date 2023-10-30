import { Meta, StoryObj } from "@storybook/react";
import { NavMenu } from "./NavMenu";

const meta: Meta<typeof NavMenu> = {
  title: "components/Navigation/NavMenu",
  component: NavMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Button: StoryObj<typeof NavMenu> = {
  args: {},
};
