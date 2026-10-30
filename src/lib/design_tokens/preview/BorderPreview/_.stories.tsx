import BorderPreview from "./BorderPreview";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Design Tokens/Borders",
  component: BorderPreview,
  // Token pages get a hand-written Guide.mdx only where there is usage guidance.
  tags: ["!autodocs"],
} satisfies Meta<typeof BorderPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
