import { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "components/LandingPage/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Button: StoryObj<typeof Hero> = {
  args: {
    isLoggedIn: false,
  },
};
