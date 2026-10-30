import FontWeightPreview from "./FontWeightPreview";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Design Tokens/Font Weights",
  component: FontWeightPreview,
  // Token pages get a hand-written Guide.mdx only where there is usage guidance.
  tags: ["!autodocs"],
} satisfies Meta<typeof FontWeightPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
