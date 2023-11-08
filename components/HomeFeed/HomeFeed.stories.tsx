import { Meta, StoryObj } from "@storybook/react";
import HomeFeed from "./HomeFeed";

const meta: Meta<typeof HomeFeed> = {
  title: "components/HomeFeed",
  component: HomeFeed,
  argTypes: {},
  tags: ["autodocs"],
};

export const Default: StoryObj<typeof HomeFeed> = {
  args: {},
};
export default meta;
