import PaletteOption from "../types/PaletteOption";
import { ColorTokens } from "..";
export declare function ensureHex(color: PaletteOption | string): void;
export declare function isPalette(color: PaletteOption | string): color is PaletteOption;
export declare function getPrimaryPreviewColor(palette: PaletteOption, vars: ColorTokens): any;
export declare function getSecondaryPreviewColor(palette: PaletteOption, vars: ColorTokens): any;
