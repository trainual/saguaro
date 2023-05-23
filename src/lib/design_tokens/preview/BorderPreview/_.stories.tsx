import BorderPreview from "./BorderPreview";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design Tokens/Borders",
  component: BorderPreview
} satisfies Meta<typeof BorderPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Borders: Story = {};
