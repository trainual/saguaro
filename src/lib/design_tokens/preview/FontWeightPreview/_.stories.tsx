import FontWeightPreview from "./FontWeightPreview";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design Tokens/Font Weights",
  component: FontWeightPreview,
} satisfies Meta<typeof FontWeightPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FontWeights: Story = {};
