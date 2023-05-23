import PalettePreview from "./PalettePreview";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design Tokens/Palette",
  component: PalettePreview,
} satisfies Meta<typeof PalettePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {};
