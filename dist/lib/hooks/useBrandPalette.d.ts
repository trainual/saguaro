import { default as Palette } from '../types/Palette';
import { default as PaletteOption } from '../types/PaletteOption';
import { CorePaletteBoard } from '../types/PaletteBoard';
declare const useBrandPalette: (board: CorePaletteBoard, brandOption: PaletteOption | string) => {
    brand: Palette | import('..').ExpandedPalette;
    isCustomHex: boolean;
};
export default useBrandPalette;
