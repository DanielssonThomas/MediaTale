import { Meta, StoryObj } from "@storybook/react";
import { ProfileHeading } from "./Heading";

const meta: Meta<typeof ProfileHeading> = {
  title: "components/Profile/Heading",
  component: ProfileHeading,
  argTypes: {
    username: { control: "text" },
    followers: { control: "number" },
    following: { control: "number" },
    user_id: { control: "string" },
    isCurrentUser: { control: "boolean" },
    avatar_url: { control: "text" },
  },
  tags: ["autodocs"],
};

export const Primary: StoryObj<typeof ProfileHeading> = {
  args: {
    username: "TesterMcTest",
    followers: 0,
    following: 0,
    isCurrentUser: true,
    user_id: "0",
    avatar_url: null,
  },
};

export default meta;
