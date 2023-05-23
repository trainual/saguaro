import PaletteOption from "../types/PaletteOption";
import PaletteBoard from '../design_tokens/colors/palette_boards/light'

export function ensureHex(color: PaletteOption | string) {
  if (color.startsWith("#")) {
    return;
  }

  throw new Error("Custom color must be a hex code.");
}

export function isPalette(color: PaletteOption | string): color is PaletteOption {
  return Object.keys(PaletteBoard).includes(color);
}
