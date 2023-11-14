import { Meta, StoryObj } from "@storybook/react";
import { ProfileDetails } from "./Details";

const meta: Meta<typeof ProfileDetails> = {
  title: "components/Profile/Details",
  component: ProfileDetails,
  argTypes: {
    about: { control: "text" },
    contact_email: { control: "text" },
    country: { control: "text" },
    created_at: { control: "date" },
  },
  tags: ["autodocs"],
};

export const Primary: StoryObj<typeof ProfileDetails> = {
  args: {
    about: "this is the about section",
    contact_email: "contact@email.here",
    country: "Country",
    created_at: "2023-11-13 20:24:14.834427+00",
  },
};

export default meta;
