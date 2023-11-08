import { Meta, StoryObj } from "@storybook/react";
import { FeedbackToggle } from "./FeedbackToggle";

const meta: Meta<typeof FeedbackToggle> = {
  title: "components/general/FeedbackToggle",
  component: FeedbackToggle,
  argTypes: {},
  tags: ["autodocs"],
};

export const Default: StoryObj<typeof FeedbackToggle> = {};
export default meta;
