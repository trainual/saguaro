import HeightPreview from "./HeightPreview";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design Tokens/Heights",
  component: HeightPreview
} satisfies Meta<typeof HeightPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heights: Story = {};
