import { Meta, StoryObj } from "@storybook/react";
import LandingPage from "./landing";

const meta: Meta<typeof LandingPage> = {
  title: "Page/LandingPage",
  component: LandingPage,
  tags: ["autodocs"],
};

export const Default: StoryObj<typeof LandingPage> = {};

export default meta;
