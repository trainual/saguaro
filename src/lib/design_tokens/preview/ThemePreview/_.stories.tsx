import ThemePreview from "./ThemePreview";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Design Tokens/Themes",
  component: ThemePreview,
  // Token pages get a hand-written Guide.mdx only where there is usage guidance.
  tags: ["!autodocs"],
} satisfies Meta<typeof ThemePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
