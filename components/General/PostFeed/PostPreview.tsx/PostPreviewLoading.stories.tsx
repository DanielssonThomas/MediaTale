import { Meta, StoryObj } from "@storybook/react";
import { LoadingPreview } from "./PostPreviewTypes/LoadingPreview";

const meta: Meta<typeof LoadingPreview> = {
  title: "components/General/PostFeed/PostPreview/LoadingPreview",
  component: LoadingPreview,
  parameters: {
    layout: "centered",
  },
};

export const Default = {};

export default meta;
