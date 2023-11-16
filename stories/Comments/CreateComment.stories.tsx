import { Meta, StoryObj } from "@storybook/react";
import CreateComment from "@/components/Post/CreateComment";
import PostPreviewCard from "../storybook-decorators/PostPreviewCard";

const meta: Meta<typeof CreateComment> = {
  title: "components/Comments/CreateComment",
  component: CreateComment,
  tags: ["autodocs"],
  argTypes: {
    avatar_url: { control: "text" },
    post_id: { control: "number" },
    profile_id: { control: "number" },
  },
  decorators: [(story) => <PostPreviewCard story={story()} />],
};

export const Primary: StoryObj<typeof CreateComment> = {
  args: { avatar_url: null, post_id: 0, profile_id: 0 },
};
export default meta;
