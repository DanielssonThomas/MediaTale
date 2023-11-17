import { Meta, StoryObj } from "@storybook/react";
import EditProfileDetails from "@/components/EditProfile/Details/Details";
import DefaultCentering from "../storybook-decorators/DefaultCentering";

const meta: Meta<typeof EditProfileDetails> = {
  title: "components/Profile/Edit/Details",
  component: EditProfileDetails,
  argTypes: {
    about: { control: "text", defaultValue: "About goes here" },
    contact_email: { control: "text", defaultValue: "email@goes.here" },
    country: {
      options: ["Finland", "Norway", "Sweden"],
      control: "radio",
      defaultValue: "Sweden",
    },
    created_at: { control: "text", defaultValue: "2023-08-11" },
    first_name: { control: "text", defaultValue: "First name" },
    last_name: { control: "text", defaultValue: "Last Name" },
  },
  tags: ["autodocs"],
};

export const Primary: StoryObj<typeof EditProfileDetails> = {
  decorators: [(story) => <DefaultCentering story={story()} />],
};

export default meta;
