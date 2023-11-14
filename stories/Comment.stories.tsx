import { Meta, StoryObj } from "@storybook/react";
import { Comment } from "../components/Post/Comments/Comment/Comment";
import CardCentering from "./storybook-decorators/CardDecorator";

const meta: Meta<typeof Comment> = {
  title: "components/Comments/Comment",
  component: Comment,
  tags: ["autodocs"],
  argTypes: {
    comment: { control: "text" },
    username: { control: "text" },
    disliked: { control: "boolean" },
    liked: { control: "boolean" },
    like_count: { control: "number" },
  },
  decorators: [(story) => <CardCentering story={story()} />],
};

export const Primary: StoryObj<typeof Comment> = {
  args: {
    username: "username",
    comment: "Comment",
    avatar_url: null,
    disliked: false,
    liked: false,
    like_count: 0,
    id: 0,
  },
};
export default meta;
