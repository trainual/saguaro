import PalettePreview from "./PalettePreview";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design Tokens/Palettes",
  component: PalettePreview,
} satisfies Meta<typeof PalettePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Palettes: Story = {};
