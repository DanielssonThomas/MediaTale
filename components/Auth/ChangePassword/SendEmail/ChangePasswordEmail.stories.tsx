import { Meta, StoryObj } from "@storybook/react";
import { ChangePasswordEmail } from "./ChangePasswordEmail";

const meta: Meta<typeof ChangePasswordEmail> = {
  title: "components/General/Auth/ChangePasswordEmail",
  component: ChangePasswordEmail,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export const Default: StoryObj<typeof ChangePasswordEmail> = {};
export default meta;
