import SpacingPreview from "./SpacingPreview";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Design Tokens/Spacing",
  component: SpacingPreview,
  // Token pages get a hand-written Guide.mdx only where there is usage guidance.
  tags: ["!autodocs"],
} satisfies Meta<typeof SpacingPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
