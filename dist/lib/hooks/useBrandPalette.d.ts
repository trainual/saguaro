import Palette from "../types/Palette";
import PaletteOption from "../types/PaletteOption";
import { CorePaletteBoard } from "../types/PaletteBoard";
declare const useBrandPalette: (board: CorePaletteBoard, brandOption: PaletteOption | string) => {
    brand: Palette | import("../types/Palette").ExpandedPalette;
    isCustomHex: boolean;
};
export default useBrandPalette;
