import ThemePreview from "./ThemePreview";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design Tokens/Themes/Default",
  component: ThemePreview
} satisfies Meta<typeof ThemePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
