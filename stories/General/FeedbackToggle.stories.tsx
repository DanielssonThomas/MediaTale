import { Meta, StoryObj } from "@storybook/react";
import FeedbackToggle from "@/components/General/FeedbackToggle";
import DefaultCentering from "../storybook-decorators/DefaultCentering";

const meta: Meta<typeof FeedbackToggle> = {
  title: "components/General/FeedbackToggle",
  component: FeedbackToggle,
  argTypes: {},
  decorators: [(story) => <DefaultCentering story={story()} />],
};

export const Primary: StoryObj<typeof FeedbackToggle> = {};

export default meta;
