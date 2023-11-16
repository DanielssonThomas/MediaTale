import { Meta, StoryObj } from "@storybook/react";
import Toast from "@/components/General/Toast";
import PopUpCentering from "../storybook-decorators/PopUpCentering";

const meta: Meta<typeof Toast> = {
  title: "components/General/Toast",
  component: Toast,
  argTypes: {
    error: { control: "boolean" },
    text: { control: "text" },
  },
  tags: ["autodocs"],
  decorators: [(story) => <PopUpCentering story={story()} />],
};

export const Default: StoryObj<typeof Toast> = {
  args: { error: false, text: "This is a toast" },
};
export default meta;
