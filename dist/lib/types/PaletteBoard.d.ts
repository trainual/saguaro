import Palette, { ExpandedPalette } from "./Palette";
export type CorePaletteBoard = {
    blue: Palette;
    green: Palette;
    magenta: Palette;
    neutral: ExpandedPalette;
    purple: Palette;
    red: Palette;
    yellow: Palette;
    orange: Palette;
};
type PaletteBoard = CorePaletteBoard & {
    brand: Palette;
};
export default PaletteBoard;
