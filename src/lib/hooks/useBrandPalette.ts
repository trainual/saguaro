import { ensureHex, isPalette } from "../helpers/color";
import { darken, lighten } from 'polished';
import Palette from "../types/Palette";
import PaletteOption from "../types/PaletteOption";
import { CorePaletteBoard } from "../types/PaletteBoard";

function autoPalette(color: string) {
  return {
    "00": lighten(0.36, color),
    "05": lighten(0.32, color),
    "10": lighten(0.27, color),
    "15": lighten(0.14, color),
    "20": lighten(0.1, color),
    "30": lighten(0.0, color),
    "40": darken(0.07, color),
    "50": darken(0.14, color),
    "60": darken(0.2, color),
    "70": darken(0.25, color),
    "80": darken(0.31, color),
    "90": darken(0.36, color),
  } as Palette;
}

const useBrandPalette = (board: CorePaletteBoard, brandOption: PaletteOption | string) => {
  if (isPalette(brandOption)) {
    return board[brandOption];
  }

  ensureHex(brandOption);
  
  return autoPalette(brandOption);
}

export default useBrandPalette;