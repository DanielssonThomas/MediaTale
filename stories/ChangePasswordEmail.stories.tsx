import { Meta, StoryObj } from "@storybook/react";
import { ChangePasswordEmail } from "../components/Auth/ChangePassword/SendEmail/ChangePasswordEmail";
import CardCentering from "./storybook-decorators/CardDecorator";

const meta: Meta<typeof ChangePasswordEmail> = {
  title: "components/General/Auth/ChangePasswordEmail",
  component: ChangePasswordEmail,
  tags: ["autodocs"],
  decorators: [(story) => <CardCentering story={story()} />],
};

export const Default: StoryObj<typeof ChangePasswordEmail> = {};
export default meta;
