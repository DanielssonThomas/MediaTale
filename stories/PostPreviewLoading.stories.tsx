import { Meta, StoryObj } from "@storybook/react";
import { LoadingPreview } from "../components/General/PostFeed/PostPreview.tsx/PostPreviewTypes/LoadingPreview";
import CardCentering from "./storybook-decorators/CardDecorator";

const meta: Meta<typeof LoadingPreview> = {
  title: "components/General/PostFeed/PostPreview",
  component: LoadingPreview,
  decorators: [(story) => <CardCentering story={story()} />],
};

export const Loading = {};

export default meta;
