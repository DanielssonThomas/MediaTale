import { Meta, StoryObj } from "@storybook/react";
import { LoadingPreview } from "./PostPreviewTypes/LoadingPreview";
import CardCentering from "../../Storybook/CardDecorator";

const meta: Meta<typeof LoadingPreview> = {
  title: "components/General/PostFeed/PostPreview/LoadingPreview",
  component: LoadingPreview,
  decorators: [(story) => <CardCentering story={story()} />],
};

export const Default = {};

export default meta;
