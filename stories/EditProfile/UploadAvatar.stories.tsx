import { Meta, StoryObj } from "@storybook/react";
import UploadAvatar from "@/components/EditProfile/UploadAvatar";
import DefaultCentering from "../storybook-decorators/DefaultCentering";

const meta: Meta<typeof UploadAvatar> = {
  title: "components/Profile/Edit/UploadAvatar",
  component: UploadAvatar,
  tags: ["autodocs"],
};

export const Primary: StoryObj<typeof UploadAvatar> = {
  decorators: [(story) => <DefaultCentering story={story()} />],
};

export default meta;
