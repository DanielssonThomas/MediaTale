import { Meta, StoryObj } from "@storybook/react";
import EditProfileHeading from "@/components/EditProfile/Heading/Heading";
import DefaultCentering from "../storybook-decorators/DefaultCentering";

const meta: Meta<typeof EditProfileHeading> = {
  title: "components/Profile/Edit/Heading",
  component: EditProfileHeading,
  tags: ["autodocs"],
};

export const Primary: StoryObj<typeof EditProfileHeading> = {
  decorators: [(story) => <DefaultCentering story={story()} />],
};

export default meta;
