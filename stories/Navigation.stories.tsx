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
    showUploadPost: { control: "boolean" },
  },
  tags: ["autodocs"],
  decorators: [
    (story) => (
      <div className="w-screen min-h-screen bg-[#EDEDED] dark:bg-[#1C1C1C] dark:text-[#EDEDED] transition-all duration-500 ease-out overflow-hidden">
        {story()}
      </div>
    ),
  ],
};

export const Primary: StoryObj<typeof Navigation> = {
  args: {
    isLoggedIn: true,
    avatar_url: null,
    showBackButton: false,
    showLoginButton: false,
    showUploadPost: false,
  },
};

const Template = (args: any) => <Navigation {...args} />;

export default meta;
