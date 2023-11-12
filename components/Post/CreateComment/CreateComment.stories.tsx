import { Meta, StoryObj } from "@storybook/react";
import { CreateComment } from "./CreateComment";

const meta: Meta<typeof CreateComment> = {
  title: "components/Comments/CreateComment",
  component: CreateComment,
  tags: ["autodocs"],
  argTypes: {
    avatar_url: { control: "text" },
    post_id: { control: "number" },
    profile_id: { control: "number" },
  },
  parameters: {
    layout: "centered",
  },
};

export const Primary: StoryObj<typeof CreateComment> = {
  args: { avatar_url: null, post_id: 0, profile_id: 0 },
};
export default meta;
