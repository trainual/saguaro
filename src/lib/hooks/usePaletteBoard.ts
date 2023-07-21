
import StyleMode from "../types/StyleMode";
import PaletteBoardLight from "../design_tokens/colors/palette_boards/light";
import PaletteBoardDark from "../design_tokens/colors/palette_boards/dark";
import useBrandPalette from "./useBrandPalette";
import PaletteOption from "../types/PaletteOption";
import PaletteBoard from "../types/PaletteBoard";

const usePaletteBoard = (mode: StyleMode, brandOption: PaletteOption | string): PaletteBoard => {
  const board = mode === 'light' ? PaletteBoardLight : PaletteBoardDark;
  const { brand, isCustomHex } = useBrandPalette(board, brandOption);

  return {
    ...board,
    brand: mode === 'dark' && isCustomHex ? board.purple : brand
  }
}

export default usePaletteBoard;