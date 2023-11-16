import { Meta } from "@storybook/react";
import { LoadingPreview } from "@/components/PostFeed/PostPreview.tsx/PostPreviewTypes/LoadingPreview";
import PostPreviewCard from "@/stories/storybook-decorators/PostPreviewCard";

const meta: Meta<typeof LoadingPreview> = {
  title: "components/General/PostFeed/PostPreview",
  component: LoadingPreview,
  decorators: [(story) => <PostPreviewCard story={story()} />],
};

export const Loading = {};

export default meta;
