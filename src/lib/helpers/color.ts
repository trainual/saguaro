import PaletteOption from "../types/PaletteOption";
import PaletteBoard from '../design_tokens/colors/palette_boards/light'
import { ColorTokens } from "..";

export function ensureHex(color: PaletteOption | string) {
  if (color.startsWith("#")) {
    return;
  }

  throw new Error("Custom color must be a hex code.");
}

export function isPalette(color: PaletteOption | string): color is PaletteOption {
  return Object.keys(PaletteBoard).includes(color);
}

export function getPrimaryPreviewColor(palette: PaletteOption, vars: ColorTokens) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (vars as any)["preview" + capitalize(palette) + "Primary"];
}

export function getSecondaryPreviewColor(palette: PaletteOption, vars: ColorTokens) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (vars as any)["preview" + capitalize(palette) + "Secondary"];
}


// Private

const capitalize = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};