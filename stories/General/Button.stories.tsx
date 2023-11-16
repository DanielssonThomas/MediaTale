import { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/General/Button";
import DefaultCentering from "../storybook-decorators/DefaultCentering";

const meta: Meta<typeof Button> = {
  title: "components/General/Button",
  component: Button,
  argTypes: {
    formAction: { control: "boolean" },
    href: { control: "text" },
    posTopLeft: { control: "boolean" },
    text: { control: "text" },
    type: {
      control: "select",
      options: ["link", "formAction", "default", "static"],
    },
  },
  tags: ["autodocs"],
  decorators: [(story) => <DefaultCentering story={story()} />],
};

export const Default: StoryObj<typeof Button> = {
  args: {
    type: "default",
    text: "Button",
    posTopLeft: false,
    posTopRight: false,
  },
};
export default meta;
