import { Meta, StoryObj } from "@storybook/react";
import { PostPreview } from "./PostPreview";
import CardCentering from "../../Storybook/CardDecorator";
const meta: Meta<typeof PostPreview> = {
  title: "components/General/PostFeed/PostPreview",
  component: PostPreview,
  argTypes: {
    avatar_url: { control: "string" },
    description: { control: "text" },
    imageUrl: { control: "string" },
    like_count: { control: "number" },
    post_id: { control: "number" },
    title: { control: "text" },
    username: { control: "text" },
    view_count: { control: "number" },
  },
  tags: ["autodocs"],
  decorators: [(story) => <CardCentering story={story()} />],
};

export const Primary: StoryObj<typeof PostPreview> = {
  args: {
    avatar_url: null,
    description: "This is the description",
    title: "This is the title",
    imageUrl: null,
    like_count: 0,
    post_id: 0,
    username: "Your username",
    view_count: 0,
  },
};

export const Image: StoryObj<typeof PostPreview> = {
  args: {
    avatar_url: null,
    description: "This is the description",
    title: "This is the title",
    imageUrl: "/images/placeholder.svg",
    like_count: 0,
    post_id: 0,
    username: "Your username",
    view_count: 0,
  },
};

export default meta;
