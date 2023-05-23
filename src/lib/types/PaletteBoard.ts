import Palette, { ExpandedPalette } from "./Palette";

export type CorePaletteBoard = {
  aquamarine: Palette,
  blue: Palette,
  green: Palette,
  grey: Palette,
  magenta: Palette,
  neutral: ExpandedPalette,
  ochre: Palette,
  orange: Palette,
  purple: Palette,
  red: Palette,
  teal: Palette,
  violet: Palette,
};

type PaletteBoard = CorePaletteBoard & {
  brand: Palette;
}

export default PaletteBoard;