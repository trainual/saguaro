import BorderPreview from "./BorderPreview";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design System/Design System/Styles/Border Preview",
  component: BorderPreview,
  tags: ["autodocs"],
} satisfies Meta<typeof BorderPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
