import { Meta, StoryObj } from "@storybook/react";
import ChangePasswordEmail from "@/components/Auth/ChangePassword/SendEmail";
import DefaultCentering from "@/stories/storybook-decorators/DefaultCentering";
const meta: Meta<typeof ChangePasswordEmail> = {
  title: "components/General/Auth/ChangePasswordEmail",
  component: ChangePasswordEmail,
  tags: ["autodocs"],
  decorators: [(story) => <DefaultCentering story={story()} />],
};

export const Default: StoryObj<typeof ChangePasswordEmail> = {};
export default meta;
