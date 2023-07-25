import { ensureHex, isPalette } from "../helpers/color";
import { darken, lighten } from 'polished';
import Palette from "../types/Palette";
import PaletteOption from "../types/PaletteOption";
import { CorePaletteBoard } from "../types/PaletteBoard";

function autoPalette(color: string) {
  return {
    "00": lighten(0.42, color),
    "05": lighten(0.38, color),
    "10": lighten(0.32, color),
    "20": lighten(0.25, color),
    "30": lighten(0.18, color),
    "40": lighten(0.10, color),
    "50": color,
    "60": darken(0.07, color),
    "70": darken(0.14, color),
    "80": darken(0.20, color),
    "90": darken(0.25, color),
  } as Palette;
}

const useBrandPalette = (board: CorePaletteBoard, brandOption: PaletteOption | string) => {
  if (isPalette(brandOption)) {
    return {
      brand: board[brandOption],
      isCustomHex: false
    };
  }

  ensureHex(brandOption);
  
  return { 
    brand: autoPalette(brandOption),
    isCustomHex: true
  };
}

export default useBrandPalette;