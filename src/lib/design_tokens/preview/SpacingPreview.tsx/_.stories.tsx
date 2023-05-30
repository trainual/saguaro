import SpacingPreview from "./SpacingPreview";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design Tokens/Spacing",
  component: SpacingPreview,
} satisfies Meta<typeof SpacingPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spacing: Story = {};
