import { Meta, StoryObj } from "@storybook/react";
import { FeedbackToggle } from "./FeedbackToggle";

const meta: Meta<typeof FeedbackToggle> = {
  title: "components/General/FeedbackToggle",
  component: FeedbackToggle,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary: StoryObj<typeof FeedbackToggle> = {};

export default meta;
