import { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "../components/Navigation/Navigation";
import { within, userEvent } from "@storybook/testing-library";

const meta: Meta<typeof Navigation> = {
  title: "components/Navigation",
  component: Navigation,
  argTypes: {
    isLoggedIn: { control: "boolean" },
    showLoginButton: { control: "boolean" },
    showBackButton: { control: "boolean" },
    avatar_url: { control: "string" },
  },
  tags: ["autodocs"],
};

export const Primary: StoryObj<typeof Navigation> = {
  args: {
    isLoggedIn: true,
    avatar_url: null,
    showBackButton: false,
    showLoginButton: false,
  },
};

const Template = (args: any) => <Navigation {...args} />;

export default meta;